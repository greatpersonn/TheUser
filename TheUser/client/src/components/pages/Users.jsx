import { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '../molecules/Card';
import Create from '../organisms/Create';

import './Users.scss';

const Users = () => {
    const [users, setUsers] = useState([]);

    const handlerGetUsers = () =>{
        try {
            axios.get('http://localhost:5223/api/Users').then((result) => {
                setUsers(result.data);
                console.log(result.data)
            })
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        handlerGetUsers();
    }, [])

    return (
        <div className="container-users">
            <Create getData={handlerGetUsers} />
            <div className="users-wrapper">
                {
                    users.map((user, id) => (
                        <Card user={user} key={id} getData={handlerGetUsers} />
                    ))
                } 
            </div>
        </div>
    );
}

export default Users;