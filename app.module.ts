import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoContainerComponent } from './todo/component/todo-container/todo-container.component';
import { TodoListComponent } from './todo/component/todo-list/todo-list.component';
import { TodoIdemComponent } from './todo/component/todo-idem/todo-idem.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoContainerComponent,
    TodoListComponent,
    TodoIdemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
