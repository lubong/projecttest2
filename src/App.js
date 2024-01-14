import React from 'react'

import { About } from "./container"
import { Navbar } from "./components"

const App = () => {
  return (
    <div className='app'>
        <Navbar/>
        <About/>
    </div>
  )
}

export default App