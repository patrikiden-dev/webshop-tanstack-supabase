import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { fetchTodos } from '@/lib/api'

export const Route = createFileRoute('/_public/todos')({
  component: TodoList,
})

/*
staleTime, gcTime och hur cachen beter sig
------------------------------------------------------------------------------
När är datan i cachen färsk, och när behöver den hämtas om? (staleTime)
Hur länge sparas datan när ingen använder den? (gcTime)

Tillstånd	Betyder	Vad händer
- fresh	    Datan är nyligen hämtad	Query visar den direkt och hämtar inte om
- stale	    Datan är “gammal” (efter staleTime)	Query visar den direkt men hämtar om i bakgrunden vid vissa händelser
- inactive	Ingen komponent använder queryn längre	Datan ligger kvar i cachen tills gcTime gått ut, sedan raderas den

Standardvärden
staleTime: 0          → datan är stale direkt efter hämtning
gcTime:    5 minuter  → inaktiv data raderas efter 5 min

Viktig skillnad: isPending vs isFetching
isPending = det finns ingen data i cachen än (första laddningen)
isFetching = en request pågår just nu, även i bakgrunden när du redan har data

Vilka värden ska man välja?
Typ av data	Rimligt staleTime
Ändras ständigt (chatt, aktiekurser)	    0 (standard)
Produktlista i en webshop	                1–5 minuter
Sällan ändrad (kategorier, inställningar)	10–60 minuter eller Infinity
 */
function TodoList() {
  const { data, isPending, isError, error, isFetching } = useQuery({
    queryKey: ['todos'],
    queryFn: ({ signal }) => fetchTodos(signal),
    staleTime: 30 * 1000, // 30 sekunder
  })

  if (isPending) return <p>Laddar...</p>
  if (isError) return <p>Fel: {error.message}</p>

  return (
      <>
        {isFetching && <p>Uppdaterar i bakgrunden...</p>}
        <ul>
          {data.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </>
  )
}