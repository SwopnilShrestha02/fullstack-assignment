
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom' 
import Homescreen from './screens/Homescreen';
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
    <Navbar/>
     
        <Routes>
          <Route path='/' element={<Homescreen/>} exact/>
        </Routes>
    
   
    <Footer/>
  </Router>
  );
}

export default App;
