import { createContext } from 'react';
import {TodoList} from '../stores/todo-list';

export const StoreContext = createContext<TodoList>({} as TodoList); // createContext로 context를 만들어서 전체적으로 내려줄 수 있게 하는듯.
export const StoreProvider = StoreContext.Provider;