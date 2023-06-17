import React from 'react'
import styled from 'styled-components'
import HeaderNavbar from './HeaderNavbar'
import HeaderBackgroundImage from '../assets/images/header_bg.jpg'
import personIcon from '../assets/icons/person.svg'

const Wrapper = styled.div`
  width: 100%;
  background-position: center;
  background-image: url(${HeaderBackgroundImage});
  background-size: cover;
`

const Button = styled.button`
  padding: 10px;
  margin-left: auto;
  display: flex;
  gap: 5px;
  background: transparent;
  color: ${props => props.theme.colors.white};
`

const Line = styled.div`
  border-bottom: 2px solid ${props => props.theme.colors.white};
`

const MainHeader = () => {
  return (
    <Wrapper>
      <div>
        <Button>
          <span>
            Кирүү
          </span>
          <img src={personIcon} alt='person' />
        </Button>
      </div>
      <Line />
      <HeaderNavbar />
    </Wrapper>
  )
}

export default MainHeader
