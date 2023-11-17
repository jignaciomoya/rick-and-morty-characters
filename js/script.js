

let currentPage = 1;
let pageInfo = null;
let pageData = [];

// character-list
let chatacterListContainer = document.getElementById('character-list');

let nextPage = () => {
    if (pageInfo.next === null) return;
    currentPage++;
    callData();
};
let prevPage = () => {
    if (pageInfo.prev === null) return;
    currentPage--;
    callData();
};


// 1.
let callData = () => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
        .then((response) => {
            if (!response.ok) {
                throw new error('La solicitud no fue exitosa');
            }
            return response.json();
        })
        .then((data) => {
            pageInfo = data.info;
            pageData = data.results;

            emptyContainer();
            fillContainerWithData();
        })
        .catch((error) => {
            characterList.innerText = ('No se puede procesar');
            characterImg.innetText = ('No se puede procesar');
        });
}

let emptyContainer = () => {
    chatacterListContainer.textContent = '';
};

let loadCharacterData = (id) => {
    console.log(id);

}

let fillContainerWithData = () => {


    pageData.forEach((characterData) => {
        chatacterListContainer.innerHTML += `<div class="chatacter-box" onclick="loadCharacterData(${characterData.id})">
            <span>${characterData.name}</span>
            <img src="${characterData.image}" alt="${characterData.name}">
            <span>${characterData.species}</span>
        </div>`;
    });
};

// iniciar la pagina
callData();

let nextButton = document.getElementById('next-page');
nextButton.onclick = nextPage;

let prevButton = document.getElementById('prev-page');
prevButton.onclick = prevPage;