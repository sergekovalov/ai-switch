import React from 'react'
import { Button } from '@mui/material'

interface IGradient {
  from: string
  to: string
}

interface IProps {
  children: React.ReactNode
  disabled?: boolean
  bg?: string
  color?: string
  size?: 'small' | 'medium' | 'large'
  width?: string
  height?: string
  gradient?: IGradient
  borderRadius?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  href?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: (e?: any) => void
  sx?: Record<string, any>
}

const ContainedButton = ({
  children,
  disabled = false,
  bg = '#000',
  color,
  gradient,
  onClick,
  size = 'medium',
  startIcon,
  endIcon,
  href,
  width = 'auto',
  height = 'auto',
  borderRadius = '8px',
  className = '',
  sx = {},
  type = 'button',
  ...rest
}: IProps) => {
  const onClickAction = (e) => {
    if (onClick) {
      onClick(e)
    }
  }

  const styles = {
    bgcolor: gradient ? `linear-gradient(45deg,${gradient.from},${gradient.to})` : bg,
    width,
    height,
    borderRadius,
    pl: 4,
    pr: 4,
    boxShadow: 'none',
    '&:hover': {
      bgcolor: bg
    },
    ...sx
  }

  return (
    <Button
      disabled={disabled}
      variant="contained"
      // component="span"
      size={size}
      onClick={onClickAction}
      startIcon={startIcon}
      endIcon={endIcon}
      type={type}
      sx={styles}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default ContainedButton
