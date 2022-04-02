import Layout from '../Layout'
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../API/auth'
import { useState } from 'react'
import Swal from 'sweetalert2'
import './auth.scss'

export default function Login() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
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

    const login = async () => {
        if (!user.email || !user.password) return Swal.fire({
            title: 'Error!',
            text: 'Please fill both email and password field',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
        setLoading(true)
        const result = await loginUser(user)
        setLoading(false)
        if (result.success) {
            localStorage.setItem('user', JSON.stringify(result));
            navigate('/dashboard');
        } else {
            return Swal.fire({
                title: 'Error!',
                text: result.message || 'Something went wrong, try again later.',
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
                    Login to continue
                </div>
                <div className='form'>
                    <label>E-mail address</label>
                    <input type='email' placeholder='nikhil@domain.com' name='email' onChange={e => updateField(e)} />
                    <label>Your password</label>
                    <input type={'password'} placeholder='Test123456@@' name='password' onChange={e => updateField(e)} />
                </div>
                <div className='actionContainer'>
                    <div className='signupLink'><Link to={'/signup'}>Create a new account ?</Link></div>
                    <button className='btn' onClick={() => login()} disabled={loading}>
                        {loading ? 'Verifying...' : 'Proceed with login'}
                    </button>
                </div>
            </div>
        </Layout>
    )
}
