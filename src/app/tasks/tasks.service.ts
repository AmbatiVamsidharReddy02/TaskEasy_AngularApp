import { Injectable } from "@angular/core";
import { Task, User } from "../app.component";
import { DUMMY_TASKS } from "../dummy-tasks";

@Injectable({providedIn:'root'}) // for dependency injection.
export class TaskService {
    tasksList: Task[] = DUMMY_TASKS;

    constructor(){
        // we get the data as String from browser localStorage.
        const browserTasks = localStorage.getItem('tasks');
        if(browserTasks){
            this.tasksList = JSON.parse(browserTasks);
        }
    }

    getUserTasks(user: User | undefined) {
        return this.tasksList.filter((task) => task.userId == user?.id);
    }

    filterCompletedTasks(taskId: string | undefined) {
        this.tasksList = this?.tasksList?.filter((task) => task.id !== taskId);
        this.saveTaskToLocalStorage();
    }

    addTask(taskData: Task, userId: string | undefined) {
        taskData.id = new Date().getTime().toString();
        taskData.userId = userId!;
        this.tasksList.unshift(taskData);
        this.saveTaskToLocalStorage();
    }

    private saveTaskToLocalStorage(){
        localStorage.setItem('tasks', JSON.stringify(this.tasksList));
    }

}