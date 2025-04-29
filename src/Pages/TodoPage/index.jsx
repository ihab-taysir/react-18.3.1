import React, { Component } from "react";
import TODOS from "../../mock/TODOS";
import TodoItem from "../../Components/TodoItem";

export default class Todo extends Component {
  state = {
    todos: TODOS,
  };

  handleTodoItemClick = (itemId) => {
    const _todos = this.state.todos.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    this.setState({ todos: _todos });
  };

  render() {
    return (
      <>
        <h1
          style={{
            paddingBottom: "1rem",
          }}
        >
          Todos Page
        </h1>
        {this.state.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handelClick={this.handleTodoItemClick}
          />
        ))}
      </>
    );
  }
}
