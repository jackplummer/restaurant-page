function createMenuCard(item, description) {
  let card = document.createElement('div');
  card.classList.add('card');
  let container = document.createElement('div');
  container.classList.add('container');
  let menuItem = document.createElement('h4');
  menuItem.style.fontWeight = '900';
  menuItem.textContent = item;
  let menuDescription = document.createElement('p');
  menuDescription.textContent = description;
  container.appendChild(menuItem);
  container.appendChild(menuDescription);
  card.appendChild(container);
  
  return card;
};


function createMenuContent() {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu');

  menuContainer.appendChild(createMenuCard('Espresso', 'Simply a shot of espresso'));
  menuContainer.appendChild(createMenuCard('Double Espresso', 'Double the fun!'));
  menuContainer.appendChild(createMenuCard('Machiatto', 'A shot of espresso with a tiny bit of frothy milk'));
  menuContainer.appendChild(createMenuCard('Americano', 'Just an espresso with hot water'));
  menuContainer.appendChild(createMenuCard('White Coffee', 'An Americano with steamed milk'));
  menuContainer.appendChild(createMenuCard('Latte', 'An espresso topped with lots of steamed milk and a frothy top'));
  menuContainer.appendChild(createMenuCard('Cappuccino', 'Like a latte but with more frothy milk and is topped with a sprinkle of chocolate'));
  menuContainer.appendChild(createMenuCard('Hot Chocolate', 'A creamy hot chocolate with whipped cream and marshmallows'));
  menuContainer.appendChild(createMenuCard('Tea', 'Choose from our wide selection of teas'));

  return menuContainer;
};

export {createMenuContent}