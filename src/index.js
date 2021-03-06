/**
 * todo
 *
 *      A todo webapp
 *
 * injex.js
 *      This file connects the rest of app to the DOM. And,
 *      is also the entry point.
 *
 * Author: Rohit Mehta
 */

import pm from "./projectManager";
import Project from "./project.js";
import Task from "./task.js";

import "./style.css";

// Getting the DOM handles
const listSelectionForm = document.querySelector('form[name="project-lists"]');
const currentList = document.querySelector("span.current-list");

const listForm = document.querySelector('form[name="list-form"]');

const taskFormModal = document.getElementById("task-form-wrapper");
const listFormModal = document.getElementById("list-form-wrapper");

const getNewTask = (() => {
    const taskForm = document.querySelector('form[name="task-form"]');

    // Event listeners for the task & new list form
    taskForm.addEventListener("submit", e => {
        e.preventDefault();
        const formData = new FormData(taskForm);
        const data = {};
        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }
        console.log(data);
        const task = new Task(data);
        // TODO: add the task to the active project
        console.log(task);
        taskFormModal.classList.add("hidden");
    });
})();

// Getting the DOM handles for the new-task form and new-list form
const setUpModalControls = (() => {
    const newTaskBtn = document.getElementById("new-task");
    const newListBtn = document.getElementById("new-list");
    const cancelBtns = Array.from(document.querySelectorAll("button.cancel"));

    // Event listeners for the modal control
    newTaskBtn.addEventListener("click", () => {
        taskFormModal.classList.remove("hidden");
    });

    newListBtn.addEventListener("click", () => {
        listFormModal.classList.remove("hidden");
    });

    cancelBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            taskFormModal.classList.add("hidden");
            listFormModal.classList.add("hidden");
        });
    });
})();

// testing --------------------------------------

// adding some tasks to default project
// let currentProject = pm.getActiveProject();
// console.log(currentProject);
// currentProject.addTask(
//     new Task({
//         title: 'do something',
//         desc: 'important work for xyz',
//         dueDate: '2022-6-22',
//         priority: 'low'
//     })
// );

// console.log(currentProject);
// console.log(currentProject.tasks);
// console.log(pm.getActiveProject().tasks);
// console.log(currentProject === pm.getActiveProject());

// console.log(pm.showAllProjects());
// console.log(pm.createNewProject('School'));
// console.log(pm.showAllProjects());
// console.log(pm.createNewProject('Misc'));
// console.log(pm.showAllProjects());
// console.log(pm.deleteProject('Misc'));
// console.log(pm.showAllProjects());
// // ----------------------------------------------
