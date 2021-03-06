import React from 'react';
import { render } from '@testing-library/react';
import { TodoList, Props } from './TodoList.component';
import { Todo } from './todo.model';

describe('TodoList component', () => {
  const todos: Todo[] = [{ id: 0, title: 'title', description: 'descriptoin' }];
  const createTodoList = (extraProps?: Props) => <TodoList items={todos} {...extraProps} />;

  it('should renders', () => {
    const { asFragment } = render(createTodoList());

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render list of todos', () => {
    const { getAllByTestId } = render(createTodoList());
    const todos = getAllByTestId('todo-item');

    expect(todos.length).toBe(1);
  });
});

export {};
