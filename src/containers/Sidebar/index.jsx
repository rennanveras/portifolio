import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'

import { ButtonTheme, Desc, SidebarContainer } from './styles'

type Props = {
  changeTheme: () => void
}

const Sidebar = ({ changeTheme }: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar></Avatar>
      <Title fontSize={18}>Rennan Veras</Title>
      <Paragraph type={'primary'} fontSize={16}>
        rennanveras
      </Paragraph>
      <Desc type={'segundary'} fontSize={12}>
        Dev Front End
      </Desc>
      <ButtonTheme onClick={changeTheme}>Trocar Tema</ButtonTheme>
    </SidebarContainer>
  </aside>
)

export default Sidebar
