import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import client from 'Client'
import './App.css'
import Header from 'components/Header/Header'
import Start from 'routes/Start/Start'
import Pokemon from 'routes/Pokemon/Pokemon'
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <Route path="/" exact component={Start} />
          <Route path="/pokemon/:name" exact component={Pokemon} />
        </Router>
      </ApolloProvider>
    )
  }
}

export default App
