import React from 'react';
import { Todo } from './todo.model';
import styles from './TodoList.module.scss';

export type Props = {
  items: Todo[];
};

export const TodoList: React.FunctionComponent<Props> = ({ items }: Props) => (
  <ul className={styles.TodoList}>
    {items.map(({ id, title, description }: Todo) => (
      <li key={id} className={styles.TodoItem} data-testid="todo-item">
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    ))}
  </ul>
);
