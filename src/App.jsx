import './App.css';
import Header from './components/Header/Header';
import Quiz from './components/quiz/Quiz';

function App() {
  return (
    <div className="App">
      <Header title='Code Quiz' />
      <Quiz />
    </div>
  );
}

export default App;
