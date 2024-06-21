import uuid4 from "uuid4";

export let tasks = [
  {
    title: "Task 1",
    taskId: "1",
    description: "bla bla bla",
    status: "Done",
    startDate: "N/D",
    dateEnd: "N/D",
  },
  // {
  //   title: "Task 2 Edited",
  //   id: "2",
  //   description: "bla bla bla",
  //   status: "In process",
  //   startDate: "N/D",
  //   dateEnd: "N/D",
  // },
  {
    title: "Task 3",
    taskId: "3",
    description: "bla bla bla",
    status: "In process",
    startDate: "N/D",
    dateEnd: "N/D",
  },
  {
    title: "Task 4",
    taskId: "4",
    description: "bla bla bla",
    status: "Not started",
    startDate: "N/D",
    dateEnd: "N/D",
  },
  {
    title: "Task 5",
    taskId: "5",
    description:
      "bla bla blacksnvkjdfvndfjkvdbvjhfdbvjdbfvjhfdbjvdhbfvkdfbvjhbdvjdbfjv",
    status: "Not started",
    startDate: "N/D",
    dateEnd: "N/D",
  },
  {
    title: "Task 6",
    taskId: "6",
    description: "bla bla bla",
    status: "Not started",
    startDate: "N/D",
    dateEnd: "N/D",
  },
  {
    title: "Task 7",
    taskId: "7",
    description: "bla bla bla",
    status: "Not started",
    startDate: "N/D",
    dateEnd: "N/D",
  },
  {
    title: "Task 8",
    taskId: "8",
    description: "bla bla bla",
    status: "Not started",
    startDate: "N/D",
    dateEnd: "N/D",
  },
  {
    title: "Task 9",
    taskId: "9",
    description: "bla bla bla",
    status: "Not started",
    startDate: "N/D",
    dateEnd: "N/D",
  },
];

// export let tasks = [
//   {
//     title: "New task 1",
//     id: "1",
//     description: "enter description",
//     status: "Not started",
//     startDate: "N/D",
//     dateEnd: "N/D",
//   },
// ];

// export let users = [
//   {
//     userId: "1",
//     login: "login",
//     password: "1234",
//     projects: ["100"],
//     mail: "silversol3301@gmail.com",
//   },
//   {
//     userId: "2",
//     login: "login",
//     password: "1234",
//     projects: ["100"],
//     mail: "silversol3302@gmail.com",
//   },
// ];

export let projects = [
  {
    projectId: "100",
    projectName: "Project 1",
    fav: false,
    tasks: [
      {
        title: "Task 1",
        taskId: "1",
        description: "bla bla bla",
        status: "Done",
        startDate: "N/D",
        dateEnd: "N/D",
      },
      {
        title: "Task 2",
        taskId: "2",
        description: "bla bla bla",
        status: "In process",
        startDate: "N/D",
        dateEnd: "N/D",
      },
      {
        title: "Task 3",
        taskId: "3",
        description: "bla bla bla",
        status: "In process",
        startDate: "N/D",
        dateEnd: "N/D",
      },
      {
        title: "Task 4",
        taskId: "4",
        description: "bla bla bla",
        status: "Not started",
        startDate: "N/D",
        dateEnd: "N/D",
      },
      {
        title: "Task 5",
        taskId: "5",
        description:
          "bla bla blacksnvkjdfvndfjkvdbvjhfdbvjdbfvjhfdbjvdhbfvkdfbvjhbdvjdbfjv",
        status: "Not started",
        startDate: "N/D",
        dateEnd: "N/D",
      },
      {
        title: "Task 6",
        taskId: "6",
        description: "bla bla bla",
        status: "Not started",
        startDate: "N/D",
        dateEnd: "N/D",
      },
      {
        title: "Task 7",
        taskId: "7",
        description: "bla bla bla",
        status: "Not started",
        startDate: "N/D",
        dateEnd: "N/D",
      },
      {
        title: "Task 8",
        taskId: "8",
        description: "bla bla bla",
        status: "Not started",
        startDate: "N/D",
        dateEnd: "N/D",
      },
      {
        title: "Task 9",
        taskId: "9",
        description: "bla bla bla",
        status: "Not started",
        startDate: "N/D",
        dateEnd: "N/D",
      },
    ],
  },
  {
    projectId: "101",
    projectName: "Project 2",
    fav: false,
    tasks: [
      {
        title: "Task 1",
        taskId: "1",
        description: "bla bla bla",
        status: "Done",
        startDate: "N/D",
        dateEnd: "N/D",
      },
      {
        title: "Task 2",
        taskId: "2",
        description: "bla bla bla",
        status: "In process",
        startDate: "N/D",
        dateEnd: "N/D",
      },
    ],
  },
];

const users = [
  {
    userId: "",
    userName: "",
    userPassword: "",
    userProjects: [],
  },
  {
    userId: "02",
    userName: "User2",
    userPassword: "1234",
    userProjects: ["101"],
  },
];

// let projectData = {
//   projectId: tempId,
//   projectName: "",
//   projectId: uuid4,
//   fav: false,
//   tasks: [],
// };

// dispatch(auth({ userName: "User1", userPassword: "1234" }));
//dispatch(register({ userName: "User3", userPassword: "1234" }));
