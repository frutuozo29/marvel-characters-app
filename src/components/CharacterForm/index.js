import React, { Component } from 'react'

// redux
import { bindActionCreators } from 'redux'
// react-redux
import { connect } from 'react-redux'

import * as localCharactersActions from '../../actions/localCharacters'

// ant
import { Form, Input, Button, Row, Col, Typography } from 'antd';

const { Title } = Typography

export class CharacterForm extends Component {

  state = {
    id: 0,
    name: '',
    description: ''
  }

  componentWillMount() {
    const { id } = this.props.match.params
    // eslint-disable-next-line
    const character = this.props.characters.find((characterFind) => characterFind.id == id)

    this.setState(() => ({
      id: character.id,
      name: character.name,
      description: character.description
    }))
  }

  saveCharacter() {
    const { postLocalCharacter } = this.props
    postLocalCharacter({ ...this.state })
    this.props.history.push('/')
  }

  render() {
    const { name, description } = this.state
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