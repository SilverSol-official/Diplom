import { v4 as uuidv4 } from "uuid";

export const updateUserProjects = (userId, newProjectId) => {
  // Шаг 1: Получить массив пользователей из Local Storage
  const usersJSON = localStorage.getItem("users");
  if (!usersJSON) {
    console.error("Users data not found in Local Storage");
    return;
  }

  let users = JSON.parse(usersJSON);

  // Шаг 2: Найти нужного пользователя по userId
  const userIndex = users.findIndex((user) => user.userId === userId);
  if (userIndex === -1) {
    console.error(`User with userId ${userId} not found`);
    return;
  }

  // Шаг 3: Вставить новый проект в начало массива userProjects
  users[userIndex].userProjects.unshift(newProjectId);

  // Шаг 4: Записать измененный массив обратно в Local Storage
  localStorage.setItem("users", JSON.stringify(users));
};

export const updateProjectName = (projectId, newProjectName) => {
  // Шаг 1: Получить массив проектов из Local Storage
  const projectsJSON = localStorage.getItem("projects");
  if (!projectsJSON) {
    console.error("Projects data not found in Local Storage");
    return;
  }

  let projects = JSON.parse(projectsJSON);

  // Шаг 2: Найти нужный проект по projectId
  const projectIndex = projects.findIndex(
    (project) => project.projectId === projectId
  );
  if (projectIndex === -1) {
    console.error(`Project with projectId ${projectId} not found`);
    return;
  }

  // Шаг 3: Изменить поле projectName у найденного проекта
  projects[projectIndex].projectName = newProjectName;

  // Шаг 4: Записать измененный массив обратно в Local Storage
  localStorage.setItem("projects", JSON.stringify(projects));
};
export const updateTaskStatusInLocalStorage = (
  projectId,
  taskId,
  newStatus
) => {
  // Получить текущие проекты из локального хранилища
  const projects = JSON.parse(localStorage.getItem("projects")) || [];

  // Найти проект по projectId
  const project = projects.find((project) => project.projectId === projectId);

  if (project) {
    // Найти задачу по taskId
    const task = project.tasks.find((task) => task.taskId === taskId);

    if (task) {
      // Обновить статус задачи
      task.status = newStatus;

      // Сохранить обновленный массив проектов обратно в локальное хранилище
      localStorage.setItem("projects", JSON.stringify(projects));
    } else {
      console.error(`Task with taskId ${taskId} not found`);
    }
  } else {
    console.error(`Project with projectId ${projectId} not found`);
  }
};

export const updateFullTask = (projectId, taskId, newTask) => {
  // Получить текущие проекты из локального хранилища
  const projects = JSON.parse(localStorage.getItem("projects")) || [];

  // Найти проект по projectId
  const project = projects.find((project) => project.projectId === projectId);

  if (project) {
    // Найти задачу по taskId
    const task = project.tasks.find((task) => task.taskId === taskId);

    if (task) {
      // Обновить статус задачи
      task.title = newTask.title;
      task.description = newTask.description;
      task.status = newTask.status;
      task.startDate = newTask.startDate;
      task.dateEnd = newTask.dateEnd;
      console.log("from update", newTask);
      // Сохранить обновленный массив проектов обратно в локальное хранилище
      localStorage.setItem("projects", JSON.stringify(projects));
    } else {
      console.error(`Task with taskId ${taskId} not found`);
    }
  } else {
    console.error(`Project with projectId ${projectId} not found`);
  }
};

export const deleteTaskFromLocalStorage = (projectId, taskId) => {
  // Получаем проекты из локального хранилища
  const projectsJSON = localStorage.getItem("projects");
  if (!projectsJSON) {
    console.error("Projects data not found in Local Storage");
    return;
  }

  // Парсим JSON в массив объектов
  const projects = JSON.parse(projectsJSON);

  // Находим проект по projectId
  const projectIndex = projects.findIndex(
    (project) => project.projectId === projectId
  );
  if (projectIndex === -1) {
    console.error(`Project with projectId ${projectId} not found`);
    return;
  }

  // Находим задачу по taskId и удаляем её
  const taskIndex = projects[projectIndex].tasks.findIndex(
    (task) => task.taskId === taskId
  );
  if (taskIndex === -1) {
    console.error(`Task with taskId ${taskId} not found`);
    return;
  }

  // Удаляем задачу из массива задач проекта
  projects[projectIndex].tasks.splice(taskIndex, 1);

  // Обновляем данные в локальном хранилище
  localStorage.setItem("projects", JSON.stringify(projects));
};

export const createTaskInLocalStorage = (projectId) => {
  // Получаем проекты из локального хранилища
  const projectsJSON = localStorage.getItem("projects");
  if (!projectsJSON) {
    console.error("Projects data not found in Local Storage");
    return;
  }

  // Парсим JSON в массив объектов
  const projects = JSON.parse(projectsJSON);

  // Находим проект по projectId
  const projectIndex = projects.findIndex(
    (project) => project.projectId === projectId
  );
  if (projectIndex === -1) {
    console.error(`Project with projectId ${projectId} not found`);
    return;
  }

  // Создаём новую задачу с уникальным taskId
  const taskId = uuidv4();
  const task = {
    taskId: taskId,
    title: "New Task Title", // фиксированное значение
    description: "Task description", // фиксированное значение
    status: "Not started", // фиксированное значение
    startDate: "N/D", // фиксированное значение
    dateEnd: "N/D", // фиксированное значение
  };

  // Добавляем новую задачу в массив задач проекта
  projects[projectIndex].tasks.push(task);

  // Обновляем данные в локальном хранилище
  localStorage.setItem("projects", JSON.stringify(projects));

  return taskId;
};
