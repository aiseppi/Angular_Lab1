import { Component, OnInit } from "@angular/core";
import { Todo } from "../interfaces/todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  todoArr: Todo[] = [
    { task: "boop that snoot", completed: true },
    { task: "scritch that fatty rump", completed: true },
    { task: "smuggle cigarettes through the swayze train", completed: false },
    { task: "drag the pipe cleaner", completed: true }
  ];

  constructor() {}

  ngOnInit(): void {}
}
