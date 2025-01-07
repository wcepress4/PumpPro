import React, {useEffect, useState} from 'react'
import UserService from '../../../services/UserService'
import { Link } from 'react-router-dom'
import { setRequestMeta } from 'next/dist/server/request-meta'

const ListUser = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = () => {
        UserService.getAllUsers().then((response) => {
            setUsers(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteUser = (userId) => {
        UserService.deleteUser(userId).then((response) => {
            getAllUsers();
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className = "container">
            <h2 className='text-center'>List Users</h2>
            {/* <Link to = "/admin/add-user" className='btn btn-primary mb-2'> Add User </Link> */}
            <table className='table table-bordered table-striped'>
                <thead>
                    <th> User Id </th>

                    <th> Username </th>
                    <th> First Name </th>
                    <th> Last Name </th>
                    <th> Email </th>
                    <th> Role </th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        users.map(
                            user =>
                            <tr key = {user.id}>
                                <td> {user.id} </td>
                                <td> {user.login} </td>
                                <td> {user.firstName} </td>
                                <td> {user.lastName} </td>
                                <td> {user.email} </td>
                                <td> {user.role.toLowerCase()} </td>
                                <td>
                                    <Link className="btn btn-info" to={`/admin/edit-user/${user.id}`}> Update </Link>
                                    <button className="btn btn-danger" onClick = {() => deleteUser(user.id)}
                                    style = {{marginLeft:"10px"}} > Delete </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>            
        </div>
    )
}

export default ListUser;