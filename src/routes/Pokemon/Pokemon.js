import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      types
      maxCP
      number
      weight {
        minimum
        maximum
      }
      classification
      resistant
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      weaknesses
      fleeRate
      evolutions {
        id
      }
      evolutionRequirements {
        amount
        name
      }
      maxHP
      image
    }
  }
`

const Pokemon = ({
  match: {
    params: { name },
  },
}) => {
  return (
    <Query query={GET_POKEMON} variables={{ name }}>
      {({ loading, error, data: { pokemon } }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`
        //console.log(data)
        return (
          <div>
            <p>{name}</p>
            <img src={pokemon.image} />
            <p>
              Weaknesses:{' '}
              {pokemon.weaknesses.map(weakness => (
                <span>{weakness} </span>
              ))}
            </p>
            <pre>{JSON.stringify(pokemon, null, 2)}</pre>
          </div>
        )
      }}
    </Query>
  )
}
export default Pokemon
