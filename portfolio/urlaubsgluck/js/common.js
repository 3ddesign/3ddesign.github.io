const button = document.getElementById("search");
const container = document.getElementById("photogrid");
const words = ["friends", "wine", "red", "travel"];

button.onclick = (e) => {
    searchWord = document.getElementById("searchfield").value;
    document.getElementById("searchfield").value = "";
    insertImages(searchWord);
    e.preventDefault();
};

//Request to pixabay and insert result
function insertImages(val) {
    let URL = "https://pixabay.com/api/?key=4341489-c7135f07e924eb271481ce96f&q=" + encodeURIComponent(val);
    let request = new Request(URL);

    fetch(request).then(function(response) {
        return response.json().then(function(json) {
          
            if (json.total === 0) {
                container.innerHTML = "";
                let p = document.createElement("p");
                p.classList.add("warning");
                p.innerHTML = "No images for your request...";
                container.appendChild(p);
                msnryInitialize();
            } else {

                container.innerHTML = "";
                for (let i = 0; i < 7; i++) {
                    let figure = document.createElement("figure");
                    figure.classList.add("grid-item");
                    figure.innerHTML = `<img src="${json.hits[i].webformatURL}" alt="image"><figcaption> ${json.hits[i].tags.split(",")[0]}</figcaption>`;
                    container.appendChild(figure);
                }
                msnryInitialize();
            }
        });
    });

}

//Masonry initialize
function msnryInitialize() {
    imagesLoaded(container, () => {
        let msnry = new Masonry(container, {
            columnWidth: "img",
            gutter: 10
        });
    });
}

//First request and insert images
let randomWord = (words[Math.round(Math.random() * (words.length - 1))]);
insertImages(randomWord);
