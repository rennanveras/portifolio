import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'

export const Desc = styled(P)`
  margin-top: 24px;
  margin-bottom: 24px;
`

export const ButtonTheme = styled.button`
  background-color: #282a35;
  font-weight: bold;
  color: #eeeeee;
  border-radius: 22px;
  padding: 8px;
  font-size: 10px;

  &:hover {
    cursor: pointer;
    background-color: #101010;
  }
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
