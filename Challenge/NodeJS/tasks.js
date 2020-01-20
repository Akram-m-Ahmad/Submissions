const listTasks = ["Done", "Codi", "html", "node"];
function list() {
  for (let i = 0; i < listTasks.length; i++) {
    console.log(`${i + 1}: [✓] ${listTasks[i]}`);
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
  } else if (arr[0] === "add") {
    if (arr[1] === undefined) console.error("please add task !");
    else add(arr);
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
      console.error(" no task with this number");
    } else {
      listTasks.splice(listNumber - 1, 1);
    }
  }
}

// The following line starts the application
startApp("Akram");
