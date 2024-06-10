import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import UserService from '../services/UserService'

const AddUserComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const navigate = useNavigate();

    const saveUser = (e) => {
        e.preventDefault();

        const user = { firstName, lastName, emailId }

        UserService.createUser(user).then((response) => {
            console.log(response.data)
            navigate('/users');
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <br/> <br/>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offest-md-3 offset-md-3'>
                        <h2 className='text-center'> Add User </h2>
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-labael'> First Name :</label>
                                    <input 
                                        type="text" 
                                        placeholder="Enter first name" 
                                        name="firstName" 
                                        className="form-control" 
                                        value={firstName} 
                                        onChange= {(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-labael'> Last Name :</label>
                                    <input 
                                        type="text" 
                                        placeholder="Enter last name" 
                                        name="lastName" 
                                        className="form-control" 
                                        value={lastName} 
                                        onChange= {(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-labael'> Email Id :</label>
                                    <input 
                                        type="email" 
                                        placeholder="Enter email" 
                                        name="emailId" 
                                        className="form-control" 
                                        value={emailId} 
                                        onChange= {(e) => setEmailId(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className='btn btn-success' onClick={(e) => saveUser(e)}>Submit</button>
                                <Link to="/users" className='btn btn-danger'> Cancel </Link>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUserComponent