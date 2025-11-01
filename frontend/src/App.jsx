import {Toaster} from 'sonner';
import {BrowserRouter, Routes, Route} from 'react-router';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {


  return (
    <>
    <Toaster/>
    <BrowserRouter>
      <Routes>
        <Route 
        path='*'
        element={<NotFound/>}
        />
        <Route 
        path='/'
        element={<Login/>}
        />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
