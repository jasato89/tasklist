import { Component, OnInit } from '@angular/core';
import { Task } from '../classes/task/task';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  tasks: Task[] = [];
  newTask: string = "";
  hide: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(): void {
    this.tasks.push(new Task(this.newTask, false, false));
    this.newTask = "";

  }

  deleteItem(i: number) {
    this.tasks.splice(i,1);
  }

  markAsCompleted(i: number) {
    this.tasks[i].setisCompleted(!this.tasks[i].getIsCompleted());
  }

  markAsPostponed(i: number) {
    this.tasks[i].setisPostponed(!this.tasks[i].getIsPostponed());

  }

  hidePostponed() {

    this.hide = !this.hide;

  }

  checkPostponed(i:number) {

    return this.tasks[i].getIsPostponed() && this.hide;

  }

  removeCompleted() {

    for(var i= 0; i < this.tasks.length; i++) {
      if(this.tasks[i].getIsCompleted() == true) {
          this.tasks.splice(i, 1);
          i--;
      }
    }

  }

}
