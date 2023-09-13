const helloMessage: string = 'Hello Typescript World!';
const goodbyeMessage: string = 'Goodbye';

function hello() {
  console.log(helloMessage);
}

function goodbye() {
  console.log(goodbyeMessage);
}

interface IConsoleMessage {
  msg: string;
  type: number; // 1 = success, 2 = warning, 3 = error
}

function printMessage(msg: string, type: number) {
  const userMessage: IConsoleMessage = { msg, type };
  switch (type) {
    case 1: {
      console.log(userMessage.msg);
      break;
    }
    case 2: {
      console.warn(userMessage.msg);
      break;
    }
    default: {
      console.error(userMessage.msg);
      break;
    }
  }
}

export { hello, goodbye, printMessage };
