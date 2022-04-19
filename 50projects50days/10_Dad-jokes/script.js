const button = document.querySelector(".new-joke");
const joke = document.querySelector(".joke");

const jokeList = [
    "What do you call a factory that makes okay products? A satisfactory.",
    "What did the janitor say when he jumped out of the closet? Supplies!",
    "What did the ocean say to the beach? Nothing, it just waved.",
    "What did one wall say to the other? I'll meet you at the corner.",
    "What did Baby Corn say to Mama Corn? Where's Pop Corn?",
    "I don't trust those trees. They seem kind of shady.",
    "Why don't eggs tell jokes? They'd crack each other up.",
    "I don't trust stairs. They're always up to something.",
    "Did you hear the rumor about butter? Well, I'm not going to spread it!",
    "Why couldn't the bicycle stand up by itself? It was two tired."
]

const getJoke = () => {
    const num = Math.floor(Math.random() * jokeList.length);
    joke.textContent = jokeList[num];
}

getJoke();

button.addEventListener("click", getJoke);