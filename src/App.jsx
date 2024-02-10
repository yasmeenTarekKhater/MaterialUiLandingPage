
import './App.css';
import Cards from './components/Cards';
import Footer from './components/Footer'
import Header from './components/Header'
import ShopCollection from './components/ShopCollection';
import Subscribe from './components/Subscribe';
import Trending from './components/Trending';

function App() {

  return (
    <>
      <Header/>
      <ShopCollection/>
      <Cards/>
      <Trending/>
      <Subscribe/>
      <Footer/>
    </>
  )
}

export default App
