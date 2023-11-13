import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"
import * as Dialog from '@radix-ui/react-dialog'

import logoSvg from '../../assets/logo.svg'
import { NewTransactionsModal } from "../NewTransactionsModal"

function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoSvg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionsModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}

export { Header }