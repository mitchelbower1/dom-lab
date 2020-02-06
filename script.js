class Contacts {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }

  // methods for extended challenge (to string)
  toString() {
    return `${this.name} <${this.email}>`;
  }
}

class MyaddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    let myNewContact = new Contacts(name, email, phone, relation);
    this.contacts.push(myNewContact);
  }

  deleteAt(index) {
    this.contacts.splice(index, 1);
  }
  getAtIndex(index) {
    return this.contacts[index];
  }
  findContactByName(name) {
    return this.contacts.filter(contact => {
      if (contact.name === name) {
        return contact;
      }
    });
  }
  findContactByRelation(relation) {
    for (let contact of this.contacts) {
      if (contact.relation === relation) {
        contactsToReturn.push(contacts);
      }
    }
    return contactsToReturn;
  }
  searchContacts(text) {
    return this.contacts.filter(contact => {
      for (let property in contact) {
        if (contact[property].includes(text)) {
          return contact;
        }
      }
    });
  }
}

let addressBook = new MyaddressBook();
addressBook.add("joseph u.", "joey_1@msn.com", "2486879898", "friend");
addressBook.add("jose p.", "joe_1231@msn.com", "24864321898", "compadre");
addressBook.add("chris p. bacon", "crispy_420@msn.com", "248612898", "comrade");
console.log(addressBook);

console.log(addressBook);

function display() {
  let container = document.querySelector(".cards");
  container.innerHTML = "";
  for (let contact of addressBook.contacts) {
    let card = document.createElement("div");
    let name = document.createElement("p");
    name.innerText = `name:${contact.name}`;
    card.append(name);

    let email = document.createElement("p");
    email.innerText = `email:${contact.email}`;
    card.append(email);

    let phone = document.createElement("p");
    phone.innerText = `phone:${contact.phone}`;
    card.append(phone);

    let relation = document.createElement("p");
    relation.innerText = `relation:${contact.relation}`;
    card.append(relation);

    container.append(card);
    card.setAttribute("class", "contactCard");
  }
}

display();

const form = document.querySelector("form");

form.addEventListener("submit", addContact);
function addContact(e) {
  e.preventDefault();
  const formData = FormData(form);
  console.log(formData.get("name"));
  addressBook.add(
    formData.get("name"),
    formData.get("email"),
    formData.get("phone"),
    formData.get("relation")
  );
  form.reset();
  display();
}
