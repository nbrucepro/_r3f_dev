import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from 'react-router-dom'
import {Navbar,About,Hero,Experience,Works, Feedbacks} from './components'
import Tech from './components/Tech'


function App() {
  const [count, setCount] = useState(0)

  return (  
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
      </div>

    {/* //end */}   
    </BrowserRouter>
  )
}

export default App;
