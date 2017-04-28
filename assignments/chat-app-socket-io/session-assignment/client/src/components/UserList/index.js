import React, {Component} from 'react';
import './userList.css';
import connection from '../../socket';

class UserList extends Component {

  constructor() {
    super();


    this.state = {
      users: []
    }

    connection.on('user list', userList => {
      this.setState({users: userList})
    });

  }

  renderUserList() {
    return (
      this.state.users.map((user, index) => {
        return (
          <li key={index}>
            <img src={user.picture.data.url}/>
            {user.name}
          </li>
        )
      })
    );
  }


  render() {
    return (
      <ul>
        {this.renderUserList()}
      </ul>
    );
  }
}

export default UserList;
