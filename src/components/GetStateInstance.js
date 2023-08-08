import React from 'react';
import { Button, Form, Input, Row, Col, notification  } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import Counter from './Mobx/Mobx'

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


const openSuccessNotification = () => {
  notification.success({
    message: 'Успешное действие',
    description: 'Операция выполнена успешно.',
  });
};
const GetStateInstance = () => { 


    const[error,setError] = useState([]);
    const onFinish = (values) => {
    

   
            axios
            .get(`https://api.green-api.com/waInstance${values.idInstance}/getStateInstance/${values.ApiTokenInstance}`)
        
            .then((response) => {
                console.log(response.data)
                Counter.trigger( JSON.stringify(response.data, null, 2));
                openSuccessNotification();
              // Handle success
            })
            .catch((error) => {
                setError(error);
                Counter.trigger( JSON.stringify(error, null, 2));
              // Handle error
            });
        
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
      label="idInstance"
      name="idInstance"
      rules={[
        {
          required: true,
          message: 'Введите idInstance !',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="ApiTokenInstance"
      name="ApiTokenInstance"
      rules={[
        {
          required: true,
          message: 'Введите ApiTokenInstance !',
        },
      ]}
    >
      <Input />
    </Form.Item>



    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >

      <Row gutter={16}>

      <Col>

      <Button type="primary" htmlType="submit" name="button" value="getStateInstance">
        getStateInstance
      </Button>
      </Col>
    </Row>
    </Form.Item>
  </Form>
)
}
export default GetStateInstance;