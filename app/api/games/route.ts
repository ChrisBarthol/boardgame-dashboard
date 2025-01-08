import { bgg } from "bgg-sdk";

export async function GET() {
    const results = await bgg.collection({ username: 'username'});
    return Response.json(results);
};
