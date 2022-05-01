// 2b.
import Exercise from './exercise/Exercise';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* 2c. */}
      <Exercise />
      {/* // 3a. */}
      <Exercise good="Awesome"  bad="Terrible" />
    </div>
  );
}

export default App;
