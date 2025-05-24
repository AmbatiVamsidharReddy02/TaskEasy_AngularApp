import { NgModule } from "@angular/core";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { SharedModule } from "../ui/shared.module";

@NgModule({
    declarations:[NewTaskComponent, TasksComponent, TaskComponent],
    exports:[NewTaskComponent, TasksComponent, TaskComponent],
    imports:[SharedModule]
})
export class TasksModule{}