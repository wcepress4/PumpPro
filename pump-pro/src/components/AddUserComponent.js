import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom';
import UserService from '../services/UserService'

const AddUserComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateUser = (e) => {
        e.preventDefault();

        const user = { firstName, lastName, email }

        if(id) {
            console.log(`Updating user with id: ${id}`);
            UserService.updateUser(id, user).then((response) => {
                console.log(response.data)
                navigate('/admin/users');
            }).catch(error => {
                console.log(error);
            })
        } else {
            UserService.createUser(user).then((response) => {
                console.log(response.data)
                navigate('/admin/users');
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {   
        if(id) {
            console.log(`Fetching user data for id: ${id}`);
            UserService.getUserById(id).then((response) =>{
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch(error => {
                console.log(error)
            });
        }
    }, [id]);

    const title = () => {

        if(id) {
            return <h2 className = "text-center"> Update User </h2>
        } else {
            return <h2 className = "text-center"> Add User </h2>
        }
    }

    return (
        <div>
            <br/> <br/>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offest-md-3 offset-md-3'>
                        {
                            title()
                        }
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'> First Name :</label>
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
                                    <label className='form-label'> Last Name :</label>
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
                                    <label className='form-label'> Email :</label>
                                    <input 
                                        type="email" 
                                        placeholder="Enter email" 
                                        name="email" 
                                        className="form-control" 
                                        value={email} 
                                        onChange= {(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className='btn btn-success' onClick = {(e) => saveOrUpdateUser(e)} >Submit </button>
                                <Link to="/admin/users" className='btn btn-danger'> Cancel </Link>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUserComponent