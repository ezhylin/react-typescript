import React, { PureComponent } from 'react';
import styles from './App.module.scss';

import { TodoList, Header, Button, Todo } from './components';

export type Props = {
  todos?: Todo[] | undefined;
};

export type State = {
  todos: Todo[] | undefined;
};

class App extends PureComponent<Props, State> {
  state = {
    todos: this.props.todos || [],
  };

  render(): JSX.Element {
    const { todos } = this.state;

    return (
      <div className={styles.App}>
        <Header />

        <main className={styles.Main}>
          <TodoList items={todos} />

          <div className={styles.ButtonFixed}>
            <Button>Add</Button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
