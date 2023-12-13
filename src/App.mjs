import './App.css';
import Header from './components/searchbar.mjs';
import {useState} from 'react';
import { Result } from './components/result.mjs';
import { Popular } from './components/popular.mjs';

function App() {
  const [name,setName] = useState();
  const [res1,setRes1] = useState();
  return (
    <div className='App'>
      <Header name={name} setName={setName} setRes1={setRes1}/>
      <div className="popular">
          <Popular/>
      </div>
      <Result res1={res1} />
    </div>
  );
}

export default App;
