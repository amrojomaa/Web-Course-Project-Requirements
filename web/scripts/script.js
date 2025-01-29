// Toggle Navigation Menu
const navToggle = document.querySelector('.logo');
const navMenu = document.querySelector('.navigation ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

// Form Validation
const form = document.querySelector('#contact-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const contactMethod = document.querySelector('#contact-method').value;

    if (!name) {
        alert('Please enter your name.');
        return;
    }

    if (!contactMethod) {
        alert('Please select a contact method.');
        return;
    }

    alert('Form submitted successfully!');
});

// Popup Modal
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
    <div class="modal-content">
        <p>Welcome to My Creative Project!</p>
        <button id="close-modal">Close</button>
    </div>
`;
modal.style.position = 'fixed';
modal.style.bottom = '1px';
modal.style.width = '100%';
modal.style.height = '100%';
modal.style.backgroundColor = 'rgba(16, 16, 16, 0.7)';
modal.style.display = 'flex';
modal.style.justifyContent = 'center';
modal.style.alignItems = 'center';
modal.style.zIndex = '100';

document.body.appendChild(modal);

const closeModal = document.querySelector('#close-modal');
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = 'Dark Mode';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.bottom = '80%';
darkModeToggle.style.right = '10px';
darkModeToggle.style.padding = '10px';
darkModeToggle.style.borderRadius = '20px';
darkModeToggle.style.backgroundColor = '#000';
darkModeToggle.style.color = '#fff';
darkModeToggle.style.cursor = 'pointer';

document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Add Dark Mode Styles
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .dark-mode {
            background-color: #222;
            color: #ddd;
        }

        .dark-mode button {
            background-color: #555 ;
        }
    </style>
`);
