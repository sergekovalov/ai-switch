interface IProps {
  src: string
  width?: string
  height?: string
  className?: string
  sx?: Record<string, any>
  onClick?: () => void
  onMouseOver?: () => void
  onMouseOut?: () => void
}

const Image = ({
  src,
  width = 'auto',
  height = 'auto',
  className = '',
  sx = {},
  onClick,
  onMouseOver,
  onMouseOut
}: IProps) => (
  <img
    src={src.startsWith('http') ? src : new URL(`images/${src}`, 'https://localhost').href}
    className={className}
    onClick={() => {
      if (onClick) {
        onClick()
      }
    }}
    onMouseOver={() => {
      if (onMouseOver) {
        onMouseOver()
      }
    }}
    onMouseOut={() => {
      if (onMouseOut) {
        onMouseOut()
      }
    }}
    style={{ width, height, ...sx }}
    loading="lazy"
  />
)

export default Image
