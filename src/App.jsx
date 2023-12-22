import {BrowserRouter} from 'react-router-dom'
import {About, Contact,  Hero, Navbar, Works,} from './components'
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div className="bg-black bg-cover b-no-repeat bg-cover">
          <Navbar />
          <Hero />
        </div>
        <div className="relative z-0 bg-black">
          <div className="bg-black bg-cover b-no-repeat bg-cover">
            <About />
            <Works/>
          </div>
        </div>
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
