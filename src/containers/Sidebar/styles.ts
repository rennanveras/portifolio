import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'

export const Desc = styled(P)`
  margin-top: 24px;
  margin-bottom: 24px;
`

export const ButtonTheme = styled.button`
  background-color: ${(props) => props.theme.colorPrimary};
  font-weight: bold;
  color: ${(props) => props.theme.background};
  border-radius: 22px;
  padding: 8px;
  font-size: 10px;

  &:hover {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    opacity: 0.9;
  }
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
