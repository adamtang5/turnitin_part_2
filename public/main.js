const randomDogUrl = 'https://dog.ceo/api/breeds/image/random';

export const createMainContent = () => {
    // Create h1
    const h1 = document.createElement('h1');
    h1.innerText = 'Dog API App';

    // Create img
    const img = document.createElement('img');
    img.className = 'dog-image';
    fetchSingleImage();

    // Create ul
    const ul = document.createElement('ul');
    ul.className = 'dog-links';
    fetch10Images();

    const container = document.querySelector('.container');
    container.appendChild(h1);
    container.appendChild(img);
    container.appendChild(ul);
};

const fetchSingleImage = async () => {
    // Fetch image from API and set img url
    try {
        const dogRes = await fetch(randomDogUrl);
        // Converts to JSON
        const dogData = await dogRes.json();
        // console.log(dogData);
        const dogImgUrl = dogData.message;
        const dogImg = document.querySelector('img.dog-image');
        dogImg.src = dogImgUrl;
    } catch (e) {
        console.log('Failed to fetch image', e);
    }
};

const fetch10Images = async () => {
    // Fetch image from API and analyze urls
    try {
        const dogRes = await fetch(randomDogUrl + '/10');
        // Converts to JSON
        const dogData = await dogRes.json();
        const dogImgUrls = dogData.message;
        const dogUl = document.querySelector('ul.dog-links');
        dogImgUrls.forEach((url, i) => {
            const link = document.createElement('a');
            link.href = url;
            const breed = url.split('breeds/')[1].split('/')[0];
            // console.log(breed);
            link.innerText = breed;
            const dogLi = document.createElement('li');
            dogLi.classList = `dog-link dog-${i + 1}`;
            dogUl.appendChild(dogLi);
            dogLi.appendChild(link);
        });
    } catch (e) {
        console.log('Failed to fetch images', e);
    }
};
