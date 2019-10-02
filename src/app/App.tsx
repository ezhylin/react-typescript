import React from "react";
import "./App.scss";

import { TodoList } from './components';

const App: React.FC = () => {
  return (
    <div className="App Container">
      <TodoList
        items={[{id: 0, text: 'Learn react and typescript'}]}
      />
    </div>
  );
}

export default App;
