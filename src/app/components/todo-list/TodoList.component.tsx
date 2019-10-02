import React from "react";
import { TodoModel } from "./todo.model";
import styles from './TodoList.module.scss';

interface Props {
  items: TodoModel[],
}

export const TodoList: React.FunctionComponent<Props> = ({ items }: Props) => (
  <ul className={styles.TodoList}>
    {
      items.map(({ id, text }: TodoModel) => (
        <li key={id} className={styles.TodoList__Item}>{text}</li>
      ))
    }
  </ul>
);
