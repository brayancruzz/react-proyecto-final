import './styles/App.css'
import './styles/Navbar.css'
import './styles/itemList.css'
import './styles/item.css'
import './styles/mainContainer.css'
import './styles/itemDetailContainer.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailsContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ItemListContainer greetings='El E-Commerce esta en contrucción 😎'/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
