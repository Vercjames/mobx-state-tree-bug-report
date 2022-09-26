import React from "react"
import { Box, Typography, Card, Grid, Icon, Button } from "@mui/material"


// Application Screen || Access State
// =====================================================================================================================
// =====================================================================================================================
import { MSTContext } from "@MSTContext"
import { ITaskModel, ITaskStore } from "@MSTInterfaces"
import { observer } from "mobx-react-lite"


// Application Screen || Define Imports
// =====================================================================================================================
// =====================================================================================================================
import "./index-screen.scss"
import colors from "@styles/colors.module.scss"


// Application Screen || Define Exports
// =====================================================================================================================
// =====================================================================================================================
export const AppIndexScreen = observer(() => {
  const TaskStore: ITaskStore = MSTContext().TaskStore

  return (
    <div className="AppIndexScreen">
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">
          Dashboard Screen
        </Typography>
        <Box>
          <Button variant="contained" onClick={() => TaskStore.addTask(`task #${TaskStore.TaskCollection.length + 1}`, `description for task: ${TaskStore.TaskCollection.length + 1}`)} disableElevation style={{ minWidth: 150, maxWidth: 150 }}>
            <Icon className="material-icons-outlined" style={{ fontSize: 16, marginRight: 10 }}>add</Icon>
            Add Item
          </Button>
        </Box>
      </Box>

      <Card variant="outlined" sx={{ p: 2, mt: 2 }}>
        {TaskStore.TaskCollection.length <= 0 ? (
          <Typography style={{ textAlign: "center" }}>
            It appears no tasks have been added! please add one
          </Typography>
        ) : (
          <Grid container sx={{ px: 2 }} rowSpacing={2}>
            <Grid container sx={{ pt: 2, pb: 1 }}>
              <Grid item xs={2} style={{ fontSize: 12, color: colors.DARK }}>
                <Typography sx={{ fontWeight: "bold" }}>
                  Id
                </Typography>
              </Grid>
              <Grid item xs={2} style={{ fontSize: 12, color: colors.DARK }}>
                <Typography sx={{ fontWeight: "bold" }}>
                  Title
                </Typography>
              </Grid>
              <Grid item xs={7} style={{ fontSize: 12, color: colors.DARK }}>
                <Typography sx={{ fontWeight: "bold" }}>
                  Description
                </Typography>
              </Grid>
              <Grid item xs={1} style={{ fontSize: 12, color: colors.DARK, textAlign: "center" }}>
                <Typography sx={{ fontWeight: "bold" }}>
                  Actions
                </Typography>
              </Grid>
            </Grid>
            {TaskStore.TaskCollection.map((Task: ITaskModel, index: number) => (
              <Grid container key={index} sx={{ pt: 2 }}>
                <Grid item xs={2} style={{ fontSize: 12, color: colors.DARK }}>
                  <Typography>
                    {Task.id}
                  </Typography>
                </Grid>
                <Grid item xs={2} style={{ fontSize: 12, color: colors.DARK }}>
                  <Typography>
                    {Task.title}
                  </Typography>
                </Grid>
                <Grid item xs={7} style={{ fontSize: 12, color: colors.DARK }}>
                  <Typography>
                    {Task.description}
                  </Typography>
                </Grid>
                <Grid item xs={1} style={{ fontSize: 12, color: colors.DARK, textAlign: "center" }}>
                  <Button variant="contained" onClick={() => Task.setDescription(null)} disableElevation style={{ minWidth: 150, maxWidth: 150 }}>
                    Break
                  </Button>
                </Grid>
              </Grid>
            ))}
          </Grid>
        )}
      </Card>
    </div>
  )
})

