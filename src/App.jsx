import './App.css'
import NavBar from './components/Header/NavBar'
import Stack from './components/Stack/Stack'

function App() {

  return (
    <div className="App">
      <NavBar />
      <section className="listOfStack">
        <Stack title="A faire" />{/* Titre à faire Stack({ title: "A faire"})*/}
        <Stack title="En cours" />{/* Titre en cours */}
        <Stack title="Réalisé" />{/* Titre réalisé */}
      </section>
    </div>
  )
}

export default App
