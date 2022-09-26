import React from "react"
import { Box, Typography, Divider } from "@mui/material"


// Application Screen || Define Imports
// =====================================================================================================================
// =====================================================================================================================
import "./app-footer.scss"


// Application Screen || Define Exports
// =====================================================================================================================
// =====================================================================================================================
export const AppFooter = ({ drawerWidth }: { drawerWidth: number }) => {
  const [year] = React.useState<number>(new Date().getFullYear())
  return (
    <Box component="footer" sx={{ position: "fixed", bottom: 0, width: `calc(100% - ${drawerWidth}px)`, backgroundColor: "white" }}>
      <Divider />
      <Typography sx={{ minHeight: 64, display: "flex", justifyContent: "center", alignItems: "center" }}>
        © {year} Verc James. MIT License.
      </Typography>
    </Box>
  )
}
