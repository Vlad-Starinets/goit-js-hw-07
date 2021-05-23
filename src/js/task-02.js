const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const listEl = document.querySelector('.ingredients-list')

  const elements = ingredients.map(ingredient => {
    const listEl = document.createElement('li');
    listEl.classList.add('ingredients-item');
    listEl.textContent = ingredient;

    return listEl;
  });

  console.log(elements);
  
  listEl.append(...elements);
