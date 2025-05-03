import CoreModal from '@/components/CoreModal'
import { Alert, AlertTitle, Box, Stack } from '@mui/material'
import Image from '@/components/Image'
import ContainedButton from '@/components/ContainedButton'
import { useErrorModal } from '@/store/error-modal'
import Text from '@/components/Text'

const ErrorModal = () => {
  const [errorModal, setErrorModal] = useErrorModal()

  const closeModal = () => {
    setErrorModal(null)
  }

  return (
    <CoreModal
      title={
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Image src="warning.png" height="20px" sx={{ mr: 1 }} />
          <Text>Error</Text>
        </Box>
      }
      open={!!errorModal}
      onClose={closeModal}
      sizes={{ xs: '95%', sm: '80%', md: '60%', lg: '40%' }}
    >
      {errorModal ? (
        <Stack direction="column" spacing={2}>
          <Alert severity="error" icon={false}>
            {errorModal.title ? <AlertTitle>{errorModal.title}</AlertTitle> : null}
            {errorModal.message}
          </Alert>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <ContainedButton onClick={closeModal}>Close</ContainedButton>
          </Box>
        </Stack>
      ) : null}
    </CoreModal>
  )
}

export default ErrorModal
