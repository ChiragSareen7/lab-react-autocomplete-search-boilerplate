import { useState } from 'react'
import './App.css'
import Search from './Search'
import Data from "../resources/countryData.json"

function App() {


  return (
    <div>
    <Search data={Data}/>
    </div>
  )
}

export default App
