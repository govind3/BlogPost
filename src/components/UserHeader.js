import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchUser} from '../actions'

class UserHeader extends Component {

  componentDidMount(){ // attempt to fetch
    this.props.fetchUser(this.props.userId); // calling action creator

  }
  render() {
    const user=this.props.users.find(user=>user.id===this.props.userId);
    if(!user)
    {
      return null;
    }
    return <div className="header">{user.name}</div>;
  } 
}

const mapStateToProps=(state)=>{
  return {users:state.users};
}

export default connect(mapStateToProps,{fetchUser})(UserHeader);