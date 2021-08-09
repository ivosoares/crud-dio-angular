import { Todo } from './../../../models/todo';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo =  {
    id: 0,
    title: '',
    done: false,
  };
  @Output() remove = new EventEmitter;
  done = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  removeTodo():void {
    this.remove.emit(this.todo);
  }

  markAsDone():void {
    this.done = true;
  }

}
