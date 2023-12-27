import { Stats } from './components/Footer/Stats';
import { NavBar } from './components/Header/NavBar';
import { Book } from './components/Main/Book';
import { BuyingList } from './components/Main/Buying/BuyingList';
import { Form } from './components/Main/Form_Filed/Form';
import './index.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Form />
      <BuyingList />
      <Book />
      <Stats />
    </div> 
  );
}

export default App;