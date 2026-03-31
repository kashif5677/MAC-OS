import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import MacWindow from './components/windows/MacWindow'
function App() {

  return (
   <main>
    <Navbar/>
    <Dock/>
    <MacWindow>
      <h1>hello</h1>
    </MacWindow>
   </main>
  )
}

export default App
