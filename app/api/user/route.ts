import { bgg } from "bgg-sdk";

export async function GET() {
    const results = await bgg.user({ name: 'name'});
    return Response.json(results);
};
