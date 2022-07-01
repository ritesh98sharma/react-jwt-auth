import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { CssBaseline } from '@mui/material'
import LoginPage from './pages/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CssBaseline/>
    <LoginPage/>
    </>
  )
}

export default App
