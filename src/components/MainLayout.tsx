import React from 'react'
import styled from 'styled-components'
import { Container } from '../styles/container'

const Wrapper = styled.div`
  height: 100vh;
`

interface IMainLayout {
  children: JSX.Element
}

const MainLayout = ({ children }: IMainLayout) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  )
}

export default MainLayout
