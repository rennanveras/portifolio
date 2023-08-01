import { P } from '../Paragraph/styles'
import Title from '../Title'

import { Card } from './styles'
import { LinkBtn } from './styles'

const Project = () => (
  <Card>
    <Title>Projeto lista de tarefas</Title>
    <P type={'segundary'}>Lista de tarefas feita com VueJS</P>
    <LinkBtn href="google">Visualizar</LinkBtn>
  </Card>
)

export default Project
