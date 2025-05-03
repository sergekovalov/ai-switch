import { TChatMessage, TChatMessageRole } from '@/types/app-config.type'
import { Flex } from '../Flex'
import { Box } from '@mui/material'
import Text from '../Text'

type TProps = {
  message: TChatMessage
}

export const ChatMessage = ({ message }: TProps) => {
  return (
    <Flex justifyContent={message.role === TChatMessageRole.user ? 'flex-end' : 'flex-start'}>
      <Box sx={{ p: 1 }}>
        <Text>{message.content}</Text>
      </Box>
    </Flex>
  )
}
