import './App.css';
import Slider from './components/Slider';
import { sliderData } from './components/SliderData';
import { Controls } from './components/Controls';

function App() {
  return (
    <div className="ma" >
      <Slider slides={sliderData} />
      <Controls />
    </div>
  );
}

export default App;
