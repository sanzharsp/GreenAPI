import React from 'react';
import { Button, Form, Input, Row, Col, notification  } from 'antd';
import data from './data';
import Counter from './Mobx/Mobx'
import axios from 'axios'

const openSuccessNotification = () => {
  notification.error({
    message: 'Ошибка',
    description: 'Сообщение отправлено с ошибками',
  });
};


const SendFileByUrl = () => {

  const onFinish = (values) => {

    const urlParts = values.url.split('/');
    const imageName = urlParts[urlParts.length - 1];
  
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    axios.post(  `https://api.green-api.com/waInstance${data.IdInstance}/sendFileByUrl/${data.ApiTokenInstance}`,{
      chatId: values.phone_number,
      urlFile: values.url,
      fileName: imageName,
  
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
      name="phone_numbe"
      rules={[
        {
          required: true,
          message: 'Введите номер телефона!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Url файла"
      name="url"
      rules={[
        {
          required: true,
          message: 'Введите url!',
        },
      ]}
    >
    <Input/>
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
      SendFileByUrl
      </Button>
  
      </Col>
    </Row>
    </Form.Item>
  </Form>
)
    }
export default SendFileByUrl;