import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import Movies from './pages/Movies/Movies'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'

const App = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      const publicRoutes = ['/login']

      const isPlayerRoute = location.pathname.startsWith('/player/')

      if (user) {
        if (location.pathname === '/login') {
          navigate('/', { replace: true })
        }
      } else {
        if (!publicRoutes.includes(location.pathname) && !isPlayerRoute) {
          navigate('/login', { replace: true })
        }
      }
    })

    return () => unsub()
  }, [navigate, location.pathname])

  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  )
}

export default App
