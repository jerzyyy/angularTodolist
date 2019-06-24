import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todo-idem',
  templateUrl: './todo-idem.component.html',
  styleUrls: ['./todo-idem.component.css']
})
export class TodoIdemComponent implements OnInit {
  @Input()
  todo: Todo;

  constructor() { }

  ngOnInit() {
  }
  handleCheckBoxChange() {
    this.todo.isDone = !this.todo.isDone;
  }

}
