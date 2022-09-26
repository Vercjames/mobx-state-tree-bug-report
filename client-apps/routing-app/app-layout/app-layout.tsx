import React from "react"
import { Outlet } from "react-router"
import { Box, Toolbar } from "@mui/material"


// Application Screen || Define Imports
// =====================================================================================================================
// =====================================================================================================================
import "./app-layout.scss"
import { AppNavDrawer } from "@comps/app-nav-drawer/app-nav-drawer"
import { AppNavHeader } from "@comps/app-nav-header/app-nav-header"
import { AppFooter } from "@comps/app-footer/app-footer"


// Application Screen || Define Exports
// =====================================================================================================================
// =====================================================================================================================
export const AppLayout = () => {
  const [isMobile, setMobile] = React.useState<boolean>(false)
  const [drawerWidth, setDrawerWidth] = React.useState<number>(240)

  const handleMobile = () => {
    setDrawerWidth(isMobile ? 240 : 60)
    setMobile(!isMobile)
  }

  return (
    <Box className="AppLayout" sx={{ display: "flex" }}>
      <AppNavHeader drawerWidth={drawerWidth} isMobile={isMobile} setMobile={handleMobile} />
      <AppNavDrawer drawerWidth={drawerWidth} isMobile={isMobile} />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Box sx={{ p: 3, mb: 10 }}>
          {/* This is a cute trick provided my the Material UI. */}
          {/* A blank <Toolbar /> can be used to avoid another active toolbar */}
          <Toolbar />

          {/* Our Route content is rendered below inside this <Outlet /> */}
          <Outlet />
        </Box>

        <AppFooter drawerWidth={drawerWidth} />
      </Box>
    </Box>
  )
}
