
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>
      <footer className='m-8'>
        <p>Copyright &#169; 2026 Ishara Musippaththu. All Rights Reserved.</p>
    </footer>
    </>
  )
}

export default App
