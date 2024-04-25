import React from "react"
import { Route, Routes, useRoutes } from "react-router-dom"
import MainRouter from "./MainRouters"


const App = () => {
  
  const Routers = useRoutes(MainRouter)
  return (
   <Routes>
    <Route path="/*" element={Routers}/>
   </Routes>
    
  )
}

export default App
