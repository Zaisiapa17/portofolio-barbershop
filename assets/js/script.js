// testing js dev

// dropdown
var button = document.getElementById('menu-button');
var menu = document.getElementById('dropdown-menu');

button.addEventListener('click', function () {
  var expanded = button.getAttribute('aria-expanded') === 'true';

  button.setAttribute('aria-expanded', !expanded);
  menu.classList.toggle('hidden');
});

// Close the dropdown when clicking outside of it
document.addEventListener('click', function (event) {
  if (!button.contains(event.target) && !menu.contains(event.target)) {
    button.setAttribute('aria-expanded', 'false');
    menu.classList.add('hidden');
  }
});