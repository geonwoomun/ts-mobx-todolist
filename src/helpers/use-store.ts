import { useContext } from 'react';
import { StoreContext } from './store-provider';
import {TodoList} from '../stores/todo-list';

export const useStore = (): TodoList => useContext(StoreContext); // 스토어를 사용할 수 있게 하는거같은데 어렵네