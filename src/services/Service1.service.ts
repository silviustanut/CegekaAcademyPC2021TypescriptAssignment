import movies from '../data/movies.json';
import { Movie } from '../models';

export class Service1 {

    private _movieList: Movie[];

    constructor() {
        this._movieList = movies;
    }

    /**
     * getMovies
     * TODO: define and specify a return type. Normally, typescript will infere it
     * but for the purposes of this exercise, let's specify it 
     */
    public getMovies(): Movie[] {
        console.log(`Retrieving movies data: ${JSON.stringify(this._movieList)}`);
        return this._movieList;
    }

    /**
     * This is merely an example of how to edit the test data loaded in-memory
     * from the local .json file.
     * @returns The updated list of movies
     * TODO: remove this method. It was simply added for demonstrative purposes.
     */
    public deleteMovieExample() {
        console.log(`deleting last movie... ${JSON.stringify(movies)}`);
        // Remove the last movie from the in-memory collection
        movies.pop();
        return movies;
    }
}