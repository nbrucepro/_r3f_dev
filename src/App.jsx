import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
        </div>
      </div>

    {/* //end */}   
    </BrowserRouter>
  )
}

export default App;
