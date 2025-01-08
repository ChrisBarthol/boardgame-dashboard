import { bgg } from "bgg-sdk";

export async function GET() {
    const results = await bgg.search({ query: 'brass'});
    return Response.json(results);
};
