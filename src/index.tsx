import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {StoreProvider} from './helpers/store-provider';
import {TodoList} from './stores/todo-list';

const todoList = new TodoList([ // 기본 todolist값들.
    'Should Starting Wrting in React',
    'Should Learn MobX',
    'Should Watch One Piece'
]);

//@ts-ignore - for debugging

window.todoList = todoList;

ReactDOM.render( // 렌더 부분을 StoreProvider로 감싸서 todoList를 모든 component에서 사용할 수 있게 해준다.
    <StoreProvider value={todoList}>
        <App/>
    </StoreProvider>
, document.getElementById('root'));