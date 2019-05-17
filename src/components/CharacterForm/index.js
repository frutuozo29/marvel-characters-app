import React, { Component } from 'react'

// redux
import { bindActionCreators } from 'redux'
// react-redux
import { connect } from 'react-redux'

import * as localCharactersActions from '../../actions/localCharacters'

// ant
import { Form, Input, Button, Row, Col, Typography, List } from 'antd';

const { Title, Paragraph } = Typography

export class CharacterForm extends Component {

  state = {
    id: 0,
    name: '',
    description: '',
    character: {}
  }

  componentWillMount() {
    const { id } = this.props.match.params
    const characterFilter = this.props.characters.find((characterFind) => characterFind.id === parseInt(id))

    this.setState(() => ({
      id: characterFilter.id,
      name: characterFilter.name,
      description: characterFilter.description,
      character: { ...characterFilter }
    }))
  }

  saveCharacter() {
    const { saveLocalCharacter } = this.props

    saveLocalCharacter({ ...this.state })
    this.props.history.push('/')
  }

  render() {
    const { name, description, character } = this.state
    const { details } = this.props.match.params

    if (details)
      return (
        <div data-testid="characterFormDetail">
          <Title level={2}>Character Details</Title>
          <Row gutter={8}>
            <Col span={4}>
              <img
                style={{ width: '100%', height: 170 }}
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={`thumbnail`}
              />
            </Col>
            <Col span={12}>
              <Title level={4}>{character.name}</Title>
              <Paragraph ellipsis={{ rows: 3, expandable: true }}>{character.description}</Paragraph >
            </Col>
            <Col span={6}>
              <List
                size="small"
                header={<div>Series</div>}
                bordered
                dataSource={character.series.items}
                renderItem={item => <List.Item>{item.name}</List.Item>}
              />
            </Col>
          </Row>
          <Row style={{ marginTop: 15 }}>
            <Col span={4}>
              <Button
                name="back"
                type="outline"
                onClick={() => this.props.history.push('/')}
              >
                Back to list
            </Button>
            </Col>
          </Row>
        </div>
      )
    return (
      <div data-testid="characterForm">
        <Title level={2}>Editing Character</Title>
        <Form>
          <Row>
            <Col span={6}>
              <Form.Item label="Name">
                <Input
                  name="name"
                  placeholder="Input a name"
                  value={name}
                  onChange={({ target: { name, value } }) => this.setState((state) => ({ ...state, [name]: value }))}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={10}>
              <Form.Item label="Description">
                <Input.TextArea
                  rows={4}
                  name="description"
                  placeholder="Input a description"
                  value={description}
                  onChange={({ target: { name, value } }) => this.setState((state) => ({ ...state, [name]: value }))}
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button
              name="save"
              type="primary"
              onClick={this.saveCharacter.bind(this)}
            >
              Save
            </Button>
            <Button
              name="cancel"
              style={{ marginLeft: 2 }}
              type="outline"
              onClick={() => this.props.history.push('/')}
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </div >
    )
  }
}

const mapStateToProps = ({ characters }) => ({
  characters: characters.items
})

const mapDispatchToProps = (dispatch) => bindActionCreators(localCharactersActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CharacterForm)