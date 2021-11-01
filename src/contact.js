function createContactContent() {
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('para')
  let contactNumber = document.createElement('div')
  contactNumber.textContent = 'Call us on: 555-0123';
  let contactMap = document.createElement('div');
  contactMap.textContent = 'Find us at: 101 Coffee Road, Faketown, Notrealshire, UK'

  contactContainer.appendChild(contactNumber);
  contactContainer.appendChild(contactMap);

  return contactContainer;
};

export {createContactContent}