import './styles/style.scss';
import { printMessage } from './scripts/test.ts';

const user = 'susan';
console.log(`hello ${user}, welcome to your npm project!`);

printMessage(user);
printMessage(['susan', 'eric', 'john']);
