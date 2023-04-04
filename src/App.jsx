import './App.css'
import NavBar from './components/Header/NavBar'
import Stack from './components/Stack/Stack'

function App() {

  return (
    <div className="App">
      <NavBar />
      <section className="listOfStack">
        <Stack />
      </section>
    </div>
  )
}

export default App
