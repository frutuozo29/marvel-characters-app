import React from 'react';

// routes
import Routes from '../../routes'

import TopBar from '../TopBar'
// antd
import { Layout } from 'antd';

const { Footer, Content } = Layout;

const App = () => (
  <div data-testid="app-test">
    <Layout>
      <TopBar />
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Routes />
      </Content>
      <Footer>copyright © 2019 MARVEL</Footer>
    </Layout>
  </div >
);

export default App;
