import { Link } from "react-router-dom";

export default function MovieCard({id , titulo, imagem_destaque, poster_path, backdrop_path}) {
    return(
        <div > 
            <h2>{titulo}</h2>
            <img src={imagem_destaque} />
            <img src={`https://image.tmdb.org/t/p/w154${poster_path}`} />
            <img src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} />

            <Link to={`/filmes/${id}`} className="">Ver detalhes </Link>
        </div>
    )

}