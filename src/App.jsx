
import './App.css';
import Cards from './components/Cards';
import Footer from './components/Footer'
import Header from './components/Header'
import ShopCollection from './components/ShopCollection';
import Subscribe from './components/Subscribe';
import Trending from './components/Trending';
import Target from './components/target';
import { addBackToTop } from 'vanilla-back-to-top'

function App() {

  return (
    <>
      <Header/>
      <ShopCollection/>
      <Cards/>
      <Trending/>
      <Subscribe/>
      <Target/>
       {addBackToTop({ scrollDuration:2000})}
      <Footer/>
     
    </>
  )
}

export default App
