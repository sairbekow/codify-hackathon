import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AppRoutes } from '../data/consts.ts'

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
  const links: ILink[] = [
    { label: 'БАШКЫ', href: '/' },
    { label: "СУУ СУГАРУУ БӨЛҮМҮ", href: AppRoutes.IRRIGATION },
    { label: "ЖАЙЫТ КОМИТЕТИ", href: '/' },
    { label: "СТАТИСТИКА БӨЛҮМҮ", href: '/' },
    { label: "ЮРИДИКАЛЫК БӨЛҮМ", href: '/' },
    { label: "АСКЕРДИК КАТТОО", href: '/' },
    { label: "ЭКОНОМИКА БӨЛҮМҮ", href: '/' },
    { label: "МИ «ТАЗАЛЫК»", href: '/'},
    { label: "ВЕТ. ДЕПАРТАМЕНТ", href: AppRoutes.VET_DEPARTMENT },
    { label: "АРЫЗ-ДОО", href: '/' }
  ]
  return (
    <Nav>
      <Ul>
        {links.map((item) => (
          <Li key={item.label}>
            <Link to={item.href}>{item.label}</Link>
          </Li>
        ))}
      </Ul>
    </Nav>
  )
}

export default SideNavbar
