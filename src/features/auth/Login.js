import React from 'react';
import {  useDispatch } from 'react-redux';
import {
  loginAsync,
} from './authSlice';
import { Button, Form, Input } from 'antd';

export function Login() {
  const dispatch = useDispatch();
    const onFinish = (values) => {
        dispatch(loginAsync({username: values.username, password: values.password}))
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

  return (
    <div className="Login">
        <Form layout="vertical" name="basic"
            initialValues={{

            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </div>
  );
}
