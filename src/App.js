import logo from './logo.svg';
import './App.css';
import Mealdb from '../src/component/mealdb/Mealdb';
import Header from '../src/component/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Mealdb></Mealdb>
    </div>
  );
}

export default App;
