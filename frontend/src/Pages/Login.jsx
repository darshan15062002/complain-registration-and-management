
import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const Login = () => {
    const navigator = useNavigate();
    const { setUser } = useContext(AuthContext);

    // useEffect(() => {
    //     const token = document.cookie
    //     console.log(token);
    // }, [])
    const handleSubmit = async (e) => {

        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value
        axios.post('http://localhost:4000/api/v1/admin/', { email, password }).then(response => {
            setUser({ response });
            navigator('/admin')
        })
            .catch(error => {
                console.log(error.response.data);
            });

    };

    return (
        <div className='formContainer' style={{ height: '100vh', }}>
            <div className="formWrapper">
                <span className="logo">Chat</span>
                <span className="title">Login</span>
                <form onSubmit={handleSubmit} >

                    <input style={{ padding: '10px', width: '50%' }} type="email" placeholder='email' />
                    <input style={{ padding: '10px', width: '50%' }} type="password" placeholder='password' />


                    <button >Sign in</button>

                </form>

            </div>

        </div>
    )
}

export default Login


