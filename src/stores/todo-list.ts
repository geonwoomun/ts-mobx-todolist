import { action, computed, observable } from 'mobx';
import TodoItem from './todo-item';

export class TodoList {
    @observable.shallow list: TodoItem[] = []; // 관찰할 state 값
    // list 는 TodoItem[] 형식이여야 하고 [] 기본값.
    constructor(todos : string[]){
        todos.forEach(this.addTodo);
    }

    @action // state 값을 바꾸는 녀석
    addTodo = (text: string) => {
        this.list.push(new TodoItem(text));   
    }

    @action // state 값을 바꾸는 녀석
    removeTodo = (todo: TodoItem) => {
        this.list.splice(this.list.indexOf(todo), 1);
    };

    @computed // 계산 된 값   Done 된애를 빼는 것인듯.
    get finishedTodos(): TodoItem[] {
        return this.list.filter(todo => todo.isDone);
    }

    @computed  // 아직 done 안 된 애만 빼내는 것.
    get openTodos(): TodoItem[] {
        return this.list.filter(todo => !todo.isDone);
    }
}