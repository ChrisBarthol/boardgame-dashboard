import { bgg } from "bgg-sdk";

export async function GET() {
    const results = await bgg.plays.username({ username: 'chrisbarthol'});

    try {
        if (!results) {
            throw new Error("No results returned from bgg.plays.username");
        }
        return Response.json(results.plays.map((play: any) => ({
            id: play.id,
            date: play.date,
            quantity: play.quantity,
            gameName: play.item.name,
            gameId: play.item.objectid,
            subtypes: play.item.subtypes
        })));
    } catch (error) {
        console.error("Invalid JSON string", error);
        return [];
    }
};

