let btn = document.querySelector('.submit');

btn.addEventListener('click',function() {
    alert('Your song have been added to the playlist');
});

/*fetch('https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json')
  .then(response => response.json())
  .then(data => console.log(data));


function httpGetAsync("https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json", callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", 'https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json', true); // true for asynchronous 
    xmlHttp.send(null);
}*/

const getTodoAsyncAwait = async (resource) => {
    const response = await fetch(resource);
    const data = await response.json();
  
    if (!response.ok) {
      // we can throw error using Error object, so it will rejected by the Promise
      // and pass our error message
      throw new Error("cannot fetch data");
    }
  
    return data;
  };
  console.log("1");
  console.log("2");
  getTodoAsyncAwait("https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json")
    .then((data) => {
      console.log("resolved 1:", data);
      return getTodoAsyncAwait("https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json");
    })
    .then((data) => {
      console.log("resolved 2:", data);
      return getTodoAsyncAwait("https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json");
    })
    .then((data) => console.log("resolved 3:", data))
    .catch((err) => console.log("rejected:", err.message));
  console.log("3");
  console.log("4");
  console.log("5");
