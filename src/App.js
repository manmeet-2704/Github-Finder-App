import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Layouts/Navbar';
import Footer from './Components/Layouts/Footer';
import Home from './Pages/Home';
import About from './Pages/About.jsx';
import NotFound from './Pages/NotFound';
import {GithubProvider} from './Context/github/GithubContext'
import {AlertProvider} from './Context/alert/AlertContext'
import Alert from './Components/Layouts/Alert';
import User from './Pages/User';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/user/:login' element={<User />}></Route>
                <Route path='/*' element={<NotFound />}></Route>
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
