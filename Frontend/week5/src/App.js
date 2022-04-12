import React, { Component } from "react";
import axios from "axios";
import './App.css';
import './Movie.css';
import Movie from "./Movie";

class App extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovieData = async () => {
    const {
      data:{
        data:{ movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );
    this.setState({isLoading: false, movies});
  }

  componentDidMount() {
//    setTimeout(() => {
//      this.setState({ isLoading: false });
//    }, 6000);
    this.getMovieData();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className='container'>
        {isLoading ? (
          <div className='loader'>
            <span>Loading...</span>
          </div>
        ) : (
          <div className='movies'>
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  year={movie.year}
                  genres={movie.genres}
                  summary={movie.summary}
                  cover_img={movie.medium_cover_image}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;
