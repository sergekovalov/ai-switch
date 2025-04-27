import { Box, Grid } from '@mui/material'
import Aside from './components/Aside'
import { useCallback, useEffect } from 'react'
import { usePage } from './store/page'
import { Pages } from '../types/pages.enum'
import Dashboard from './containers/Dashboard'
import Users from './containers/Users'
import User from './containers/User'
import { useConfig } from './store/app-config'
import { getConfig } from './actions/config'

export const App = () => {
  const [config, setConfig] = useConfig()

  const [page] = usePage()

  const switchPage = useCallback(() => {
    // switch (page) {
    //   case Pages.DASHBOARD:
    //     return <Dashboard />
    //   case Pages.USERS:
    //     return <Users />
    //   case Pages.USER:
    //     return <User />
    // }
  }, [page])

  const fetchConfig = async () => {
    getConfig()
  }

  useEffect(() => {
    fetchConfig()
  }, [])

  return (
    <Grid container spacing={2} sx={{ height: '100dvh' }}>
      <Grid size={{ xs: 12, sm: 4, md: 4, lg: 3 }}>
        <Aside />
      </Grid>
      <Grid size={{ xs: 4, sm: 8, md: 8, lg: 9 }}>
        {/* <Box sx={{ p: 1 }}>{switchPage()}</Box> */}
      </Grid>
    </Grid>
  )
}

export default App
