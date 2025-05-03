const sizes = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536
}

export const BOX_SHADOW = {
  SOFT: '0px 4px 8px -8px rgba(120,120,120,0.75)',
  MEDIUM: '0px 4px 12px -8px rgba(89,89,89,0.75)',
  STRONG: '0px 18px 16px -24px rgba(0,0,0,0.5)'
}

export const createMediaQueries = ({ breakpoints, callback }) =>
  Object.keys(breakpoints)
    .map((point) =>
      breakpoints[point]
        ? `@media (min-width: ${sizes[point]}px) {${callback(breakpoints[point])}}`
        : ''
    )
    .join('\n')
