import React, { ReactElement } from "react"
import { useNavigate } from "react-router-dom"
import { useTheme, Box, Drawer, Toolbar, Divider, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from "@mui/material"
import DashboardIcon from "@mui/icons-material/Dashboard"
import GitHubIcon from "@mui/icons-material/GitHub"


// Application Screen || Define Imports
// =====================================================================================================================
// =====================================================================================================================
import "./app-nav-drawer.scss"


// Application Screen || Define Exports
// =====================================================================================================================
// =====================================================================================================================
export const AppNavDrawer = ({ drawerWidth, isMobile }: { drawerWidth: number, isMobile: boolean }) => {
  const navigate = useNavigate()
  const { palette } = useTheme()

  const navItems: Array<{name: string, icon: ReactElement, route: string}> = [
    { name: "Dash", icon: <DashboardIcon />, route: "/" },
  ]

  const isActive = (route: string) => {
    return location.pathname.match(`^${route}$`) ? palette.primary.main : palette.text.secondary
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar sx={{ justifyContent: "center" }}>
        <img src="/vite.svg" height="25px" className="logo" alt="Vite logo" />
      </Toolbar>

      <Divider />

      <List>
        {navItems.map((item: { name: string, icon: ReactElement, route: string }, index: number) => (
          <ListItem key={index} disablePadding>
            {/* The minHeight property is to prevent shrinking since the ListItemText is larger than the ListItemIcon */}
            <ListItemButton onClick={() => navigate(item.route)} sx={{ minHeight: 48 }}>
              {/* Fun little .match(regexp) to make sure Path: "/" doesn't active for every page */}
              <ListItemIcon sx={{ minWidth: 0, mr: !isMobile ? 3 : "auto", color: isActive(item.route) }}>
                {item.icon}
              </ListItemIcon>
              {/* Fun little .match(regexp) to make sure Path: "/" doesn't active for every page */}
              <ListItemText style={{ color: (location.pathname.match(`^${item.route}$`) ? palette.primary.main : palette.text.secondary) }} sx={{ display: isMobile ? "none" : "static" }}>
                {item.name}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box style={{ marginTop: "auto" }}>
        <Divider />
        <List>
          <ListItem disablePadding>
            {/* The minHeight property is to prevent shrinking since the ListItemText is larger than the ListItemIcon */}
            <ListItemButton onClick={() => window.open("https://github.com/Vercjames/mobx-state-tree-bug-report", "_blank")} sx={{ minHeight: 48 }}>
              <ListItemIcon sx={{ minWidth: 0, mr: !isMobile ? 3 : "auto" }}>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText sx={{ display: isMobile ? "none" : "static" }}>
                GitHub
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  )
}
