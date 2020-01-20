const listTasks = ["Done", "Codi", "html", "node", "eat"];

const fs = require("fs");

const FILE_NAME = "database.json";

const writeFileAsync = newData => {
  const stringifiedData = JSON.stringify(newData);

  fs.writeFile(FILE_NAME, stringifiedData, error => {
    if (error) {
      console.log("Async Write: NOT successful!");
      console.log(error);
    } else {
      console.log("Async Write: successful!");
      console.log(stringifiedData);
    }
  });
};

writeFileAsync(listTasks);

for (let j = 0; j < process.argv.length; j++) {
  console.log(j + " -> " + process.argv[j]);
}

function list() {
  for (let i = 0; i < listTasks.length; i++) {
    if (listTasks[i].checked) {
      console.log(`${i + 1}: [✓] ${listTasks[i]}`);
    } else {
      console.log(`${i + 1}: [ ] ${listTasks[i]}`);
    }
    add;
  }
}
/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  text = text.trim();
  const arr = text.split(" ");
  if (text === "quit" || text === "exit") {
    quit();
  } else if (arr[0] === "hello") {
    hello(arr);
  } else if (text === "help") {
    help();
  } else if (text === "list") {
    list();
  } else if (arr[0] === "remove") {
    remove(arr);
  } else if (arr[0] === "edit") {
    if (arr[1] === undefined) {
      console.error("you hadn't enter a text to edit");
      return;
    }
    edit(arr);
  } else if (arr[0] === "edit") {
    if (arr[1] === undefined) {
      console.error("you hadn't enter a text to edit");
      return;
    }
    edit(arr);
  } else if (arr[0] === "add") {
    if (arr[1] === undefined) console.error("please add task !");
    else add(arr);
  } else if (arr[0] === "check") {
    if (arr[1] === undefined) {
      console.error("you didn't enter a number");
    } else {
      check(arr);
    }
  } else if (arr[0] === "uncheck") {
    if (arr[1] === undefined) {
      console.error("you didn't enter a number");
    } else {
      uncheck(arr);
    }
  } else {
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c + '"');
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text) {
  if (text.length === 2) console.log("hello" + text[1] + "!");
  else {
    console.log("hello!");
  }
}

/**
 * help lists all the possible commands
 *
 * @returns {void}
 */
function help() {
  console.log("node tasks.js To start node app");
  console.log("exit or quit To exit node app");
  console.log("hello To view hello!");
  console.log("lsit view list!");
  console.log("add add your list!");
  console.log("remove to delete index list!");
  console.log("check/uncheck!");
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}

/**
 * add
 *
 *
 */
function add(arr) {
  arr.shift();
  listTasks.push(arr.join(" "));
}

function remove(text) {
  if (text[1] === undefined) {
    listTasks.pop();
  } else {
    let listNumber = parseInt(text[1]);
    if (listTasks[listNumber - 1] === undefined) {
      console.error(" you enter a number that does not exist");
    } else {
      listTasks.splice(listNumber - 1, 1);
    }
  }
}

function edit(arr) {
  let num = parseInt(arr[1]);
  if (Number.isInteger(num)) {
    if (listTasks[num - 1] === undefined) {
      console.error("there is no task with this number");
    } else {
      arr.shift();
      arr.shift();
      listTasks[num - 1] = arr.join(" ");
    }
  } else {
    listTasks.pop();
    add(arr);
  }
}

function check(arr) {
  if (listTasks[arr[1] - 1] === undefined) {
    console.error("their is no task with this number");
  } else {
    listTasks[arr[1] - 1].checked = true;
  }
}

function uncheck(arr) {
  if (listTasks[arr[1] - 1] === undefined) {
    console.error("their is no task with this number");
  } else {
    listOfTasks[arr[1] - 1].checked = false;
  }
}

// The following line starts the application
startApp("Akram");
