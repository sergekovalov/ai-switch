import { TChatMessage, TChatMessageRole } from '@/types/app-config.type'
import { Flex } from '../Flex'
import { Box } from '@mui/material'
import Text from '../Text'

type TProps = {
  message: TChatMessage
}

export const ChatMessage = ({ message }: TProps) => {
  return (
    <Flex
      justifyContent={message.role === TChatMessageRole.user ? 'flex-end' : 'flex-start'}
    >
      <Box className={`chat-message-${message.role}`} sx={{ p: 1 }}>
        {message.content.split('\n').map((text: string) => (
          <Text>{text}</Text>
        ))}
      </Box>
    </Flex>
  )
}
