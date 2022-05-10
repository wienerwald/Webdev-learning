const userListDiv = document.querySelector(".userlistdiv");
const searchbar = document.querySelector(".searchbar");

const userList = [
    {
        name: "Buttons",
        place: "Soda Springs, ID, USA",
        img: "cat1.jpg"
    },
    {
        name: "Arslan",
        place: "Derik, Turkey",
        img: "cat2.jpg"
    },
    {
        name: "Haruki",
        place: "Omigawa, Japan",
        img: "cat3.jpg"
    },
    {
        name: "Milky",
        place: "Nancheng, China",
        img: "cat4.jpg"
    },
    {
        name: "Kala",
        place: "Zebowice, Poland",
        img: "cat5.jpg"
    },
    {
        name: "Baldur",
        place: "Svarstad, Norway",
        img: "cat6.jpg"
    }
];

const loadUsers = (item) => {
    // can I pre-write an HTML code block and append it at once? - No, it is safer like this.
    
    const userDiv = document.createElement("div");
    userDiv.classList.add("userdiv");

    const name = document.createElement("p");
    const nameText = document.createTextNode(item.name);
    name.classList.add("name");
    name.appendChild(nameText);

    const place = document.createElement("p");
    const placeText = document.createTextNode(item.place);
    place.classList.add("place");
    place.appendChild(placeText);

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("imagediv");
    imageDiv.style.backgroundImage = "url(" + item.img + ")";

    userDiv.appendChild(imageDiv);
    userDiv.appendChild(name);
    userDiv.appendChild(place);

    userListDiv.appendChild(userDiv);
};

userList.forEach(loadUsers);

// const stringIncludes = (a, b) => {
//     return a.indexOf(b) >= 0;
// }

const liveSearch = () => {
    const search_query = searchbar.value;
    const userDivs = document.querySelectorAll(".userdiv");
    userDivs.forEach((item) => {
        if (item.innerText.toLowerCase().includes(search_query.toLowerCase())) {
            item.classList.remove("hidden")
        }
        else {
            item.classList.add("hidden")
        }
    })

}

searchbar.addEventListener("input", liveSearch);


//Refs
// https://hiveword.com/location-name-generator
// https://css-tricks.com/in-page-filtered-search-with-vanilla-javascript/