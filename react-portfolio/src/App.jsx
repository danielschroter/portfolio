import React from 'react'
import LandingPageView from "./LandingPageView";


import { BrowserRouter, Routes, Route } from "react-router-dom";



export const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<LandingPageView />} />
              <Route path=":id" element={<LandingPageView />} />
          </Routes>

      </BrowserRouter>
  )
}
