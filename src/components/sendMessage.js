import React from 'react';
import { Button, Form, Input, Row, Col, notification  } from 'antd';
import axios from 'axios';
import data from './data'
import Counter from './Mobx/Mobx'


const openSuccessNotification = () => {
  notification.error({
    message: 'Ошибка',
    description: data.messages_error,
  });
};

const { TextArea } = Input;

const SendMessage = () => {

  const onFinish = (values) => {


  
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    axios.post(  `https://api.green-api.com/waInstance${data.IdInstance}/sendMessage/${data.ApiTokenInstance}`,{
      chatId: values.phone_number,
      message: values.message,
  
    }, config).then((response) =>{
      console.log(response.data)
  
      Counter.trigger( JSON.stringify(response.data, null, 2));
    }).catch((err) =>{
      Counter.trigger( JSON.stringify(err, null, 2));
      openSuccessNotification();
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  
  };

return(
  <>

  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Номер телефона"
      name="phone_number"
      rules={[
        {
          required: true,
          message: 'Пажалуйста введите корректный номер телефона!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Текст"
      name="message"
      rules={[
        {
          required: true,
          message: 'Пажалуйста введите текст !',
        },
      ]}
    >
    <TextArea rows={4} />
    </Form.Item>



    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >

      <Row gutter={16}>
      <Col>
      <Button type="primary" htmlType="submit">
      SendMessage
      </Button>
  
      </Col>
    </Row>
    </Form.Item>
  </Form>
  </>
)
}
export default SendMessage;