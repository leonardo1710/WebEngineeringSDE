import './styles/style.scss'; // import scss styles
import sayHelloWorld from './scripts/hello';
import { hello as printHello, goodbye } from './scripts/greeting';
import { hello as helloFromTs } from './scripts/greeting.ts'; // the .ts extension is necessary here because of naming collision with greeting.js file

console.log('Hello npm project!');
const hello = () => console.log('Hello World from index.js!');
hello();

// call default module
sayHelloWorld();

// call named exports
printHello();
goodbye();

// call function from .ts file
helloFromTs();
