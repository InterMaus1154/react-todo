import {FC} from 'react';
import "./App.scss";
import { Person } from './components/Person';


const App : FC = () => {


  

  return (
    <div className="App">
      <Person first_name='Márk' age={10} place_of_birth='Tatabánya'/>
    </div>
    
  );
}

export default App;
