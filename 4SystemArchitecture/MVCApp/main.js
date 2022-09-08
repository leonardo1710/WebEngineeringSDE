import './style.css'
import TodoController from './src/TodoController';
import TodoModel from './src/TodoModel';
import TodoView from './src/TodoView';

const app = new TodoController(new TodoModel(), new TodoView('#app'))
