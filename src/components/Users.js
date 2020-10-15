import React from 'react'
import axios from 'axios'

export default class UserList extends React.Component {
    
    state = {
        users: []
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_DJM_BACKEND}`)
      .then(res => {
        const users = res.data.users;
        this.setState({ users });
      })
    }

    render() {
        return (
          <ul>
            { this.state.users.map(user => <li key={user.id}>{user.email}</li>)}
          </ul>
        )
      }

}