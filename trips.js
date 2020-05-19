const tripList = "https://spreadsheets.google.com/feeds/list/1QkHElLnsc_h-KYviswr8ZAuOMT1-yi20rHKlRgZqeuM/od6/public/values?alt=json ";
function loadJSON(link) {
    fetch(tripList).then(e=>e.json()).then(data=>data.feed.entry.forEach(displayTrips));
}

const template = document.querySelector("template").content;
const tripContainer = document.querySelector(".grid4col");

function displayTrips(trips) {
    const clone = template.cloneNode("true");

    clone.querySelector("img").setAttribute("src", `img/${trips.gsx$image.$t}`);
    clone.querySelector("h3").textContent = trips.gsx$name.$t;
    clone.querySelector("p").textContent = trips.gsx$description.$t;
    clone.querySelector("a").setAttribute("href", `${trips.gsx$link.$t}`);

    tripContainer.appendChild(clone);
}

loadJSON(tripList);

/*
<template>
    <article>
        <img src="" alt="">trip image
        <h3>Trip name</h3>
        <p>Trip intro</p>
        <button class="buttonWithIcon">Read more</button>
    </article>
</template>
*/