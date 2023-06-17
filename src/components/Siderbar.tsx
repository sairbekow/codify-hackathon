import React from 'react'
import styled from 'styled-components'
import logo from '../assets/icons/logo.png'

const Wrapper = styled.div``

// const Logo = styled.img``

const Sidebar = () => {
  return (
    <Wrapper>
      <img src={logo} alt='logo' width={100} height={100}/>
    </Wrapper>
  )
}

export default Sidebar
