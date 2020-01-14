import React from 'react';
import axios from 'axios';

import UserCard from './UserCard'

class UserList extends React.Component{
    constructor(){
        super();
        this.state = {
            users: []
        };
    }
    
    componentDidMount() {
        axios.get('https://api.github.com/users/lucasgreenwell/followers')
        .then((res) => {
            //  console.log(res)
             this.setState({
                 users: res.data
             })
             console.log(this.state.users)
        })
        .catch(err => {
            console.log(err);
        })
    }

    render(){
        return (

            // <div>i exist</div>
            this.state.users.map(user => {
              return  <UserCard user={user}/>
            })
        )
    }

}
export default UserList