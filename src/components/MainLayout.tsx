import styled from 'styled-components'
import Sidebar from './Siderbar'
import MainHeader from './MainHeader'

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 20fr 80fr;
`

interface IMainLayout {
  children: JSX.Element
}

const MainLayout = ({ children }: IMainLayout) => {
  return (
    <Wrapper>
      <Sidebar />
      <div>
        <MainHeader />
        {children}
      </div>
    </Wrapper>
  )
}

export default MainLayout
