class TaskService {
    task_key = "TASkS"
    constructor() {

    }

    loadFromStorage() {
        var stored = localStorage.getItem(this.task_key);
        return stored ? JSON.parse(stored) : [];
    }
    commit(tasks) {
        localStorage.setItem(this.task_key, JSON.stringify(tasks));
    }

    getTasks() {
        return this.loadFromStorage();
    }

    getTask(id) {
        var tasks = this.loadFromStorage();
        return tasks.find(t => t.id === id);
    }

    addTask(task) {
        var tasks = this.loadFromStorage();
        tasks.push({
            id: tasks.length + 1,
            ...task
        });
        this.commit(tasks);
    }

    removeTask(id) {
        var tasks = this.loadFromStorage();
        var index = tasks.findIndex(t => t.id === id);
        if (index > -1) {
            tasks.splice(index, 1);
        }
        this.commit(tasks);
    }

}
export default TaskService;