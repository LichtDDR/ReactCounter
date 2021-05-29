import './App.css';
import Counter from './Counter';
import User from './User';

function App() {
  const peopleInfo = [
    {
      firstName: "Mikael",
      lastName: "Muniz",
      age: "20"
    }
  ]
  return (
    <div className="App">
    <header className="App-header">
    {
      peopleInfo.map((user)=> {
        return (
          <User {...user} />
        );
      })}
    <Counter />
    </header>
    </div>
  );
}

export default App;
