import { useState } from 'react'
 
import './App.css'
import Header from './Component/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <Header/>
      </>
  )
}

export default App
