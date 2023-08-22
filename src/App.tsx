import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {HomeContainer} from "./pages/Home/HomeContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {StartContainer} from "@/pages/Start";

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<StartContainer/>}/>
              <Route path="/game" element={<HomeContainer/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
