let contacts = [];
const API_URL = "js/list.json"; // Local JSON file

// DOM Elements
const contactForm = document.getElementById("contact-form");
const contactList = document.getElementById("contact-list");
const searchBox = document.getElementById("search-box");

// Fetch contacts from JSON file
async function fetchContacts() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to load contacts.json");
    contacts = await response.json();
    renderContacts(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    alert("Could not load contacts. Check console.");
  }
}

// Render contacts
function renderContacts(list) {
  contactList.innerHTML = "";
  list.forEach(contact => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span><strong>${contact.name}</strong> - ${contact.phone} (${contact.email || "No email"})</span>
      <span>
        <button class="edit" onclick="editContact(${contact.id})">Edit</button>
        <button class="delete" onclick="deleteContact(${contact.id})">Delete</button>
      </span>
    `;
    contactList.appendChild(li);
  });
}

// Add new contact (in-memory only, doesn’t persist to JSON without backend)
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !phone) {
    alert("Name and Phone are required!");
    return;
  }

  const newContact = {
    id: Date.now(),
    name,
    phone,
    email
  };

  contacts.push(newContact);
  renderContacts(contacts);
  contactForm.reset();

  alert("Contact added (in-memory only — won’t save to JSON file without backend)");
});

// Delete contact
function deleteContact(id) {
  if (confirm("Are you sure you want to delete this contact?")) {
    contacts = contacts.filter(contact => contact.id !== id);
    renderContacts(contacts);
  }
}

// Edit contact
function editContact(id) {
  const contact = contacts.find(c => c.id === id);
  if (contact) {
    document.getElementById("name").value = contact.name;
    document.getElementById("phone").value = contact.phone;
    document.getElementById("email").value = contact.email;
    document.getElementById('submit_task').innerText = 'Update Contact';
    document.getElementById('buttons').insertAdjacentHTML('beforeend', '<button id="clear_task" class="ms-2 btn btn-primary btn-sm mb-3" type="reset" onclick="removebtns()">Clear</button>');
    // deleteContact(id); // remove old, re-add updated on submit
  }
}

function removebtns(){
  contactForm.reset();
  document.getElementById('clear_task').remove();
  document.getElementById('submit_task').innerText = 'Add Contact';

}
// Search contacts
searchBox.addEventListener("input", () => {
  const query = searchBox.value.toLowerCase();
  const filtered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(query) ||
    contact.phone.includes(query)
  );
  renderContacts(filtered);
});

// Load data on startup
fetchContacts();