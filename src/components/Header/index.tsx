import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"

import logoSvg from '../../assets/logo.svg'

function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoSvg} alt="" />
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}

export { Header }