
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './component/NavBar'
import HomeSection from './component/HomeSection'
import HomeSection2 from './component/custom/HomeSection2'

function App() {

  return (
    <>
    <NavBar/>
    <HomeSection/>
    <HomeSection2/>
     <Routes>
      <Route path='home' element={"hello"}/>
     </Routes>
    </>
  )
}

export default App
