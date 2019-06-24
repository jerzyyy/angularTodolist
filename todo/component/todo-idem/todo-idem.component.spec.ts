import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoIdemComponent } from './todo-idem.component';

describe('TodoIdemComponent', () => {
  let component: TodoIdemComponent;
  let fixture: ComponentFixture<TodoIdemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoIdemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoIdemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
