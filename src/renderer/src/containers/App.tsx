import { Box, Grid } from '@mui/material'
import Aside from '@/components/Aside'
import { useCallback, useEffect } from 'react'
import { useAppConfig } from '@/store/app-config'
import { getConfig } from '@/actions/config'
import Text from '@/components/Text'
import ContentPreloader from '@/components/ContentPreloader'
import CenteredBox from '@/components/CenteredBox'
import Tile from '@/components/Tile'
import ContainedButton from '@/components/ContainedButton'
import { Flex } from '@/components/Flex'
import { useOpenModal } from '@/store/open-modal'
import { ModalStatus } from '@/types/modal-status.enum'
import { ModalTypes } from '@/types/modal-types.enum'
import { AddAISourceModal } from '@/components/modals/AddAISourceModal'
import ErrorModal from '@/components/modals/ErrorModal'
import { ChatContent } from '@/components/ChatContent'

const ModalsList = () => {
  const [openModal, setOpenModal] = useOpenModal()

  const closeModal = useCallback(() => {
    setOpenModal({ type: openModal?.type, status: ModalStatus.CLOSE })
  }, [openModal])

  const switchModal = () => {
    if (!openModal || openModal.status === ModalStatus.CLOSE) return null

    switch (openModal.type) {
      case ModalTypes.add_new_ai_source_modal:
        return <AddAISourceModal onClose={closeModal} />

      default:
        return null
    }
  }

  return (
    <>
      <ErrorModal />
      {switchModal()}
    </>
  )
}

export const App = () => {
  const [appConfig, setAppConfig] = useAppConfig()
  const [openModal, setOpenModal] = useOpenModal()

  const addNewChat = useCallback(() => {
    if (!appConfig?.sources.length) {
      setOpenModal({
        type: ModalTypes.add_new_ai_source_modal,
        status: ModalStatus.OPEN
      })
    } else {
      appConfig.chats.list.push({
        source: appConfig.sources[0].name,
        model: appConfig.aiModels.chat[appConfig.sources[0].name][0].name as string,
        name: 'New Chat',
        messages: []
      })
      appConfig.chats.selectedChatIndex = appConfig.chats.list.length - 1
      setAppConfig({ ...appConfig })
    }
  }, [appConfig])

  const fetchConfig = useCallback(async () => {
    const cfg = await getConfig()
    setAppConfig(cfg)
  }, [])

  useEffect(() => {
    if (!appConfig.version) {
      fetchConfig()
    }
  }, [appConfig])

  return (
    <>
      <ModalsList />

      {appConfig.version ? (
        <Box sx={{ height: '100dvh', display: 'flex', flexDirection: 'column' }}>
          {!appConfig.chats.list.length ? (
            <Tile sx={{ flex: 1, p: 2 }}>
              <Box sx={{ height: '100%', width: '100%' }}>
                <CenteredBox>
                  <Box>
                    <Flex justifyContent="center">
                      <ContainedButton
                        onClick={() => {
                          addNewChat()
                        }}
                      >
                        <Text color="#fff">New Chat +</Text>
                      </ContainedButton>
                    </Flex>
                  </Box>
                </CenteredBox>
              </Box>
            </Tile>
          ) : (
            <Grid container sx={{ flex: 1 }}>
              <Grid size={{ xs: 12, sm: 4, md: 3, lg: 2 }}>
                <Aside />
              </Grid>
              <Grid size={{ xs: 4, sm: 8, md: 9, lg: 10 }}>
                <Box sx={{ height: 'calc(100% - 16px)', p: 1 }}>
                  <ChatContent />
                </Box>
              </Grid>
            </Grid>
          )}

          <Box sx={{ p: 0.5, bgcolor: '#e5e5e5' }}>
            <Text size="xs">Footer</Text>
          </Box>
        </Box>
      ) : (
        <ContentPreloader />
      )}
    </>
  )
}

export default App
