import styled from 'styled-components'

const Wrapper = styled.div``

const Content = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 40fr 60fr;
`

const Title = styled.h2`
  font-size: 20px;
`

const PhoneBlock = styled.div``

const DepartmentBlock = styled.div``

const Subtitle = styled.h3`
  margin-bottom: 20px;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Contacts = () => {
  const phoneData = [
    ['Документтерди кабыл алуу', '0312-61-07-05'],
    ['Айыл окмот башчысынын жеке кабыл алуусуна жазылуу', '0312-61-07-05'],
    [
      'Юридикалык жактардан түшкөн каттар менен иштөө боюнча адис',
      '0312-61-34-71',
    ],
    ['Документтик камсыздоо жана контролдоо бөлүмү', '0312-66-06-21'],
    ['Айыл окмот башчысынын  кабылдамасы', '0312-61-11-77'],
    ['Экономика жана финансы маселелери боюнча', '0312-62-58-26'],
  ]
  return (
    <Wrapper>
      <Title>БАЙЛАНЫШ ТЕЛЕФОНДОРУ</Title>
      <Content>
        <PhoneBlock>
          <Subtitle>Телефон</Subtitle>
          <List>
            {phoneData.map((item) => (
              <li key={item[0]}>{item[1]}</li>
            ))}
          </List>
        </PhoneBlock>
        <DepartmentBlock>
          <Subtitle>Бөлүмдөр</Subtitle>
          <List>
            {phoneData.map((item) => (
              <li key={item[0]}>{item[0]}</li>
            ))}
          </List>
        </DepartmentBlock>
      </Content>
    </Wrapper>
  )
}

export default Contacts
