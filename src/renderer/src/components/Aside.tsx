import { Box, Stack } from '@mui/material'
import Tile from './Tile'
import Text from './Text'
import { useAppConfig } from '@/store/app-config'
import { useCallback, useEffect, useState } from 'react'
import { Flex } from './Flex'
import AddBoxIcon from '@mui/icons-material/AddBox'
import SettingsIcon from '@mui/icons-material/Settings'
import { TChat } from '@/types/app-config.type'

const Aside = () => {
  const [appConfig, setAppConfig] = useAppConfig()

  const selectChat = useCallback(
    (chatIndex: number) => {
      appConfig.chats.selectedChatIndex = chatIndex
      setAppConfig({ ...appConfig })
    },
    [appConfig]
  )

  useEffect(() => {
    if (appConfig.chats.list.length && appConfig.chats.selectedChatIndex === -1) {
      selectChat(0)
    }
  }, [appConfig])

  const addNewChat = useCallback(() => {
    appConfig.chats.list.push({
      name: `New Chat ${appConfig.chats.list.length + 1}`,
      source: appConfig.sources[0].name,
      messages: [],
      model: appConfig.aiModels.chat[appConfig.sources[0].name][0].name as string
    })
    appConfig.chats.selectedChatIndex = appConfig.chats.list.length - 1

    setAppConfig({ ...appConfig })
  }, [appConfig])

  return (
    <Box className="aside">
      <Box className="aside-header">
        <Flex justifyContent="space-between">
          <SettingsIcon fontSize="medium" className="clickable anim-pulse-on-hover" />
          <AddBoxIcon
            fontSize="medium"
            className="clickable anim-pulse-on-hover"
            onClick={addNewChat}
          />
        </Flex>
      </Box>
      <Box className="aside-content">
        <Stack direction="column" spacing={0.5}>
          {appConfig.chats.list.map((chat: TChat, index: number) => (
            <Tile
              className="clickable"
              sx={{
                bgcolor:
                  appConfig.chats.selectedChatIndex === index ? 'rgba(0,0,0,0.1)' : 'transparent',
                border: 0,
                boxShadow: 'none',
                p: 1
              }}
              onClick={() => selectChat(index)}
            >
              <Text>{chat.name}</Text>
            </Tile>
          ))}
        </Stack>
      </Box>
    </Box>
  )
}

export default Aside
