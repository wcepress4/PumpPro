import React, {useEffect, useState} from 'react'
import UserService from '../services/UserService'
import { Link } from 'react-router-dom'
import { setRequestMeta } from 'next/dist/server/request-meta'

const ListUserComponent = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {

        UserService.getAllUsers().then((response) => {
            setUsers(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
    }, [])

    return (
        <div className = "container">
            <h2 className='text-center'>List Users</h2>
            <Link to = "/add-user" className='btn btn-primary mb-2'> Add User </Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <th> User Id </th>

                    <th> User First Name </th>
                    <th> User Last Name </th>
                    <th> User Email It </th>
                </thead>
                <tbody>
                    {
                        users.map(
                            user =>
                            <tr key = {user.id}>
                                <td> {user.id} </td>
                                <td> {user.firstName} </td>
                                <td> {user.lastName} </td>
                                <td> {user.emailId} </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>            
        </div>
    )
}

export default ListUserComponent