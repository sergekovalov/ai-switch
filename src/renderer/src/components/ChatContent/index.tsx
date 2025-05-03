import { Box } from '@mui/material'
import { Flex } from '../Flex'
import StyledTextField from '../StyledForm/StyledTextField'
import { useCallback, useState } from 'react'
import { useAppConfig } from '@/store/app-config'
import { TChat, TChatMessage } from '@/types/app-config.type'
import { ChatMessage } from './ChatMessage'

export const ChatContent = () => {
  const [appConfig] = useAppConfig()
  const [chat] = useState<TChat>(appConfig.chats.list[appConfig.chats.selectedChatIndex])
  const [message, setMessage] = useState('')

  const sendMessage = useCallback((text: string) => {
    
  }, [])

  return (
    <Flex
      sx={{
        height: 'calc(100% - 8px)',
        flexDirection: 'column',
        bgcolor: '#f2f2f2',
        p: 0.5,
        borderRadius: '8px'
      }}
    >
      <Box sx={{ flex: 1 }}>
        {chat.messages.map((chatMessage: TChatMessage) => (
          <ChatMessage message={chatMessage} />
        ))}
      </Box>
      <Box sx={{ width: '100%' }}>
        <StyledTextField
          sx={{
            width: '100%',
            bgcolor: 'rgba(255,255,255,0.7)'
            // borderRadius: "40px",
            // "& fieldset": { border: "none" },
          }}
          fullWidth
          multiline
          minRows={2}
          maxRows={5}
          id="message"
          name="message"
          variant="outlined"
          value={message}
          autoComplete="off"
          onChange={(e) => {
            setMessage(e.target.value)
          }}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              sendMessage(message)
              setMessage('')
            }
          }}
        />
      </Box>
    </Flex>
  )
}
