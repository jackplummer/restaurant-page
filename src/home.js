function createHomeContent() {
  const para = document.createElement('div');
  para.classList.add('para');
  para.textContent = 'Here at the nice coffee cafe we make the nicest coffee in the world! Check out our menu and see how to contact us for more information on the links above!';
  return para;
}

export {createHomeContent}