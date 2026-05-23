export function predictBot(followers) {
    if (followers < 50) {
        return "Humano";
    } else {
        return "Bot";
    }
}