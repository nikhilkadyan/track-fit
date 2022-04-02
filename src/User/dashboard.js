import Layout from '../Layout'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import './user.scss'

export default function Dashboard() {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    const logout = () => {
        localStorage.removeItem('user')
        navigate('/login')
    }

    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem('user'))
        if (!localUser || !localUser.accessToken || !localUser.refreshToken) navigate('/login')
        setUser(jwt_decode(localUser.idToken))
    }, [setUser, navigate])

    return (
        <Layout>
            {user ?
                <div className='dashboard-container'>
                    You are logged in with {user.email} <br />
                    <button className='logOffBtn' onClick={() => logout()}>Log off</button>
                </div>
                : <>Loading...</>
            }

        </Layout>
    )
}
