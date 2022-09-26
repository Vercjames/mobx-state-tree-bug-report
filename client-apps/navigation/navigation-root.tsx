import React from "react"
import { Route, Routes } from "react-router-dom"


// Application Navigator || App Imports
// =====================================================================================================================
// ====================================================================================================================='
import { AppLayout } from "@src/routing-app/app-layout/app-layout"
import { AppIndexScreen } from "@src/routing-app/app-screen-index/index-screen"


// Application Navigator || Define Exports
// =====================================================================================================================
// =====================================================================================================================
export const NavigationRoot = () => (
  <div className="wrapper">
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<AppIndexScreen />} />
        <Route path={"/*"} element={<AppIndexScreen />} />
      </Route>
    </Routes>
  </div>
)

