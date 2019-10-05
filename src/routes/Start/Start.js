import React, { useState } from 'react'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo'
import { filterPokemons } from 'utils/utils'
import './Start.css'

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
            <div className="center input-wrap">
              <input
                className="search-input"
                onChange={event => setSearchTerm(event.target.value)}
                placeholder="Search for pokemon"
              />
            </div>
            <div className="center">
              <div className="pokemons-wrap">
                {filterPokemons(pokemons, searchTerm).map(pokemon => (
                  <div key={pokemon.id} className="pokemon-wrap">
                    <Link to={`/pokemon/${pokemon.name}`}>
                      <p>{pokemon.name}</p>
                      <img className="pokemon-image" src={pokemon.image} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </>
        )
      }}
    </Query>
  )
}
export default Start
