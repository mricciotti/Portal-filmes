import { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";
import movies from "../data/movies.json"


export default function Home() {

    const [filmesPopulares, setFilmesPopulares] = useState([])
    const [filmesTrending, setFilmesTrending] = useState([])
    const [filmesUpcoming, setFilmesUpcoming] = useState([])

    const fetchMovies = async () => {
        try {
            //Juntando todos os fetches
            const [respostaPopulares, respostaTrending, respostaUpcoming] = await Promise.all(
                [
                    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`),
                    fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`),
                    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`)
                ]
            )

            //Convertendo em JSON
            const popularData = await respostaPopulares.json()
            const trendingData = await respostaTrending.json()
            const upcomingData = await respostaUpcoming.json()

            //Atualizar o estado
            setFilmesPopulares(popularData.results)
            setFilmesTrending(trendingData.results)
            setFilmesUpcoming(upcomingData.results)

        }
        catch { }

    }
    useEffect(() => {
        fetchMovies();
    }, [])
    return(
        <>
            <CardContainer titulo="Filmes Antigos">
                {
                    movies
                    .filter( filme => (filme.ano_lancamento < 2000))
                    .map( filme => (
                        <MovieCard key={filme.id} {...filme}/>
                    ))
                }
            </CardContainer>
            <CardContainer titulo="Filmes Antigos">
                {
                    movies
                    .filter( filme => (filme.avaliacao > 9))
                    .map( filme => (
                        <MovieCard key={filme.id} {...filme}/>
                    ))
                }
            </CardContainer>
        </>
    )

    // return (
    //     <>
    //         <CardContainer titulo="Populares">
    //              {
    //                  movies
    //                  .filter( filme => (filme.avaliacao > 9))
    //                  .map( filme => (
    //                      <MovieCard key={filme.id} {...filme}/>
    //                  ))
    //              }
    //         </CardContainer>

    //     </>
    // )
}