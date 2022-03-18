import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    fisrt: 'Mochammad',
    middle: 'Dicky',
    last: 'Adriansyah'
  }

  const nameList = [
    {
      first: 'Indri',
      last : 'Rahmania'
    },
    {
      first: 'Dicky',
      last: 'Adriansyah'
    }
  ]

  return (
    <div className="App">
      <Greet name='Dicky' messageCount={20} isLoggedIn={true}/>
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
