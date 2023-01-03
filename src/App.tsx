import './assets/scss/styles.scss'
import { AppHeader } from './cmps/AppHeader'
import { HomePage } from './pages/HomePage'

function App() {

  return (
    <div className="App">
      <AppHeader />

      <main className='container'>
        <HomePage />
      </main>

      <footer>
        <section className='container'>
          Bnaya Cohen &copy;
        </section>
      </footer>
    </div>
  )
}

export default App
