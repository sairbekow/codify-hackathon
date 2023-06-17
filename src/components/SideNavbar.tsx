import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.nav`
  margin: 0 auto;
  padding-top: 30px;
`

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const Li = styled.li`
  text-transform: capitalize;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
`

const SideNavbar = () => {
  const links: string[] = ['БАШКЫ', 'СУУ СУГАРУУ БӨЛҮМҮ', 'ЖАЙЫТ КОМИТЕТИ', 'СТАТИСТИКА БӨЛҮМҮ', 'ЮРИДИКАЛЫК БӨЛҮМ', 'АСКЕРДИК КАТТОО', 'ЭКОНОМИКА БӨЛҮМҮ', 'МИ «ТАЗАЛЫК»', 'ВЕТ. ДЕПАРТАМЕНТ', 'АРЫЗ-ДОО']
  return (
    <Nav>
      <Ul>
        {links.map(item => (
          <Li key={item}>
            <Link to='/'>{item}</Link>
          </Li>
        ))}
      </Ul>
    </Nav>
  )
}

export default SideNavbar
