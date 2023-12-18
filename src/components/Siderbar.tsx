import React from 'react'
import styled from 'styled-components'
import logo from '../assets/icons/logo.png'
import SideNavbar from './SideNavbar'

const Wrapper = styled.div`
  height: 100%;
  padding: 30px;
  /* min-width: 300px; */
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Sidebar = () => {
  return (
    <Wrapper>
      <img src={logo} alt='logo' width={159} height={199} />
      <SideNavbar />
    </Wrapper>
  )
}

export default Sidebar
