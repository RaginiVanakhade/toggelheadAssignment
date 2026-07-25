
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './component/NavBar'
import HomeSection from './component/HomeSection'
import HomeSection2 from './component/custom/HomeSection2'
import CardSlider from './component/CarsSlider'

function App() {

  return (
    <>
    <NavBar/>
    <HomeSection/>
    <HomeSection2/>
    <CardSlider/>
     <Routes>
      <Route path='home' element={"hello"}/>
     </Routes>
    </>
  )
}

export default App
