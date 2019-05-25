import React from 'react';

// routes
import Routes from '../../routes'

import TopBar from '../TopBar'
// antd
import { Layout } from 'antd';

const { Content } = Layout;

const App = () => (
  <div data-testid="app-test">
    <Layout>
      <TopBar />
      <Content style={{ padding: '0 50px', marginTop: 30 }}>
        <Routes />
      </Content>
      <footer style={{ position: 'fixed', bottom: 0, width: '100%', padding: '0 50px' }}>
        <h5>copyright © 2019 MARVEL</h5>
      </footer>
    </Layout>
  </div >
);

export default App;
