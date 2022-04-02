import Layout from '../Layout'
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../API/auth'
import { useState } from 'react'
import Swal from 'sweetalert2'
import './auth.scss'

export default function Signup() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const updateField = (e) => {
        setUser((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const register = async () => {
        if (!user.name  || !user.email || !user.password) return Swal.fire({
            title: 'Error!',
            text: 'Please fill all of the field correctly',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
        
        setLoading(true)
        const result = await registerUser(user)
        setLoading(false)
        if(result.success){
            Swal.fire({
                title: 'Welcome!',
                text: 'Please confirm your email address before login',
                icon: 'success',
                confirmButtonText: 'Okay will do'
            })
            navigate('/login');
        } else {
            return Swal.fire({
                title: 'Error!',
                text: result.message  || 'Something went wrong, try again later.',
                icon: 'error',
                confirmButtonText: 'Close'
            })
        }
    }
    return (
        <Layout>
            <div className='auth-container'>
                <h1 className='title'>
                    Welcome to <a href='https://nikhilkadyan.com'>Track Fit</a>
                </h1>
                <div className='description'>
                    Create new account
                </div>
                <div className='form'>
                    <label>Full name</label>
                    <input type={'email'} placeholder='John Doe' name='name' onChange={e => updateField(e)} />
                    <label>E-mail address</label>
                    <input type={'email'} placeholder='nikhil@domain.com' name='email' onChange={e => updateField(e)} />
                    <label>Your password</label>
                    <input type={'password'} placeholder='Test123456@@' name='password' onChange={e => updateField(e)} />
                </div>
                <div className='actionContainer'>
                    <div className='signupLink'><Link to={'/login'}>Already have an account ?</Link></div>
                    <button className='btn' onClick={() => register()} disabled={loading}>
                        {loading ? 'Verifying...' : 'Register'}
                    </button>
                </div>
            </div>
        </Layout>
    )
}
