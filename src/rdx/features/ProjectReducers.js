import { createSlice } from "@reduxjs/toolkit";
import { projects } from "../../TestData";
import { v4 as uuidv4 } from "uuid";
import {
  createTaskInLocalStorage,
  deleteTaskFromLocalStorage,
  updateFullTask,
  updateProjectName,
  updateTaskStatusInLocalStorage,
  updateUserProjects,
} from "./sideFuncs";

const initialState = {
  projects: [],
  projectIds: [],
  authed: false,
  userId: "",
  userName: "",
  rememberMe: false,
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    auth: (state, action) => {
      state.userId = JSON.parse(localStorage.getItem("users")).find((item) => {
        if (
          item.userName == action.payload.userName &&
          item.userPassword == action.payload.userPassword
        ) {
          state.projectIds = item.userProjects;
          return item.userId;
        } else {
          return false;
        }
      });

      if (state.userId == undefined) {
        state.authed = false;
        state.userName = "";
        alert("Failed to login!");
      } else {
        state.authed = true;
        state.userName = action.payload.userName;
        state.userId = state.userId.userId;
        alert("Login succesful!");
      }
      state.projects = JSON.parse(localStorage.getItem("projects")).filter(
        (item) => state.projectIds.includes(item.projectId)
      );
      console.log("state ids", state.projectIds);
      console.log(state.projects);
      console.log("userid", state.userId);
      console.log("authed", state.authed);
    },

    register: (state, action) => {
      if (
        JSON.parse(localStorage.getItem("users")).findIndex((item) => {
          if (item.userName == action.payload.userName) {
            return true;
          } else {
            return false;
          }
        }) > -1
      ) {
        return alert("User already exist");
      } else {
        localStorage.setItem(
          "users",
          JSON.stringify([
            ...JSON.parse(localStorage.getItem("users")),
            {
              userId: uuidv4(),
              userName: action.payload.userName,
              userPassword: action.payload.userPassword,
              userProjects: [],
            },
          ])
        );
      }

      state.auth = false;
      console.log(JSON.parse(localStorage.getItem("users")));
    },
    logOut: (state) => {
      state.authed = false;
      state.userName = "";
      state.userId = "";
      state.projects = [];
    },
    createProject: (state) => {
      const tempId = uuidv4();
      const newTempProject = {
        projectId: tempId,
        projectName: "Project 1",
        fav: false,
        tasks: [
          {
            title: "Task 1",
            taskId: uuidv4,
            description: "bla bla bla",
            status: "Done",
            startDate: "N/D",
            dateEnd: "N/D",
          },
        ],
      };
      state.projects.unshift(newTempProject);
      localStorage.setItem(
        "projects",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("projects")),
          newTempProject,
        ])
      );

      updateUserProjects(state.userId, tempId);
    },
    setProjectName: (state, action) => {
      console.log("pYLOAD", action.payload.name);
      state.projects[
        state.projects.findIndex((item) => item.projectId == action.payload.id)
      ].projectName = action.payload.name;

      updateProjectName(action.payload.id, action.payload.name);
      //   state.projects = JSON.parse(localStorage.getItem("projects")).filter(
      //     (item) => state.projectIds.includes(item.projectId)
      //   );
    },

    addProject: (state, action) => {
      updateUserProjects(state.userId, action.payload.id);
      state.projectIds.unshift(action.payload.id);
      state.projects = JSON.parse(localStorage.getItem("projects")).filter(
        (item) => state.projectIds.includes(item.projectId)
      );
    },

    deleteProject: (state, action) => {
      const projectsJSON = localStorage.getItem("projects");
      if (!projectsJSON) {
        console.error("Projects data not found in Local Storage");
        return;
      }
      let projects = JSON.parse(projectsJSON);

      projects = projects.filter(
        (project) => project.projectId !== action.payload.id
      );

      localStorage.setItem("projects", JSON.stringify(projects));

      const usersJSON = localStorage.getItem("users");
      if (!usersJSON) {
        console.error("Users data not found in Local Storage");
        return;
      }
      let users = JSON.parse(usersJSON);

      const userIndex = users.findIndex((user) => user.userId === state.userId);
      if (userIndex === -1) {
        console.error(`User with userId ${state.userId} not found`);
        return;
      }

      users[userIndex].userProjects = users[userIndex].userProjects.filter(
        (id) => id !== action.payload.id
      );

      localStorage.setItem("users", JSON.stringify(users));
      state.projects = JSON.parse(localStorage.getItem("projects")).filter(
        (item) => state.projectIds.includes(item.projectId)
      );
    },
    kanbanStatusUpdate: (state, action) => {
      updateTaskStatusInLocalStorage(
        action.payload.projectId,
        action.payload.taskId,
        action.payload.newStatus
      );
      state.projects = JSON.parse(localStorage.getItem("projects")).filter(
        (item) => state.projectIds.includes(item.projectId)
      );
    },
    updateTask: (state, action) => {
      updateFullTask(
        action.payload.projectId,
        action.payload.taskId,
        action.payload.newTask
      );
      state.projects = JSON.parse(localStorage.getItem("projects")).filter(
        (item) => state.projectIds.includes(item.projectId)
      );
    },
    deleteTask: (state, action) => {
      deleteTaskFromLocalStorage(
        action.payload.projectId,
        action.payload.taskId
      );
      state.projects = JSON.parse(localStorage.getItem("projects")).filter(
        (item) => state.projectIds.includes(item.projectId)
      );
    },
    createNewTask: (state, action) => {
      createTaskInLocalStorage(action.payload.projectId);
      state.projects = JSON.parse(localStorage.getItem("projects")).filter(
        (item) => state.projectIds.includes(item.projectId)
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  createProject,
  setProjectName,
  auth,
  register,
  logOut,
  addProject,
  deleteProject,
  kanbanStatusUpdate,
  updateTask,
  deleteTask,
  createNewTask,
} = projectSlice.actions;

export default projectSlice.reducer;
