import { bgg } from "bgg-sdk";

export async function GET(username: string) {
    const results = await bgg.plays.username({ username: username});
    return Response.json(results);
};
