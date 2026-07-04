import axios from 'axios'
import Image from 'next/image'

interface Props {
  params: Promise<{ movieId: string }>
}

export interface Movie {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

export interface Rating {
  Source: string
  Value: string
}

// export const metadata = {
//   title: '영화 상세 정보',
//   description: '영화 상세 정보 설명',
//   openGraph: {
//     type: 'website',
//     siteName: 'Next.js 연습 프로젝트',
//     title: '영화 상세 정보',
//     description: '영화 상세 정보 설명',
//     images: [
//       {
//         url: 'https://picsum.photos/700/500',
//         width: 700,
//         height: 500
//       }
//     ]
//   }
// }

async function fetchMovie(movieId: string) {
  // const { data: movie } = await axios.get<Movie>(
  //   `https://omdbapi.com?apikey=${process.env.OMDB_APIKEY}&i=${movieId}`
  // )
  const res = await fetch(`https://omdbapi.com?apikey=${process.env.OMDB_APIKEY}&i=${movieId}`, {
    method: 'GET',
    cache: 'force-cache' // nextjs 전용 기능 (서버 캐시)
  })
  const movie = await res.json() as Movie
  return movie
}

export async function generateMetadata({ params }: Props) {
  const { movieId } = await params
  const movie = await fetchMovie(movieId)

  return {
    title: movie.Title,
    description: movie.Plot,
    openGraph: {
      type: 'website',
      siteName: 'Next.js 연습 프로젝트',
      title: movie.Title,
      description: movie.Plot,
      images: movie.Poster
    }
  }
}

export default async function MovieDetails({ params }: Props) {
  const { movieId } = await params
  const movie = await fetchMovie(movieId)

  return (
    <>
      <h1>{movie.Title}</h1>
      <p>{movie.Plot}</p>
      <Image
        src={movie.Poster}
        alt={movie.Title}
        width={500}
        height={750}
      />
    </>
  )
}
