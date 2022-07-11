
import './App.css';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { Home } from './container/Home';
import {BrowserRouter , Switch,Route,Routes,useParams} from 'react-router-dom'
import { ContactUs } from './container/ContactUs';
import {Post} from './container/post'

function App() {
  
  return (
    <BrowserRouter>
        <div className="App">
          <Header/>
          <Hero/>
              <Routes>
               <Route path='home' element={<Home/>}/>
               <Route path='contact' element={<ContactUs/>}/>
               <Route path='post' element={<Post/>}>
                  <Route path=':postid' />
               </Route>
              </Routes>
         
        </div>
    </BrowserRouter>
  );
}

export default App;
