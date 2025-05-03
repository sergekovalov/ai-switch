import { Box, CircularProgress } from '@mui/material'
import ContainedButton from '../ContainedButton'
import React from 'react'

type TProps = {
  children: React.ReactNode
  isLoading?: boolean
}

const SubmitButton = ({ children = null, isLoading, ...rest }: TProps) => {
  return (
    <Box sx={{ position: 'relative' }}>
      {isLoading ? (
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <CircularProgress size={24} />
        </Box>
      ) : null}

      <Box sx={{ opacity: isLoading ? 0.1 : 1 }}>
        <ContainedButton width="100%" type="submit" {...rest}>
          {children || 'Submit'}
        </ContainedButton>
      </Box>
    </Box>
  )
}

export default SubmitButton
