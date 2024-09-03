function Bros() {
    return (
        <p>si funcionas es porque eres dios </p>
    )
}
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
    <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/fecha" element={<Date/>}></Route>
</Routes>
</Router>
export default Bros;