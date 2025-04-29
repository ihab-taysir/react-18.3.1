import React, { Component } from "react";
import "./style.css";
export default class TodoItem extends Component {
  render() {
    let { todo, handelClick } = this.props;
    return (
      <div
        className={todo.completed ? "todo__item todo__completed" : "todo__item"}
        onClick={() => handelClick(todo.id)}
      >
        <h3>{todo.completed ? <del>{todo.title}</del> : todo.title}</h3>
      </div>
    );
  }
}
