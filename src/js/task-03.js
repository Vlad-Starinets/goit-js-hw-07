const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  
  const imgListEl = document.querySelector('.img-list');
  imgListEl.insertAdjacentHTML('beforeend', makeImgCart(images))
  
  
  function makeImgCart(images) {
    return images.map(({url, alt}) => {
      return `<li><img src="${url}" alt="${alt}>"</li>`
    }).join('')
  };
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   const imgListEl = document.querySelector('.img-list');

//   const makeImgCart = ({url, alt}) =>{
//     const imgItemEl = document.createElement('li');
//     imgItemEl.classList.add('img-item')
//     const imgEl = document.createElement('img');
//     imgEl.classList.add('img-link');
//     imgEl.src = url;
//     imgEl.alt = alt;

//     imgItemEl.append(imgEl);
//     return imgItemEl;
//   };

// //   console.log(makeImgCart(images[0]));

//   const El = images.map(makeImgCart);

// //   console.log(El);

//   imgListEl.append(...El);
