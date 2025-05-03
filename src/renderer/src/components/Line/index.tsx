import styled from '@emotion/styled'
import { createMediaQueries } from '@/utils/theme'
import { Box } from '@mui/material'

type TBreakPointsProps = Partial<{
  width: string
  thickness: string
  color: string
}>

type TProps = {
  xs?: TBreakPointsProps
  sm?: TBreakPointsProps
  md?: TBreakPointsProps
  lg?: TBreakPointsProps
  xl?: TBreakPointsProps
  sx?: Record<string, any>
}

const getProps = ({ width = '100%', thickness = '1px', color = '#000' }: TBreakPointsProps) => `
width: ${width};
height: ${thickness};
background-color: ${color};
border-radius: ${thickness};
`

const StyledLine = styled(Box)<TProps>`
  ${(breakpoints) => createMediaQueries({ breakpoints, callback: getProps })}
`

const Line = ({ xs, sm, md, lg, xl, sx = {} }: TProps) => (
  <StyledLine xs={xs} sm={sm} md={md} lg={lg} xl={xl} sx={sx} />
)

export default Line
