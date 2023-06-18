import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AppRoutes } from '../data/consts'

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

interface ILink {
  label: string
  href: string
}

const SideNavbar = () => {
  const links = [
    ['Башкы', AppRoutes.HOME],
    ['Суу сугаруу бөлүмү', AppRoutes.IRRIGATION ],
    ['Жайыт Комитети', AppRoutes.FIELD],
    ['Арыз-доо', AppRoutes.COMPLAINS],
    ['Вет. Департамент', AppRoutes.VET_DEPARTMENT],
    ['Статистика бөлүмү', '/empty'],
    ['Юридикалык бөлүм', '/empty'],
    ['Аскердик каттоо', '/empty'],
    ['Экономика бөлүмү', '/empty'],
    ['МИ «Тазалык»', '/empty'],
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

export default SideNavbar
