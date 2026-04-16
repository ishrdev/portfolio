
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Navbar from './components/Navbar'
import Work from './pages/Work.tsx'
import BLCK from './pages/BLCK.tsx'
import Zoetrope from './pages/Zoetrope.tsx'
import Onirique from './pages/OniriqueHotels.tsx'

import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/work' element={<Work />}/>
          <Route path='/projects/blck' element={<BLCK />}/>
          <Route path='/projects/zoetrope' element={<Zoetrope />}/>
          <Route path='/projects/onirique-hotels' element={<Onirique />}/>
        </Routes>
      </BrowserRouter>
      <footer className='m-8'>
        <p>Copyright &#169; 2026 Ishara Musippaththu. All Rights Reserved.</p>
    </footer>
    </>
  )
}

export default App
