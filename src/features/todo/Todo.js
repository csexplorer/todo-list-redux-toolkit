import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchListAsync, removeAsync} from "./todoSlice";
import {Space, Table} from "antd";


export function Todo() {
  const state = useSelector(state => state.todo);
  console.log('state  ', state)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListAsync())
  }, [])

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
          <Space size="middle">
            <a onClick={() => {
              dispatch(removeAsync(record.id))
            }}>Delete</a>
          </Space>
      ),
    },
  ];


  return (
    <div className="Todo">
      <Table loading={state.status === 'loading'} columns={columns} dataSource={state.list} />
    </div>
  );
}
