import React, { Component } from 'react';
import FriendCard from './FriendCard';

export default class Friend extends Component {
state = {
      friend: null
    };

  componentDidMount() {
    const id = parseInt(this.props.match.params.id);
    const friends = this.props.friends;
    this.fetchFriend(id, friends);
  }

  fetchFriend = (id, friends) => {
    this.setState({friend: friends.find(e => { return e.id === id})})
    };

  componentWillReceiveProps(newProps){
    if(this.props.match.params.id !== newProps.match.params.id){
        const friends = this.props.friends;

      this.fetchFriend(newProps.match.params.id, friends);
    }
  }

  render() {
    const {friend} = this.state;

    if (!this.state.friend) {
      return <div>Loading friend information...</div>;
    }

    return (
      <div className="friend-profile">
        <FriendCard friend={friend} />
      </div>  
    );
  }
}
