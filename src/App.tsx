import { Button } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function App() {
  const query = useQuery({
    queryKey: ['todos'],
    queryFn: () => axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => res.data),
  })

  console.log({ query })

  return <Button>Dataguard</Button>
}

export default App
