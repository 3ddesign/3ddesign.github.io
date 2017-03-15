const button = document.getElementById("search");
const container = document.getElementById("photogrid");


//random value (may add other words in array)
const arr = ["friends", "wine", "red", "travel"];
let value = (arr[Math.round(Math.random() * (arr.length - 1))]);

//request to pixabay
getUrls = (val) => {
    let URL = "https://pixabay.com/api/?key=4341489-c7135f07e924eb271481ce96f&q=" + encodeURIComponent(val);
    let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    let xhr = new XHR();
    xhr.open('GET', URL, true);
    xhr.onload = function() {
        let pics = JSON.parse(this.responseText);

        container.innerHTML = "";
        for (let i = 0; i < 7; i++) {
            // a = 'cell' + i;
            let figure = document.createElement('figure');
            figure.classList.add("grid-item");
            figure.innerHTML = `<img src="${pics.hits[i].webformatURL}" alt="image"><figcaption> ${pics.hits[i].tags.split(',')[0]}</figcaption>`;
            container.appendChild(figure);
        }
        imagesLoaded(container, () => {
            let msnry = new Masonry(container, {
                columnWidth: "img",
                gutter: 10
            });
        });
    };
    xhr.onerror = () => {
        console.log(`Ошибка ${this.status}`);
    };
    xhr.send();
};

//handler for search button
getUrls(value);
button.onclick = (e) => {
    value = document.getElementById("searchfield").value;
    document.getElementById("searchfield").value = "";
    getUrls(value);
    e.preventDefault();
};

//Masonry init with imagesLoaded ()

imagesLoaded(container, () => {

    let msnry = new Masonry(container, {
        columnWidth: "img",
        gutter: 10
    });
});
