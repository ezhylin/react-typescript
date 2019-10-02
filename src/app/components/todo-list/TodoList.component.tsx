import React from 'react';
import { TodoModel } from './todo.model';
import styles from './TodoList.module.scss';

interface Props {
  items: TodoModel[];
}

export const TodoList: React.FunctionComponent<Props> = ({ items }: Props) => (
  <ul className={styles.TodoList}>
    {items.map(({ id, title, description }: TodoModel) => (
      <li key={id} className={styles.TodoItem}>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    ))}
  </ul>
);
