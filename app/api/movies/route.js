import { NextResponse } from 'next/server';
import Movie from '../../../models/movie';
import connectMongodb from '../../libs/mongodb'
//creating a movie
export async function POST(request) {
  try {
    const {title, director, year, duration, genre, rating, website } =
      await request.json();
      const newMovie={
          title,
        director,
        year,
        duration,
        genre,
        rating,
        website
      }
   await connectMongodb()
const createdMovie = await Movie.create(newMovie)
return NextResponse.json({
    status:'movie created successfully',
    data: createdMovie
  },{status:200})
  } 
  catch (error) {
    return NextResponse.json({
        status:'movie creation failed',
     },{status:500})
  }
}

//getting all movies
export async function GET(request){
  try {
    await connectMongodb()
    const movies = await Movie.find()
    return NextResponse.json({
      status:'movies fetched successfully',
      data: movies
    },{status:200})
  } catch (error) {
    return NextResponse.json({
      status:'Failed to fetch movies',
      },{status:500}) 
  }
}
