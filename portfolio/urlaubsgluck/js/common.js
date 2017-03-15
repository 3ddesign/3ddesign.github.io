const button = document.getElementById("search");
const container = document.getElementById("photogrid");

//random value (may add other words in array)
const arr = ["friends", "wine", "red"];
let value = (arr[Math.round(Math.random() * (arr.length - 1))]);

//request to pixabay
getUrls = (val) => {
    let URL = "https://pixabay.com/api/?key=4341489-c7135f07e924eb271481ce96f&q=" + encodeURIComponent(val);
    let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    let xhr = new XHR();
    xhr.open('GET', URL, true);
    xhr.onload = function() {
        let pics = JSON.parse(this.responseText);
        for (let i = 0; i < 7; i++) {
            a = 'cell' + i;
            document.getElementById(a).innerHTML = `<figure><img src="${pics.hits[i].webformatURL}" alt="image"><figcaption> ${pics.hits[i].tags.split(',')[0]}</figcaption></figure>`;
        }
    };
    xhr.onerror = () => {
        console.log(`Ошибка ${this.status}`);
    };

    xhr.send();
};

//handler for search button
getUrls(value);
button.onclick = (e) => {
    e.preventDefault();

    value = document.getElementById("searchfield").value;

    getUrls(value);
};

//Masonry init with imagesLoaded ()
const containerGr = document.querySelector('.grid');

imagesLoaded(containerGr, () => {

    let msnry = new Masonry(containerGr, {
        columnWidth: "img",
        gutter: 10
    });
});
