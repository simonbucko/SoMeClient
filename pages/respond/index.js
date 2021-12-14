import { SERVER_URL } from "../../shared/js/constants.js"
let requestsReceived = [];

window.addEventListener("load", () => {
    fetchAndRenderFriendsList();
})

const fetchAndRenderFriendsList = async () => {
    const { id } = JSON.parse(sessionStorage.getItem("user"));
    const response = await fetch(`${SERVER_URL}/api/user?userId=${id}`);
    const data = await response.json();
    console.log(data)
    requestsReceived = data.requestsReceived;
    generateHtml(document.querySelector("tbody"), requestsReceived);
}

const generateHtml = (parentElement, requestsReceived) => {
    let HTML = ``;
    requestsReceived.forEach((request, i) => {
        HTML += `
        <tr data-rowindex=${i}>
            <th data-rowindex=${i}>${i}</th>
            <th data-rowindex=${i}>${request.name}</th>
            <th data-rowindex=${i}>${request.host}</th>
            <th data-rowindex=${i}>Accept</th>
            <th data-rowindex=${i}>Deny</th>
        </tr>
        `
    });
    parentElement.innerHTML = HTML;
}