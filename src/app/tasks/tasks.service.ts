import { Injectable } from "@angular/core";
import { Task, User } from "../app.component";
import { DUMMY_TASKS } from "../dummy-tasks";

@Injectable({providedIn:'root'}) // for dependency injection.
export class TaskService {
    tasksList: Task[] = DUMMY_TASKS;

    getUserTasks(user: User | undefined) {
        return this.tasksList.filter((task) => task.userId == user?.id);
    }

    filterCompletedTasks(taskId: string | undefined) {
        this.tasksList = this?.tasksList?.filter((task) => task.id !== taskId);
    }

    addTask(taskData: Task, userId: string | undefined) {
        taskData.id = new Date().getTime().toString();
        taskData.userId = userId!;
        this.tasksList.unshift(taskData);
    }

}