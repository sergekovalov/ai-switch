import PageTitle from '@/components/PageTitle'
import StyledTextField from '@/components/StyledForm/StyledTextField'
import { TModalProps } from '@/types/modal-props.type'
import { ProcessingStatus } from '@/types/processing-status.enum'
import { Box, Drawer, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import { useFormik } from 'formik'
import { useCallback, useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import * as Yup from 'yup'
import { useOpenModal } from '@/store/open-modal'
import InputError from '@/components/InputError'
import { AISources } from '@/utils/constants'
import { Flex } from '@/components/Flex'
import SubmitButton from '@/components/SubmitButton'
import Text from '@/components/Text'
import { updateAISources } from '@/actions/config'
import { useAppConfig } from '@/store/app-config'
import { TAISource } from '@/types/app-config.type'

const SourceNames = {
  [AISources.openai]: 'OpenAI',
  [AISources.deepseek]: 'DeepSeek'
}

const validationSchema = Yup.object().shape({
  apiKey: Yup.string().required(),
  aiSource: Yup.string().required()
})

export const AddAISourceModal = ({ onClose }: TModalProps) => {
  const [open, setOpen] = useState(false)
  const [appConfig] = useAppConfig()
  const [status, setStatus] = useState<ProcessingStatus>()
  const [openModal, setOpenModal] = useOpenModal()

  useEffect(() => {
    setOpen(true)
  }, [])

  let formik

  const closeModal = useCallback(() => {
    setOpen(false)
    setTimeout(() => {
      onClose()
    }, 100)
  }, [onClose])

  const onSubmit = useCallback(
    async (values: { apiKey: string; aiSource: string }) => {
      try {
        await updateAISources([
          ...(appConfig?.sources as TAISource[]),
          { apiKey: values.apiKey, name: values.aiSource }
        ])
        closeModal()
        // setTimeout(() => {
        // }, 500)
      } catch (err: any) {
        setStatus(ProcessingStatus.FAILURE)
      }
    },
    [appConfig, openModal]
  )

  formik = useFormik({
    initialValues: {
      apiKey: '',
      aiSource: ''
    },
    validateOnMount: false,
    validationSchema,
    onSubmit
  })

  return (
    <Drawer
      open={open}
      anchor="bottom"
      onClose={() => closeModal()}
      sx={{ backdropFilter: 'blur(10px) brightness(100%)' }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            position: 'relative',
            padding: {
              xs: '32px 0 32px 0'
            }
          }}
        >
          <CloseIcon
            onClick={() => closeModal()}
            className="clickable anim-pulse-on-hover"
            sx={{ position: 'absolute', top: '8px', right: '8px', fontSize: '36px' }}
          />

          <Grid container spacing={2}>
            <Grid size={{ xs: 0, sm: 1, md: 2, lg: 3 }} />
            <Grid size={{ xs: 12, sm: 10, md: 8, lg: 6 }}>
              <PageTitle align="center" title={'Add AI Source'} />

              <br />

              <FormControl fullWidth>
                <InputLabel id="ai-source-label">AI Source</InputLabel>

                <Select
                  labelId="ai-source-label"
                  id="aiSource"
                  name="aiSource"
                  label="AI Source"
                  sx={{ width: '100%' }}
                  onChange={(e) => {
                    formik.setFieldValue('aiSource', e.target.value)
                  }}
                >
                  {Object.values(AISources).map((aiSource: AISources) => (
                    <MenuItem value={aiSource}>
                      <Text>{SourceNames[aiSource]}</Text>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <InputError message={formik.errors.aiSource as string} />

              <StyledTextField
                sx={{
                  width: '100%',
                  bgcolor: '#fff'
                }}
                id="apiKey"
                name="apiKey"
                label="API key"
                fullWidth
                variant="outlined"
                onChange={formik.handleChange}
                autoComplete="off"
              />
              <InputError message={formik.errors.apiKey as string} />

              <Flex justifyContent="center">
                <SubmitButton>
                  <Text color="#fff">Add Source</Text>
                </SubmitButton>
              </Flex>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Drawer>
  )
}
