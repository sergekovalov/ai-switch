import { Box } from '@mui/material'
import CenteredBox from '../CenteredBox'
import Spinner from '../Spinner'
import Text from '../Text'

type TProps = {
  height?: string
  description?: string | undefined
}

const ContentPreloader = ({ height = '100%', description }: TProps) => (
  <CenteredBox sx={{ height }}>
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Spinner />
      </Box>

      <br />

      {description && <Text align="center">{description}</Text>}
    </Box>
  </CenteredBox>
)

export default ContentPreloader
