import { Route,  Routes } from 'react-router-dom';

import './App.css';
import FirstNavbar from './components/FirstNavbar/FirstNavbar';
import SecondNavbar from './components/SecondNavbar/SecondNavbar';
import Contact from './pages/Contacts/Contact';
import Home from './pages/Home/Home';
import OurStory from './pages/OurStory/OurStory';
import ShopAll from './pages/ShopAll/ShopAll';
import {DataContextProvider} from './Data'
import QuickView from './components/QuickView/QuickView';
import Cart from './pages/Cart/Cart';


function App() {
  return (
    <DataContextProvider> 
    <div className="App">

      <FirstNavbar/>
      <SecondNavbar/>
    
      <Routes>
      <Route  path='/' element={ <Home/> } />
      <Route  path='home' element={ <Home/> } />
      <Route  path='shopall' element={ <ShopAll/> } /> 
      <Route  path='ourstory' element={ <OurStory/> } />
      <Route  path='contact' element={ <Contact/> } />
      
      <Route  path='QuickView' element={ <QuickView/> }  > 
            <Route  path=':id' element={ <QuickView/> } />

            </Route>
            <Route  path='cart' element={ <Cart/> } />
      
      
      
      </Routes>
      
    
    </div>
    </DataContextProvider>
  );
}

export default App;
