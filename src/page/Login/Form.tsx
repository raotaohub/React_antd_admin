import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import NProgress from 'nprogress';
import { setUser } from '../../utils/storage';

/** 提示消息 **/
const success = () => {
  message.success('登录成功');
};

const error = () => {
  message.error('网络异常');
};

const warning = () => {
  message.warning('请输入正确的用户名或密码');
};

const NormalLoginForm = (props: any) => {
  const { history } = props;

  const onFinish = (values: any) => {
    NProgress.start();
    const loginState = checkUser(values);
    switch (loginState) {
      case 1:
        success();
        NProgress.done();
        /**
         * 在登录的时候，把用户信息储存到本地
         * **/
        setUser(values.username, JSON.stringify(values));
        history.replace('/');
        break;
      case -1:
        warning();
        NProgress.done();
        break;
      case 0:
        error();
        NProgress.done();
        break;
    }
    NProgress.remove();
  };

  const onFinishFailed = () => {
    props.history.replace('/');
  };
  /** 在 useEffect 中验证是否已登录 **/

  /** 简单验证逻辑 **/
  const checkUser = (useValue: any) => {
    const { username, password } = useValue;

    if (username === 'admin' && password === 'admin') {
      return 1;
    }
    if (username !== 'admin' || password !== 'admin') {
      return -1;
    }
    if (username === '' || password === '') {
      return 0;
    }
  };

  const github = () => {
    window.location.href = 'https://github.com/raotaohub/React_antd_admin';
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item>
        <span style={{ fontSize: '24px' }}>React admin</span>
      </Form.Item>

      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            whitespace: true,
            message: 'Please input your Username!',
          },
          { min: 5, message: '用户名至少5位!' },
          { max: 5, message: '密码最多5位!' },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="用户名:admin"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            whitespace: true,
            message: 'Please input your Password!',
          },
          { min: 5, message: '密码至少5位!' },
          { max: 5, message: '密码最多5位!' },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="密码:admin"
        />
      </Form.Item>

      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住账号</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
      </Form.Item>

      <Form.Item>
        <span onClick={github}>或 现在就去注册疙瘩！</span>
        <a
          href={'https://github.com/raotaohub/React_antd_admin'}
          target={'_blank'}
        >
          了解疙瘩
        </a>
      </Form.Item>
    </Form>
  );
};

export default NormalLoginForm;
