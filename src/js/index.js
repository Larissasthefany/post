const searchField = document.getElementById('search');
const searchIcon = document.getElementById('search-icon');

console.log(searchField)
searchField.addEventListener('focus', () => {
  searchIcon.classList.remove('focus');
  searchField.classList.add('focus');
});

searchField.addEventListener('blur', () => {
  if (searchField.value === '') {
    searchIcon.classList.add('focus');
    searchField.classList.remove('focus');
  }
});
