import connectMongodb from "../../../libs/mongodb";
import Movie from "../../../../models/movie";
import { NextResponse } from "next/server";

//getting a single product
export async function GET(request, { params: { id } }) {
  try {
    await connectMongodb();
    const movie = await Movie.findOne({_id:id});
    return NextResponse.json(
      {
        message: "Movie successfully fetched",
        data: movie,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Fetching failed.",
      },
      { status: 500 }
    );
  }
}

//updating a single product
export async function PUT(request,{params:{id}}){
  try {
    const {newTitle:title, newDirector:director, newYear:year, newDuration:duration, newGenre:genre, newRating:rating, newWebsite:website } =
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
    const createdMovie = await Movie.findByIdAndUpdate(id, newMovie)
    return NextResponse.json({
      message:'movie successfully updated.',
      data:createdMovie
    },{status:201}) 
  } catch (error) {
    return NextResponse.json({
      message:'Failed to updated a movie.',
      data:updatedMovie
    },{status:500}) 
  }
}

//deleting a single product

export async function DELETE(request,{params:{id}}){
  try {
    await connectMongodb()
   await Movie.findByIdAndDelete(id)
    return NextResponse.json({
      message:'movie successfully deleted.',
        },{status:201}) 
  } catch (error) {
    return NextResponse.json({
      message:'Failed to delete a movie.',
    },{status:500}) 
  }
}