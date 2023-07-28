import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '14px'};
  color: white;
  padding: 15px;
`
const BotaoPerigo = styled(Botao)`
  background-color: red;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao fontSize="18px" principal>
        Ola
      </Botao>
      <Botao fontSize="14px" principal={false}>
        Ola
      </Botao>
      <BotaoPerigo as="a" principal>
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
