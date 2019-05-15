import React, { useEffect } from 'react'

// redux
import { bindActionCreators } from 'redux'
// react-redux
import { connect } from 'react-redux'

import * as charactersActions from '../../actions/characters'

// Antd
import { Card, Col, Row } from 'antd';

const { Meta } = Card;

export const Characters = ({ error, characters, getCharacters }) => {

  // eslint-disable-next-line
  useEffect(() => { !characters.length && !error && getCharacters() }, [characters])

  return (
    <div>
      <Row gutter={8} type="flex" justify="center">

        {characters.map((character) =>
          <Col span={4}>
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
            >
              <Meta title={character.name} />
            </Card>
          </Col>
        )
        }
      </Row>

    </div>
  )
}

const mapStateToProps = ({ characters }) => ({
  loading: characters.loading,
  error: characters.error,
  characters: characters.items,
  limit: characters.limit,
  offset: characters.offset
})

const mapDispatchToProps = (dispatch) => bindActionCreators(charactersActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Characters)
