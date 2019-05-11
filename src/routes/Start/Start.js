import React, { useState } from 'react'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo'
import { filterPokemons } from 'utils/utils'

const GET_POKEMONS = gql`
  {
    pokemons(first: 500) {
      id
      name
      image
    }
  }
`

const Start = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <Query query={GET_POKEMONS}>
      {({ loading, error, data: { pokemons } }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`
        //console.log(data)
        return (
          <>
            <input onChange={event => setSearchTerm(event.target.value)} />
            <div>
              {filterPokemons(pokemons, searchTerm).map(pokemon => (
                <div key={pokemon.id}>
                  <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
                  <img src={pokemon.image} />
                </div>
              ))}
            </div>
          </>
        )
      }}
    </Query>
  )
}
export default Start
