import clientPromise from "../mongodb";

let client;
let db;
let movies;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = client.db();
    movies = await db.collection("movies");
  } catch (e) {
    throw new Error("Could not connect to database");
  }
}

(async () => {
    await init()
})()


export async function getMovies() {
    try {
        if(!movies) await init()
        const result = await movies
        .find({})
        .limit(20)
        .map((user) => ({...user, _id.toString() }))
        .toArray()

        return { movies: result }
    } catch (error) {
        return { error: 'Failed to fetch movies!' }
    }
}