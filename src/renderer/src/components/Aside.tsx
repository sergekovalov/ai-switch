import { Box } from '@mui/material'
import Tile from './Tile'
import { usePage } from '@renderer/store/page'
import { Pages } from 'src/renderer/types/pages.enum'
import Text from './Text'

const Aside = () => {
  const [page, setPage] = usePage()

  return (
    <Box className="aside">
      <Box className="aside-content">
        <Tile
          className="clickable"
          sx={{ mb: 1, bgcolor: page === Pages.DASHBOARD ? '#606060' : '#303030' }}
          onClick={() => setPage(Pages.DASHBOARD)}
        >
          <Text>Dashboard</Text>
        </Tile>

        <Tile
          className="clickable"
          sx={{
            mb: 1,
            bgcolor: [Pages.USERS, Pages.USER].includes(page) ? '#606060' : '#303030'
          }}
          onClick={() => setPage(Pages.USERS)}
        >
          <Text>Users</Text>
        </Tile>

        <Tile
          className="clickable"
          sx={{ bgcolor: page === Pages.MARKETPLACE ? '#606060' : '#303030' }}
          onClick={() => setPage(Pages.MARKETPLACE)}
        >
          <Text>Marketplace asdasd</Text>
        </Tile>
      </Box>
    </Box>
  )
}

export default Aside
