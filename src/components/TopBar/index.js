import React from 'react';
import * as filterActions from '../../actions/filter'
import * as charactersActions from '../../actions/characters'

// redux
import { bindActionCreators } from 'redux'
// react-redux
import { connect } from 'react-redux'

// antd
import { Layout, Input, Row, Col, Typography } from 'antd';
const { Header } = Layout;
const { Title } = Typography;

export const TopBar = ({ filter, updateFilter, getCharacters }) => (
  <div data-testid="topbar-test">
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: 'white' }}>
      <Row>
        <Col span={8}>
          <Title level={2} style={{ color: '#096dd9', marginTop: 10 }}>Marvel Characters</Title>
        </Col>
        <Col span={8} offset={8}>
          <Input.Search
            name="search"
            placeholder="Find a character"
            value={filter}
            onChange={({ target: { value } }) => updateFilter(value)}
            onSearch={() => getCharacters(true)}
          />
        </Col>
      </Row>
    </Header>
  </div>
)

const mapStateToProps = ({ filter }) => ({
  filter: filter.filter
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...filterActions, ...charactersActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)
