import { Box, Stack } from '@mui/material'
import { Flex } from '../Flex'
import StyledTextField from '../StyledForm/StyledTextField'
import { useCallback, useEffect, useState } from 'react'
import { useAppConfig } from '@/store/app-config'
import { TChat, TChatMessage, TChatMessageRole } from '@/types/app-config.type'
import { ChatMessage } from './ChatMessage'
import { AIClient } from '@/utils/ai-clients/ai-client'

let shiftPressed = false

export const ChatContent = () => {
  const [appConfig, setAppConfig] = useAppConfig()
  const [chat, setChat] = useState<TChat>(appConfig.chats.list[appConfig.chats.selectedChatIndex])
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<TChatMessage[]>(chat.messages)

  useEffect(() => {
    setChat(appConfig.chats.list[appConfig.chats.selectedChatIndex])
  }, [appConfig])

  useEffect(() => {
    chat.messages = messages

    setAppConfig({ ...appConfig })
  }, [messages])

  const sendMessage = useCallback(
    async (prompt: string) => {
      setMessages([
        ...messages,
        {
          role: TChatMessageRole.user,
          content: prompt
        }
      ])

      const resp = await new AIClient({
        apiKey: appConfig.sources.find(({ name }) => name === chat.source)?.apiKey as string,
        model: chat.model,
        source: chat.source
      }).sendChatMessage(prompt)

      setMessages((prev: TChatMessage[]) => [
        ...prev,
        {
          role: TChatMessageRole.system,
          content: resp
        }
      ])
    },
    [appConfig, chat]
  )

  return (
    <Flex
      sx={{
        height: 'calc(100% - 24px)',
        flexDirection: 'column',
        bgcolor: '#f2f2f2',
        p: 0.5,
        m: 1,
        borderRadius: '8px'
      }}
    >
      <Box sx={{ flex: 1, width: 'calc(100% - 64px)', height: '100%', overflowY: 'auto', p: 4 }}>
        <Stack direction="column" spacing={1}>
          {chat.messages.map((chatMessage: TChatMessage) => (
            <ChatMessage message={chatMessage} />
          ))}
        </Stack>
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
          onKeyDown={(e) => {
            if (e.key === 'Shift') {
              shiftPressed = true
            }
            if (e.key === 'Enter' && !shiftPressed && message.trim().length) {
              e.preventDefault()
              sendMessage(message)
              setMessage('')
            }
          }}
          onKeyUp={(e) => {
            if (e.key === 'Shift') {
              shiftPressed = false
            }
          }}
        />
      </Box>
    </Flex>
  )
}
