import React from 'react';
import { TodoModel } from './todo.model';
import styles from './TodoList.module.scss';

export interface TodoListProps {
  items: TodoModel[];
}

export const TodoList: React.FunctionComponent<TodoListProps> = ({ items }: TodoListProps) => (
  <ul className={styles.TodoList}>
    {items.map(({ id, title, description }: TodoModel) => (
      <li key={id} className={styles.TodoItem} data-testid="todo-item">
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    ))}
  </ul>
);
