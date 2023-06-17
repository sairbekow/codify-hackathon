import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import logo from '@/assets/icons/logo.png'
import styled from 'styled-components'
import useLogin from '../hooks/api/useLogin'
import { redirect, useNavigate } from 'react-router-dom'
import { AppRoutes } from '../data/consts'
import { getCurrentUser } from '../utils/cookie'

const Wrapper = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
`

export default function SignIn() {
  const login = useLogin()
  const navigate = useNavigate()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const pin = data.get('pin')
    const password = data.get('password')

    if (!pin || !password) return

    await login({
      pin,
      password,
    })
    navigate(AppRoutes.HOME)
  }

  return (
    <Wrapper>
      <Container
        component='main'
        maxWidth='xs'
        style={{
          width: '100%',
          height: '100%',
          paddingTop: '120px',
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Box sx={{ maxWidth: 150, maxHeight: 150 }}>
            <img src={logo} alt='logo' width='100%' height='100%' />
          </Box>
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 10 }}>
            <TextField
              margin='normal'
              required={true}
              fullWidth
              id='pin'
              label='Жеке номериңиз'
              name='pin'
              autoComplete='Pin'
              autoFocus
              variant='filled'
              style={{ backgroundColor: 'white' }}
            />
            <TextField
              margin='normal'
              required={true}
              fullWidth
              name='password'
              label='Сыр сөзүңүз'
              type='password'
              id='password'
              autoComplete='current-password'
              variant='filled'
              style={{ backgroundColor: 'white' }}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              size='large'
              sx={{ mt: 3, mb: 2 }}>
              Кирүү
            </Button>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  )
}
