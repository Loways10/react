import './App.css';
import State from './components/State';
import Effect from './components/Effect';
import Ref from './components/Ref';
import Callback from './components/Callback';
import Memo from './components/Memo';
import Reducer from './components/Reducer';

function App() {
  return (
    <div className="App">
      <h1>Hooks</h1>
      <h2>useState</h2>
      <State />
      <br />
      <br />
      <h2>useEffect</h2>
      <Effect />
      <br />
      <br />
      <h2>useRef</h2>
      <Ref/>
      <br />
      <br />
      <h2>Callback</h2>
      <Callback />
      <h2>Memo</h2>
      <Memo />
      <h2>Reducer</h2>
      <Reducer />
    </div>
  );
}

export default App;
