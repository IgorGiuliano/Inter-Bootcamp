const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBTN = document.getElementById('change-cat');
const catIMG = document.getElementById('cat');

const getCats = async () => {
    /*try{
        const data = await fetch(BASE_URL);
        const json = await data.json();
    
        return json.webpurl;
    } catch(err) {
        console.log(err.message);
    } */

    const data = await fetch(BASE_URL)
        .then((res) => res.json())
        .catch((err) => console.log(err))

    return data.webpurl;
};

const loadIMG = async () => {
    catIMG.src = await getCats();
}

catBTN.addEventListener('click', loadIMG);

loadIMG();