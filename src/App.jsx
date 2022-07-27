import './scss/app.scss'
import Hero from './components/hero'
import Programs from './components/programs/'
import Reasons from './components/reasons'
import Plans from './components/plans/'
import Testimonials from './components/testimonials/'
import Join from './components/join/'
import Footer from './components/footer/'

function App() {
  return (
    <div className='App'>
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  )
}

export default App
