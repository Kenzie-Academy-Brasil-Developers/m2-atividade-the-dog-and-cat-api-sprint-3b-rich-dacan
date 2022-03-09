const clickDog = document.querySelector('#btn_dog');
clickDog.addEventListener('click', atualizarImagensDog);

const clickCat = document.querySelector('#btn_cat');
clickCat.addEventListener('click', atualizarImagensCat);

function atualizarImagensDog () {

  const dogImg = document.querySelector('#dog_img');
  
  fetch("https://api.thedogapi.com/v1/images/search")

  .then((responseObject) => {

    return responseObject.json()

    .then((hydratedBody) => {

      dogImg.src = hydratedBody[0].url});
  
  });
}

function atualizarImagensCat () {

  const dogImg = document.querySelector('#cat_img');

  fetch("https://api.thecatapi.com/v1/images/search")

  .then((responseObject) => {

    return responseObject.json()

    .then((hydratedBody) => {

      dogImg.src = hydratedBody[0].url});
      
  });
}


