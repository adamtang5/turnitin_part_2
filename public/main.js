const randomDogUrl = 'https://dog.ceo/api/breeds/image/random';

export const createMainContent = () => {
    // Create h1
    const h1 = document.createElement('h1');
    h1.innerText = 'Dog API App';

    // Create img
    const img = document.createElement('img');
    img.className = 'dog-image';
    fetchSingleImage();

    // Create recommendation div
    const recDiv = document.createElement('div');
    recDiv.classList = 'recommendation flex-row';
    fetch10Images();

    const container = document.querySelector('.container');
    container.appendChild(h1);
    container.appendChild(img);
    container.appendChild(recDiv);
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
        const recDiv = document.querySelector('.recommendation');
        dogImgUrls.forEach((url, i) => {
            const link = document.createElement('a');
            link.href = url;
            const breed = url.split('breeds/')[1].split('/')[0];
            const dogBadge = document.createElement('div');
            dogBadge.classList = `dog-badge flex-column dog-${i + 1}`;
            const dogThumb = document.createElement('img');
            dogThumb.className = 'thumbnail';
            dogThumb.src = url;
            const breedLabel = document.createElement('div');
            breedLabel.className = 'breed-label';
            breedLabel.innerText = breed;
            dogBadge.appendChild(dogThumb);
            dogBadge.appendChild(breedLabel);
            link.appendChild(dogBadge);
            recDiv.appendChild(link);
        });
    } catch (e) {
        console.log('Failed to fetch images', e);
    }
};
