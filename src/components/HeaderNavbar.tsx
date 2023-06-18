import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AppRoutes } from '../data/consts'

const Nav = styled.nav`
  margin: 0 auto;
  padding: 20px;
  color: ${(props) => props.theme.colors.white};
`

const Ul = styled.ul`
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 40px;
`

const Li = styled.li`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
`

const HeaderNavbar = () => {
  const links = [
    ['Башкы', AppRoutes.HOME],
    ['Айыл тарыхы', AppRoutes.VILAGE_HISTORY],
    ['Вакансиялар', AppRoutes.VACANCIES],
    ['Байланыш', AppRoutes.CONTACTS],
  ]
  return (
    <Nav>
      <Ul>
        {links.map((item) => (
          <Li key={item[0]}>
            <Link to={item[1]}>{item[0]}</Link>
          </Li>
        ))}
      </Ul>
    </Nav>
  )
}

export default HeaderNavbar
