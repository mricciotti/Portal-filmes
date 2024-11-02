import { Link } from "react-router-dom";

export default function MovieCard({id , poster_path}) {
    return(
        <div > 
            <img src={`https://image.tmdb.org/t/p/w154${poster_path}`} />

            <Link to={`/filmes/${id}`} className="">Ver detalhes </Link>
        </div>
    )

}