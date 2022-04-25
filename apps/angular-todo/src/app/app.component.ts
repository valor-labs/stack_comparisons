import {Component} from '@angular/core';
import {Task} from './models/task'
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'labs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-todo';
  tasks:Array<Task> = [{
    id:0,
    name:'Starting Item'
  }];

  todoForm = this.formBuilder.group({
    id:'',
    name:''
  })
  constructor(private formBuilder: FormBuilder) {
  }
  addTask():void{
    debugger
    this.tasks.push(this.todoForm.value)
    this.todoForm.reset()
  }

  removeTodo(index:number):void {
    this.tasks.splice(index,1)
  }
}
