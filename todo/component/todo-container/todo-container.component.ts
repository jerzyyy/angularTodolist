import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {
  todoList: Array<Todo> = [];
  constructor() { }

  ngOnInit() {
    this.todoList = [
      new Todo('se reveiller', false),
      new Todo('manger', false),
      new Todo('boire', false),
      new Todo('jouer', false),
      new Todo('dormir', false)] ;
  }
  removetasks() {
    this.todoList = [];
}
addtasks(title: string) {
  this.todoList = [...this.todoList, new Todo( title, false)];
}

}
