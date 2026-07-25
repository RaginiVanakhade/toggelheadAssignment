
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './component/NavBar'
import HomeSection from './component/HomeSection'

function App() {

  return (
    <>
    <NavBar/>
    <HomeSection/>
     <Routes>
      <Route path='home' element={"hello"}/>
     </Routes>
    </>
  )
}

export default App
