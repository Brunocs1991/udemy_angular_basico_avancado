import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public taskList: Array<TaskList> = [
    { task: 'Minha taks de teste', checked: true },
    { task: 'Minha taks de teste2', checked: false },
  ];

  constructor() {}

  ngOnInit(): void {}

  public deleteItemTaksList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaksList() {
    const confirm = window.confirm('Você deseja realmente deletar tudo?');
    if (confirm) {
      this.taskList = [];
    }
  }
}
