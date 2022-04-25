import {Component} from '@angular/core';
import {Task} from './models/task'
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'labs-root',
  template: `
    <div>
      <h2>Hello Angular</h2>
      <form [formGroup]="todoForm" (ngSubmit)="addTask()">
        <input formControlName="name">
      </form>
      <button (click)="add50k()">Add 50,000 Todos</button>
      <ul>
        <li *ngFor="let task of tasks; index as i">
          {{task.name}}
          <button (click)="removeTodo(i)">Delete</button>
        </li>
      </ul>
    </div>
  `,
  styles: [],
})

export class AppComponent {
  title = 'angular-todo';
  tasks: Array<Task> = [{
    id: 0,
    name: 'Starting Item'
  }];

  todoForm = this.formBuilder.group({
    id: '',
    name: ''
  })

  constructor(private formBuilder: FormBuilder) {
  }

  addTask(): void {
    this.tasks.push(this.todoForm.value)
    this.todoForm.reset()
  }

  add50k(): void {
    let i = 50000
    while (i > 0) {
      this.tasks.push({id:i, name:'adding item'});
      i--;
    }
  }

  removeTodo(index: number): void {
    this.tasks.splice(index, 1)
  }
}
