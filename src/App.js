import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import client from 'Client'
import './App.css'
import Header from 'components/Header/Header'
import Start from 'routes/Start/Start'
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Header />
        <Start />
      </ApolloProvider>
    )
  }
}

export default App
