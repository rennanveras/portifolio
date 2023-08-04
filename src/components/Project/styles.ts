import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 16px;
`
export const LinkBtn = styled.a`
  background-color: ${(props) => props.theme.backgroundBtn};
  color: ${(props) => props.theme.white};
  font-size: 14px;
  padding: 8px;
  margin-top: 24px;
  display: inline-block;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`
