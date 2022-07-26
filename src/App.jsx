import './scss/app.scss'
import Hero from './components/hero'
import Programs from './components/programs/'
import Reasons from './components/reasons'
import Plans from './components/plans/'

function App() {
  return (
    <div className='App'>
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
    </div>
  )
}

export default App
