import React from 'react';

import Characters from '../Characters'
import TopBar from '../TopBar'
// antd
import { Layout } from 'antd';

const { Footer, Content } = Layout;

export const App = () => (
  <div className="App" data-testid="app-test">
    <Layout>
      <TopBar />
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Characters />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </div >
);

export default App;
