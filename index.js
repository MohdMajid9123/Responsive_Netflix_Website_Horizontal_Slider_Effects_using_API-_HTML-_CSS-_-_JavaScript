//TARGET THE CENTERDIV
const centerdivEl = document.querySelector("#centerdiv");

//iife fucntion
(() => {
  //fetch data
  fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      //USE MAP METHOD
      data.map((val) => {
        key = val.id;
        let img = document.createElement("img");
        img.src = `https://picsum.photos/200/300?random=${key}`;
        centerdivEl.append(img);
      });
    })
    .catch((ero) => console.log(ero));
})();
