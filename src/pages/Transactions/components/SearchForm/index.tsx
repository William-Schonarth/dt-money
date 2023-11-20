import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSubmitTransactions(data: SearchFormInputs) {
    await new Promise(e => setTimeout(e, 2000))
    console.log('data:', data)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSubmitTransactions)}>
      <input type="text" placeholder="Busque pro transações" {...register('query')} />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}