import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {StoreProvider} from './helpers/store-provider';
import {TodoList} from './stores/todo-list';

const todoList = new TodoList([
    'Should Starting Wrting in React',
    'Should Learn MobX',
    'Should Watch One Piece'
]);

//@ts-ignore - for debugging

window.todoList = todoList;

ReactDOM.render(
    <StoreProvider value={todoList}>
        <App/>
    </StoreProvider>
, document.getElementById('root'));