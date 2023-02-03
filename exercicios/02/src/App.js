import Form from "./components/Form/Index";
import List from "./components/List/Index";
import { useState } from 'react'

function App() {
  const [list, setList] = useState([])

  return (
    <div className="App">
      <h1>Exercicio 02</h1>
      <Form />
      <List />
    </div>
  );
}

export default App;
