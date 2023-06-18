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

const SideNavbar = () => {
  const links = [
    ['Башкы', AppRoutes.HOME],
    ['Суу сугаруу бөлүмү', AppRoutes.IRRIGATION],
    ['Жайыт Комитети', AppRoutes.PASTURE],
    ['Вет. Департамент', AppRoutes.VET_DEPARTMENT],
    ['Арыз-доо', '/home'],
    ['Статистика бөлүмү', '/home'],
    ['Юридикалык бөлүм', '/home'],
    ['Аскердик каттоо', '/home'],
    ['Экономика бөлүмү', '/home'],
    ['МИ «Тазалык»', '/home'],
  ]

  return (
    <Nav>
      <Ul>
        {links.map((item, index) => (
          <Li key={item[0]}>
            {index === 4 && (
              <div
                style={{
                  color: 'gray',
                  marginBottom: 20,
                  borderBottom: '1px solid gray',
                }}>
                Жакында
              </div>
            )}
            <Link to={item[1]}>{item[0]}</Link>
          </Li>
        ))}
      </Ul>
    </Nav>
  )
}

export default SideNavbar
