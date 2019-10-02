import React from 'react';
import styles from './App.module.scss';

import { TodoList, Header } from './components';

const itmes = [
  { id: 0, title: 'Learn', description: 'Learn past perfect tence' },
  { id: 1, title: 'fasdf  asdfdaf asdf', description: 'dsaf as asf sd dfasdfdsfas fsdf sdfsd asdf' },
  { id: 2, title: 'Learn', description: 'Learn past perfect tence' },
  { id: 3, title: 'Learn', description: 'Learn past perfect tence' },
  { id: 4, title: 'Learn', description: 'Learn past perfect tence' },
  { id: 5, title: 'Learn', description: 'Learn past perfect tence' },
  { id: 6, title: 'Learn', description: 'Learn past perfect tence' },
  { id: 7, title: 'Learn', description: 'Learn past perfect tence' },
  { id: 8, title: 'Learn', description: 'Learn past perfect tence' },
  { id: 9, title: 'Learn', description: 'Learn past perfect tence' }
];

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Header />
      <main className={styles.Main}>
        <TodoList items={itmes} />
      </main>
    </div>
  );
};

export default App;
