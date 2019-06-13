import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios';

import './App.css';
import FriendList from './Components/FriendList'
import Friend from './Components/Friend'
import NewFriendForm from './Components/NewFriendForm'
import NavBar from './Components/NavBar'
import Container from '@material-ui/core/Container';

export default class App extends Component {
    state = {
      friends: [],
      friendNew: ''
    };

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then((response) => {
        this.setState({
            friends: response.data
        })
    }).catch(err => console.log(err));
}

  render() {
    const {friends} = this.state;
    return(
      <Router className='App'>
        <div className='friend-list-container'>
          <NavBar />
          <Container className='container' maxWidth="md">
            <Route
              exact 
              path='/'
              render={props => <FriendList friends={friends} />}
             />

            <Route 
              exact
              path='/friend/:id'
              render={(props) => {
                return (<Friend {...props} friends={friends} />)
              }}
              />

            <Route
              exact
              path="/:id"
              component={NewFriendForm}
             />
         </Container>
        </div>
      </Router>
  )}
}
