import styled from 'styled-components'
import { Props } from '.'

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + `px` : `14px`)};
  color: ${(props) =>
    props.type === 'primary'
      ? props.theme.colorSegundary
      : props.theme.colorPrimary};
  line-height: 22px;
`
