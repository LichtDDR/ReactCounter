import './App.css';
import Counter from './Counter';
import User from './User';

const credits = ["Mikael", "Vitor", "Bianca"];
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
    {
      credits.map((empregado) => {
        return(
          <h1> {empregado} </h1>
        );
      })
    }
    </header>
    </div>
  );
}

export default App;
