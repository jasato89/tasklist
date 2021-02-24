export class Task {

    constructor(private taskTitle: string,
        private isCompleted: boolean,
        private isPostponed: boolean) { }



    public gettaskTitle(): string {
        return this.taskTitle;
    }

    public settaskTitle(taskTitle: string): void {
        this.taskTitle = taskTitle;
    }

    public getIsCompleted(): boolean {
        return this.isCompleted;
    }

    public setisCompleted(isCompleted: boolean): void {
        this.isCompleted = isCompleted;
    }

    public getIsPostponed(): boolean {
        return this.isPostponed;
    }

    public setisPostponed(isPostponed: boolean): void {
        this.isPostponed = isPostponed;
    }

  

}
