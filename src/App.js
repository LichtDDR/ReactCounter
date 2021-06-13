import './App.css';
import Counter from './Counter';
import User from './User';

const credits = [
  {
    name: "Mikael",
    id: "153",
    local: "Guarulhos"
  },
  {
    name: "Lucas",
    id: "154",
    local: "Paraná"
  },
  {
    name: "Eduardo",
    id: "155",
    local: "Bahia"
  }
];
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
        return (
          <h1> {empregado.name}, {empregado.id}, {empregado.local}</h1>
        )
      })
    }
    </header>
    </div>
  );
}

export default App;
