import { SERVER_URL } from "../../shared/js/constants.js"

window.addEventListener("load", () => {
    fetchAndRenderFriendsList();
})

const fetchAndRenderFriendsList = async () => {
    // const response = await fetch(`${SERVER_URL}/api/movies?theaterId=1`);
    // const data = await response.json()
    // console.log(data)
    console.log(SERVER_URL)
}

const generateHtml = (parentElement, movies) => {
    let HTML = ``;
    movies.forEach((movie, i) => {
        HTML += `
        <tr data-movieindex=${i}>
            <th data-movieindex=${i}>${movie.id}</th>
            <th data-movieindex=${i}>${movie.title}</th>
            <th data-movieindex=${i}>${movie.rating}</th>
            <th data-movieindex=${i}>${movie.minAge}</th>
            <th colspan="2" data-movieindex=${i}>${movie.category}</th>
        </tr>
        `
    });
    parentElement.innerHTML = HTML;
}