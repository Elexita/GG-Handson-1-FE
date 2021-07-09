let btn = document.querySelector('.submit');

btn.addEventListener('click',function() {
    alert('Your song have been added to the playlist');
});

const Url ='https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json';

fetch(Url)
.then(data =>{return data.json("album", "artists")})
.then(res => {console.log(res)})

