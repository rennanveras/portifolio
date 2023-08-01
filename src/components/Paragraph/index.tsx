import { P } from './styles'

export type Props = {
  children: string
  type?: 'primary' | 'segundary'
}

const Paragraph = ({ children, type = 'primary' }: Props) => (
  <P type={type}>{children}</P>
)

export default Paragraph