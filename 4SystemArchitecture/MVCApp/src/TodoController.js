
/**
 * Controller acts as a very simple bridge (or glue)
 * between view and model. It registers the necessary callbacks to know when either the user
 * requests a change via view or the underlying data of the model changes
 */
export default class MutableNumberController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // controller sets the bindings between view and model
    this.model.bindTodoListChanged(this.onTodoListChanged);
    this.view.bindAddTodo(this.handleAddTodo);
    this.view.bindEditTodo(this.handleEditTodo);
    this.view.bindDeleteTodo(this.handleDeleteTodo);
    this.view.bindToggleTodo(this.handleToggleTodo);

    // Display initial todos
    this.onTodoListChanged(this.model.todos);
  }

  onTodoListChanged = todos => {
    this.view.displayTodos(todos);
  }

  handleAddTodo = todoText => {
    this.model.addTodo(todoText);
  }

  handleEditTodo = (id, todoText) => {
    this.model.editTodo(id, todoText);
  }

  handleDeleteTodo = id => {
    this.model.deleteTodo(id);
  }

  handleToggleTodo = id => {
    this.model.toggleTodo(id);
  }
}