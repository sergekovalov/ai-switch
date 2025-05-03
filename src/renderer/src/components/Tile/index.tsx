import { Box } from '@mui/material'
import { BOX_SHADOW } from '@/utils/theme'

const Tile = ({ children, glass = false, sx = {}, ...rest }) => (
  <Box
    sx={{
      bgcolor: glass ? 'rgba(255,255,255,0.5)' : '#fff',
      borderRadius: '10px',
      boxShadow: BOX_SHADOW.SOFT,
      border: '1px solid #e5e5e5',
      p: 3,
      ...sx
    }}
    {...rest}
  >
    {children}
  </Box>
)

export default Tile
