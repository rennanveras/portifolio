import { P } from './styles'

export type Props = {
  children: string
  type?: 'primary' | 'segundary'
  fontSize?: number
}

const Paragraph = ({ children, type = 'primary', fontSize }: Props) => (
  <P fontSize={fontSize} type={type}>
    {children}
  </P>
)

export default Paragraph
