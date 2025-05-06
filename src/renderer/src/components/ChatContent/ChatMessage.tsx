import { TChatMessage, TChatMessageRole } from '@/types/app-config.type'
import { Flex } from '../Flex'
import { Box } from '@mui/material'
import Text from '../Text'
import { useCallback } from 'react'
import showdown from 'showdown'

type TProps = {
  message: TChatMessage
}

export const ChatMessage = ({ message }: TProps) => {
  const formatText = useCallback((text: string) => {
    const html = new showdown.Converter().makeHtml(text)

    return <div dangerouslySetInnerHTML={{ __html: html }} />
  }, [])

  return (
    <Flex justifyContent={message.role === TChatMessageRole.user ? 'flex-end' : 'flex-start'}>
      <Box className={`chat-message chat-message-${message.role}`} sx={{ p: 1 }}>
        {message.content.split('\n').map((text: string) => (
          <Text size="sm">{formatText(text)}</Text>
        ))}
      </Box>
    </Flex>
  )
}
