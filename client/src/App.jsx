
import {getAllWorkers} from './services/workers.service';
import './App.css'

function App() {

  const getWorkers = () => {
    getAllWorkers()
    .then(resp => console.log(resp));
  }

  return (
    <div className="App">
      <button onClick={getWorkers}>Click</button>
    </div>
  )
}

export default App
