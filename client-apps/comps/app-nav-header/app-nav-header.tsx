import React from "react"
import { useNavigate } from "react-router-dom"
import { Box, Typography, AppBar, Toolbar, IconButton, Avatar, Tooltip, Menu, MenuItem } from "@mui/material"
import MenuOpenIcon from "@mui/icons-material/MenuOpen"
import MenuIcon from "@mui/icons-material/Menu"


// Application Screen || Define Imports
// =====================================================================================================================
// =====================================================================================================================
import "./app-nav-header.scss"


// Application Screen || Define Exports
// =====================================================================================================================
// =====================================================================================================================
export const AppNavHeader = ({ drawerWidth, isMobile, setMobile }: { drawerWidth: number, isMobile: boolean, setMobile: (params: boolean) => any }) => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const popperItems: Array<{name: string, route: string}> = [
    { name: "GitHub", route: "/profile" },
  ]

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar
      component="nav"
      position="fixed"
      elevation={0}
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => setMobile(!isMobile)}
        >
          {isMobile ? <MenuIcon /> : <MenuOpenIcon />}

        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MST - Bug Report
        </Typography>
        <Box>
          <Tooltip title="Verc James">
            <IconButton onClick={handleMenu}>
              <Avatar alt="VITE" src="/vercjames.png" />
            </IconButton>
          </Tooltip>

          <Menu
            sx={{ mt: "45px" }}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            keepMounted
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {popperItems.map((item: {name: string, route: string}) => (
              <MenuItem key={item.name} onClick={() => { window.open("https://github.com/Vercjames/mobx-state-tree-bug-report", "_blank"); handleClose() }}>{item.name}</MenuItem>
              // <MenuItem key={item.name} onClick={() => { navigate(item.route); handleClose() }}>{item.name}</MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
