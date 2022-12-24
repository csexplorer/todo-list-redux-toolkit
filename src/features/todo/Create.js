import React, { } from 'react';
import {Form, Input, InputNumber, Modal, Radio} from 'antd';
import {useDispatch} from "react-redux";
import {createAsync, fetchListAsync} from "./todoSlice";
const CreateForm = ({ isOpen, onClose }) => {
    const [form] = Form.useForm();

    const dispatch = useDispatch();

    return (
        <Modal
            open={isOpen}
            title="Create a new task"
            okText="Create"
            cancelText="Cancel"
            onCancel={onClose}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();

                        dispatch(createAsync(values));
                        dispatch(fetchListAsync());
                        onClose();
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{
                    status: 1
                }}
            >
                <Form.Item name="status" label="Status">
                    <Radio.Group buttonStyle="solid">
                        <Radio.Button value={0}>Inactive</Radio.Button>
                        <Radio.Button value={1}>Active</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    name="title"
                    label="Title"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the title!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="description" label="Description" rules={[
                    {
                        required: true,
                        message: 'Please input the description!',
                    },
                ]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name="number" label="Number" rules={[
                    {
                        required: true,
                        message: 'Please input the number!',
                    },
                ]}>
                    <InputNumber />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default CreateForm;