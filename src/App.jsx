// function App() {

//   return (
//     <>
//      <h1>Home Page</h1>
//      {/* Exibe o header e a lista de filmes disponível divididos por
//      Antigos(antes dos anos 2000)
//      Bem-avaliados(nota maior que 9)*/}
//     </>
//   )
// }

// export default App
import { Outlet } from "react-router-dom";
import Header from "./components/Header";


function App(){

  return(
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default App
