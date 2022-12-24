import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchListAsync, removeAsync} from "./todoSlice";
import {Button, Space, Table} from "antd";
import CreateForm from "./Create";


export function Todo() {
  const state = useSelector(state => state.todo);
  console.log('state  ', state)
  const dispatch = useDispatch();

  const [create, setCreate] = useState(false);


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
      <div className="TodoHeader">
        <Button onClick={() => setCreate(true)}>Create</Button>
      </div>
      <div className="TodoContent">
        <Table loading={state.status === 'loading'} columns={columns} dataSource={state.list} />
      </div>

      <CreateForm isOpen={create} onClose={() => setCreate(false)} />
    </div>
  );
}
