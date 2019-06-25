import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://react-todo-list-a91ce.firebaseio.com/'
});

export const tasksAPI = {
    getTasks() {
        return instance.get(`tasks.json`)
    },
    addTask(title, isImportant = '') {
        return instance.post(`tasks.json`, {title, isImportant})
    },
    deleteTask(id) {
        return instance.delete(`tasks/${id}.json`)
    },
    updateTask(id, title = '', isImportant = '', isDone = '') {
        return instance.put(`tasks/${id}.json`, {title, isImportant, isDone})
    }
};