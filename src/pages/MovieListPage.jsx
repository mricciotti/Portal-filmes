// import { useState } from "react"

import { useState } from "react"

// export default function MovieListPage(){

//     const [contador, setContador] = useState(0)
//     const [textoBotao, setTextoBotao] = useState('MATHEUS')
    
//     const handleClick = () => {
//         setContador((prev) => prev +1)
//         console.log(contador)
//     }
//     const handleClick2 = () => {
//         setContador((prev) => prev -1)
//         console.log(contador)
//     }
//     const handleClick3 = () => {
//         setContador((prev) => prev *0)
//         console.log(contador)
//     }
//     const handleClick4 = () => {
//         setTextoBotao(prev => prev == 'MATHEUS' ? "RICCIOTTI": "MATHEUS")
//     }
//     return(
//         <>
//             <p>{Math.random()}</p><br />
//             <p>{contador}</p><br />
//             <button onClick={handleClick}>Aumentar</button><br /><br />
//             <button onClick={handleClick2}>Diminuir</button><br /><br />
//             <button onClick={handleClick3}>Zerar</button><br /><br />
//             <button onClick={handleClick4}>{textoBotao}</button><br />
//         </>
//     )
// }

import movies from "../data/movies.json"
import MovieCard from "../components/MovieCard"
export default function MovieListPage(){

    const [search, setSearch] = useState("")

    const handleSearch = (event) => {
        setSearch(event.target.value)
        console.log(search)
    }
    
    const filmesFiltrados = movies.filter( filme => filme.titulo.toLowerCase().includes(search.toLowerCase()) )

    return (
        <>
            <h2>Veja o catálogo de filmes completos</h2>
            <input 
                className="text-black"
                type="text" 
                id="search" 
                value = {search}
                onChange={handleSearch}
            />
            <section className="flex gap-10">
                {

                    filmesFiltrados.length > 0 ?
                    filmesFiltrados
                    .map( filme => (
                        <MovieCard key={filme.id} {...filme}/>
                    ))
                    :
                    
                    <p>FILME NAO ENCONTRADO</p>
                }   
            </section>
        </>
    
)
}