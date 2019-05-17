import React, { useEffect } from 'react'

// redux
import { bindActionCreators } from 'redux'
// react-redux
import { connect } from 'react-redux'
// react router
import { Link } from 'react-router-dom'

import * as charactersActions from '../../actions/characters'

// Antd
import { Card, Col, Row, Button, Icon } from 'antd'
const { Meta } = Card

export const Characters = ({ loading, error, characters, localCharacters, getCharacters }) => {


  useEffect(() => { !characters.length && !loading && !error && getCharacters() })

  characters.length && localCharacters.length && characters.forEach((character, i) => {
    localCharacters.forEach((localCharacter) => {
      if (character.id === localCharacter.id) {
        characters[i].name = localCharacter.name
        characters[i].description = localCharacter.description
      }
    })
  })

  return (
    <div data-testid="characters-test">
      <Row gutter={8} type="flex" justify="center">
        {characters.map((character) =>
          <Col span={4} key={character.id}>
            <Card
              hoverable
              style={{ margin: '5px 5px' }}
              size="small"
              cover={
                <img
                  style={{ width: '100%', height: 170 }}
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={`thumbnail`}
                />
              }
              actions={
                [
                  <Link to={`/characters/${character.id}`}>
                    <Icon type="edit" />
                  </Link>,
                  <Link to={`/characters/${character.id}/details`}>
                    <Icon type="ellipsis" />
                  </Link>
                ]}
            >
              <Meta title={character.name} />
            </Card>
          </Col>
        )
        }
      </Row>
      <div>
        <Button
          name="load-more"
          type="outline"
          disabled={loading}
          onClick={() => getCharacters()}
        >
          Load more
        </Button>
      </div>

    </div>
  )
}

const mapStateToProps = ({ characters, localCharacters }) => ({
  error: characters.error,
  loading: characters.loading,
  characters: characters.items,
  limit: characters.limit,
  offset: characters.offset,
  localCharacters: localCharacters.characters
})

const mapDispatchToProps = (dispatch) => bindActionCreators(charactersActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Characters)
