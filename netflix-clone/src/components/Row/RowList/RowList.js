import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utilis/requests'
const RowList = () => {
  return (
    <>
        <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        IsLargeRow={true}
        />
       <Row
        title='Trending Now'
        fetchUrl={requests.fetchtrending}
        />
        <Row
        title='Top Rated'
        fetchUrl={requests.fetchTopRatedmovies}
        />
        <Row
        title='Action Movies'
        fetchUrl={requests.fetchActionMovies}
        />
        <Row
        title='Comedy Movies'
        fetchUrl={requests.fetchComedyMovies}
        />
        <Row
        title='Horror Movies'
        fetchUrl={requests.fetchHorrorMovies}
        />
        <Row
        title='Romantic Movies'
        fetchUrl={requests.fetchRomanticMovies}
        />
        <Row
        title='Tv Shows'
        fetchUrl={requests.fetchTvShow}
        />
        <Row
        title='Documentaries'
        fetchUrl={requests.fetchDocumentaries}
        />
    </>
  )
}

export default RowList