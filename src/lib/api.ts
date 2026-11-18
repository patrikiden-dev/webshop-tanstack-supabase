import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 10000,
})

export type Todo = { id: number; title: string; completed: boolean }

export async function fetchTodos(signal?: AbortSignal): Promise<Todo[]> {
    const res = await api.get<Todo[]>('/todos', {
        params: { _limit: 10 },
        signal,
    })
    return res.data
}