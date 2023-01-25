import './App.css';
import { useState } from 'react'
import ColorButton from './components/ColorButton';
import Opacity from './components/Opacity';

function App() {
  const [color, setColor] = useState()
  const [opacity, setOpacity] = useState(1)
  console.log('Opacidade: ', opacity)
  console.log('Cor: ', color)
  
  return (
    <div className="App" style={{
      backgroundColor: color, opacity
      
    }}>

      <ColorButton handleColor={setColor} />
      <Opacity setOpacity={setOpacity} />
    </div>
  );
}

export default App;
