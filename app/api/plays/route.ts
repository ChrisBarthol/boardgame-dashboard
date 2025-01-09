import { bgg } from "bgg-sdk";

export async function GET(username: string) {
    const results = await bgg.plays.username({ username: 'chrisbarthol'});
    return Response.json(results);
};
