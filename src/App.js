import {BrowserRouter,  Route, Routes} from 'react-router-dom';
import Createevent from './pages/Createevent';
import Home from './pages/Home';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route index element = {<Home/>} />
    <Route path='/create-event' element = {<Createevent/>} />

   </Routes>
   
   </BrowserRouter>


  // <Createevent/>
  );
}

export default App;