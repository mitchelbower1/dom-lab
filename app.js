const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const phoneInput = document.getElementById('phoneInput');
const relationInput = document.getElementById('relationInput');
const button = document.getElementById('formButton');
const contactsContainer = document.getElementById('contactsContainer');

contactsArr = [];

contactsArr.push({
    name: 'Chris P, Bacon',
    email: 'chrisPbacon@yahoo.com',
    phone: 3138785467,
    relation: 'comrade',
})

document.addEventListener("DOMContentLoaded", () => {
    renderContacts();
});


const renderContacts = () => {

    contactsContainer.innerHTML = `${contactsArr.map((contact, index) => {

        if (typeof contact.name === 'undefined') {
            contact.name = '';
        }

        if (typeof contact.email === 'undefined') {
            contact.email = '';
        }

        if (typeof contact.phone === 'undefined') {
            contact.phone = '';
        }

        if (typeof contact.relation === 'undefined') {
            contact.relation = '';
        }

        return `<div class='contact'>
                    <p>${contact.name}</p>
                    <p>${contact.email}</p>
                    <p>${contact.phone}</p>
                    <p>${contact.relation}</p>

                    <button class='removeButton'id=${index} onClick=removeContact(this)>Remove</button>
                </div>`
    })}`.replace(/,/g, '');;
}

const addToContacts = () => {
    contactsArr.push({
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        relation: relationInput.value
    });
    renderContacts();
}



button.addEventListener('click', () => {

    addToContacts()
});

const removeContact = (clickedContact) => {
    console.log(clickedContact);
    contactsArr.splice(clickedContact.id, 1);
    renderContacts();
}


