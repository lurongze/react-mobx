import React, { Component } from 'react';
import { observer, inject} from 'mobx-react';
import { Form, Icon, Input, Button, Checkbox, Card, message } from 'antd';
import { Link }  from 'react-router-dom';
import './index.css';

const FormItem = Form.Item;

@Form.create()
@inject('loginStore')
@observer
class Index extends Component {

  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        try {
          const res = await this.props.loginStore.loginAction(values);
          console.log('res', res);
          console.log('res', res.message);
          if (res.code === 200) {
            message.info('登录成功');
          } else {
            message.error(res.message || '登录失败');
          }
        } catch (e) {
          message.error(JSON.stringify(e));
        }
      }
    });
  };

  render() {

    const { form: { getFieldDecorator }, loginStore: { loading } } = this.props;

    return (
      <div className='App'>
        <Card className={'login-card'} title={'登录'}>
          <Form onSubmit={this.handleSubmit} className='login-form'>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入用户名!' }],
              })(
                <Input prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='Username' />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('userPassword', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='Password' />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Remember me</Checkbox>
              )}
              <Link to={'/forget-password'} className='login-form-forgot'>忘记密码</Link>
              <Button loading={loading} type='primary' htmlType='submit' className='login-form-button'>
                登录
              </Button>
              <Link to={'/forget-password'}>注册</Link>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Index;
