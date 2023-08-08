import React from 'react';
import { Breadcrumb, Layout, Row, Col, Input, Form, Card } from 'antd';
import SettingsGet from './components/getSettings'
import SendMessage from './components/sendMessage'
import SendFileByUrl from './components/sendFileByUrl'
import {observer} from 'mobx-react-lite'
import Counter from './components/Mobx/Mobx'
import GetStateInstance from './components/GetStateInstance'; 




const { Content } = Layout;
const App = observer(() => {
  
  return (
    <Layout>

        <div className="demo-logo" />
        <Card
      title=" Мои данные из Green Api"
      style={{
        width: '100%',
      }}
    >
      <p>IdInstance: 7103845918</p>
      <p>ApiTokenInstance: 4817e38b5a8846b4a3680f90907c56ff6455745220ce4bb3a6</p>
   
    </Card>
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Green Api</Breadcrumb.Item>
          <Breadcrumb.Item>Tests</Breadcrumb.Item>
       
        </Breadcrumb>
    
      </Content>
      <Row >
        <Col span={10}>
    <SettingsGet/>
    <GetStateInstance/>
    <SendMessage />
    <SendFileByUrl/>
    </Col>
    <Col span={10}>

    <Form layout="vertical"  >
      
          <Form.Item
       
            label="Вывод всех ответов" // Название (Label) для первого TextArea
            rules={[
              {
                required: true,
                message: 'Вывод всех ответов',
              },
            ]}
          >
            <Input.TextArea placeholder="Ответ"      
            value={Counter.bool}
            style={{ height: '100%', width: '100%' }} 
            autoSize={{ minRows: 30 }} />
          </Form.Item>
    
          
     

   
    </Form>
    </Col>
       
      </Row>


    </Layout>
  );
})
export default App;




