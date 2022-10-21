import React from 'react'
import LandingPageView from "./LandingPageView";


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";



export const App = () => {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<LandingPageView />} />
              <Route path="/home" element={<LandingPageView />} />
              <Route path=":id" element={<LandingPageView />} />
              <Route path="*" element={<Navigate replace to={"/"}/>} />

          </Routes>

      </BrowserRouter>
  )
}
