import { Todo } from './../../../models/todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  todos: Array<Todo> = [];
  todo: Todo = {
    id: 0,
    title: '',
    done: false,
  };

  constructor() { }

  ngOnInit(): void {
    let items: any = localStorage.getItem('todos');
    let todos = JSON.parse(items);
    if(!todos) {
      this.todos = [];
    }else {
      this.todos = todos;
    }
  }

  addTodo(title:  string) {
    const id = this.todos.length + 1;
    this.todos.push({
      id: id,
      title: title,
      done: false,
    });
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  removeTodo(todo: any) {
    console.log('O ELEMENTO PAI RECEBEU', todo);
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

}
