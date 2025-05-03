import Text, { TTextSize } from '@/components/Text'
import Line from '@/components/Line'
import { Box } from '@mui/material'

const PageTitle = ({
  title,
  color = '#000',
  align = 'left',
  size = 'md',
  sx = {}
}: {
  title: string
  color?: string
  align?: string
  size?: TTextSize
  sx?: Record<string, any>
}) => (
  <>
    <Box sx={{ display: 'flex', justifyContent: align === 'right' ? 'flex-end' : align }}>
      <Box>
        <Text size={size} align={align} color={color} sx={sx}>
          {title}
        </Text>

        <Line xs={{ width: `${10 * title.length}px`, color, thickness: '2px' }} />
      </Box>
    </Box>
  </>
)

export default PageTitle
