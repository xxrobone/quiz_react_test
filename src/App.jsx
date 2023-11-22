import './App.scss';
import Header from './components/header/Header';
import Quiz from './components/quiz/Quiz';

function App() {
  return (
    <div className='App'>
      <Header title='Code Quiz' />
      <h1>Are you ready?</h1>
      <Quiz />
    </div>
  );
}

export default App;
