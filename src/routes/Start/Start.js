import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_POKEMONS = gql`
  {
    pokemons(first: 500) {
      id
      number
      name
      image
      types
    }
  }
`

const Start = () => (
  <Query query={GET_POKEMONS}>
    {({ loading, error, data: { pokemons } }) => {
      if (loading) return 'Loading...'
      if (error) return `Error! ${error.message}`
      //console.log(data)
      return (
        <div>
          {pokemons.map(pokemon => (
            <div key={pokemon.id}>
              <p>{pokemon.name}</p>
              <img src={pokemon.image} />
            </div>
          ))}
        </div>
      )
    }}
  </Query>
)
export default Start
