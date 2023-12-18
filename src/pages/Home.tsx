import MainLayout from '../components/MainLayout'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const ContentWrapper = styled.div`
  padding: 30px;
`

const Home = () => {
  return (
    <MainLayout>
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </MainLayout>
  )
}

export default Home
