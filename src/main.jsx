import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import MovieListPage from './pages/MovieListPage.jsx'
import MoviesByGenrePage from './pages/MoviesByGenrePage.jsx'
import GenreListPage from './pages/GenreListPage.jsx'
import MovieDetailPage from './pages/MovieDetailPage.jsx'
import PageNotFound from './pages/PageNotFound.jsx'

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {index: true, element: <Home/>},
        {path: "filmes", element: <MovieListPage/>},
        {path: "filmes/:id", element: <MovieDetailPage/>},
        {path: "genero", element: <GenreListPage/>},
        {path: "genero/:id", element: <MoviesByGenrePage/>},
        {path: "*", element: <PageNotFound/>},
      ]
    }
  ])
  
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
