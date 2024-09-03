import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
 import Home from "./Pages/Home"
 import Date from "./Pages/Date"
 import Bros from "./Bros"
function App() {

  return (
    <Router>
    <h1>
      Hola Gente, Bienvenidos
    </h1>
    <p>Quisiera que pudieran asistir a mi boda</p>
    <nav>
      <ul>
        <li><Link to={"/"}>Detalles</Link></li>
        <li><Link to={"/fecha"}>Confirmacion</Link></li>
      </ul>
    </nav>
    <Bros/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/fecha" element={<Date/>}></Route>
    </Routes>
    </Router>
  )
}

export default App
