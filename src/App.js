import Home from './screens/home/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Blog from './screens/Blog';
import Contact from './screens/Contact';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
function App() {
    return (
        <Router>
            <div className="App">
              <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/contact' element={<Contact/>}/>
                <Route exact path='/blog' element={<Blog/>}/>
                <Route exact path='/createuser' element={<SignUp/>}/>
                <Route exact path='/login' element={<Login/>}/>
              </Routes>
            </div>
        </Router>
    );
}

export default App;
