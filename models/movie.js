import { Schema,models,model } from "mongoose";

const movieSchema = new Schema({
    title:String,
    director:String,
    year:Number,
    duration:Number,
    genre:String,
    rating:Number,
    website:String
})

const Movie = models.Movie || model("Movie",movieSchema)
export default Movie