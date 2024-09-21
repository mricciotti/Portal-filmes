import { NavLink } from "react-router-dom"

export default function Header(){
    return(
        <>
            <header className="bg-blue-950 flex text-white justify-around h-14 items-center">
                <div>
                    <h1 className="font-bold">Portal Filmes</h1>
                </div>
                <nav>
                    <ul className="flex gap-4">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/filmes">Filmes</NavLink></li>
                        <li><NavLink to="/genero">Gêneros</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}