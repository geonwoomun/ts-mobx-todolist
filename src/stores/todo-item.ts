import { action, observable } from 'mobx';

export default class TodoItem { // TodoItem은 어떻게 되어있는지.
    id = Date.now(); // id는 현재 시간

    @observable text: string = ''; // observable 값들에 text와 isDone 이 있다.
    @observable isDone: boolean = false; // text의 기본 값은 '',  isDone의 기본값은 false,

    constructor(text: string) {
        this.text = text;  // text를 받아서 생성함.
    }

    @action
    toggleIsDone = () => { // Done을 바꿈.
        this.isDone = !this.isDone;
    }
    @action // text를 바꿈.
    updateText = (text: string) => {
        this.text = text;
    }
}