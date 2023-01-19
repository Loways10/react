import './App.css';

function App() { 

  const element = <p>Hello World</p>
  const link = <a href="/login" target='_blank' >Clique aqui</a>
  const texto = <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus placeat impedit, reiciendis nostrum odio fugit aut blanditiis iusto unde rerum ea quod commodi temporibus deserunt nihil enim quam pariatur in.</p>
  const alunos = ["Akio", "Mateus", "Kenji", "Sayumi"]

  return (
    // Apenas uma tag PAI
    <div className="App">
      <h1>JSX</h1>
      {element}
      {link}
      {texto}

      {/* Tags precisam ser fechadas */}
      <br />
      <img src="/logo192.png" alt="" />
      <hr />

      {/* Diferenças de nomenclaturas */}
      <label htmlFor="teste"></label>

      <p className="teste"></p>

      <div id='teste'></div>
      <main></main>
      {
        alunos.map((aluno, i) => (
          <p>
            Codigo: <strong> {i} </strong>,
            Nome: <strong> {aluno} </strong>
          </p>
        ))
      }
    </div>
  );
}

export default App;
