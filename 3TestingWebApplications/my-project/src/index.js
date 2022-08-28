import './styles/style.scss';
import { printMessage } from './scripts/printMessage.ts';

const user = 'susan';
console.log(`hello ${user}, welcome to your npm project!`);

console.log(printMessage(user));
console.log(['susan', 'eric', 'john']);
