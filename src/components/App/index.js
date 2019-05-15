import React from 'react';

import Characters from '../Characters'
// antd
import { Layout, Input, Row, Col, Typography } from 'antd';

const { Header, Footer, Content } = Layout;

const { Title } = Typography;

export const App = () => (
  <div className="App">
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: 'white' }}>
        <Row>
          <Col span={8}>
            <Title level={2} style={{ color: 'red', marginTop: 10 }}>Marvel Characters</Title>
          </Col>
          <Col span={8} offset={8}>
            <Input.Search placeholder="Find a character" />
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Characters />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </div >
);

export default App;
