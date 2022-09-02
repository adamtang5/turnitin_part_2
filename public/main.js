const randomDogUrl = 'https://dog.ceo/api/breeds/image/random';

export const createMainContent = () => {
    // Create h1
    const h1 = document.createElement('h1');
    h1.innerText = 'Dog API App';

    // Create img
    const img = document.createElement('img');
    img.className = 'dog-image';
    fetchImage();

    const container = document.querySelector('.container');
    container.appendChild(h1);
    container.appendChild(img);
};

const fetchImage = async () => {
    // Fetch image from API and set img url
    try {
        const dogRes = await fetch(randomDogUrl);
        // Converts to JSON
        const dogData = await dogRes.json();
        console.log(dogData);
        const dogImgUrl = dogData.message;
        const dogImg = document.querySelector('img.dog-image');
        dogImg.src = dogImgUrl;
    } catch (e) {
        console.log('Failed to fetch image', e);
    }
};
