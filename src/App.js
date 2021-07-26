
import './App.css';
import FliterContextProvider from './fliterContext/fliter';
import Form from './FliterForm';
import Tablee from './table';

function App() {
  return (
    <FliterContextProvider>
    <div className="App">
    <h1>fliter table by search</h1>
      <Form/>
      <Tablee/>
    </div>
    </FliterContextProvider>
  );
}

export default App;
