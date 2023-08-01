import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'

import { ButtonTheme, Desc, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar></Avatar>
      <Title fontSize={18}>Rennan Veras</Title>
      <Paragraph type={'segundary'} fontSize={16}>
        rennanveras
      </Paragraph>
      <Desc type={'primary'} fontSize={12}>
        Dev Front End
      </Desc>
      <ButtonTheme>Trocar Tema</ButtonTheme>
    </SidebarContainer>
  </aside>
)

export default Sidebar
