import styled from 'styled-components'
import HeaderNavbar from './HeaderNavbar'
import HeaderBackgroundImage from '../assets/images/header_bg.jpg'
import personIcon from '../assets/icons/person.svg'
import { Link, useNavigate } from 'react-router-dom'
import { AppRoutes } from '../data/consts'
import { getCurrentUser, removeCurrentUser } from '../utils/cookie'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

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
  color: ${(props) => props.theme.colors.white};
`

const Line = styled.div`
  border-bottom: 2px solid ${(props) => props.theme.colors.white};
`

const MainHeader = () => {
  const navigate = useNavigate()
  const username = getCurrentUser()
  const user = useSelector((state: RootState) => state.userState.user)

  const logout = () => {
    if (!username) return

    const isUserSure = confirm('Сиз чыгууну каалайсызбы?')

    if (isUserSure) {
      removeCurrentUser(user.pin)
      navigate(AppRoutes.SIGNIN)
    }
  }

  return (
    <Wrapper>
      <div>
        <Button onClick={logout}>
          {username ? (
            <span>{username} - Чыгуу</span>
          ) : (
            <Link to={AppRoutes.SIGNIN}>Кирүү</Link>
          )}
          <img src={personIcon} alt='person' />
        </Button>
      </div>
      <Line />
      <HeaderNavbar />
    </Wrapper>
  )
}

export default MainHeader
