
// SEARCH 
function myFunction() {
  // Declare variables
  var input, filter, ul, li;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("h3");
  card = document.querySelectorAll('.card');

  // Loop through all list items, and hide those who don't match the search query
  for (let i = 0; i < li.length; i++) {
    if (card[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      card[i].style.display = "";
    } else {
      card[i].style.display = "none";
    }
  }
}

var filterActive;

// FILTER SELECT
function filterCategory(category) {
  if (filterActive != category) {

    // reset results list
    $('.filter-cat-results .f-cat').removeClass('active');

    // elements to be filtered
    $('.filter-cat-results .f-cat')
      .filter('[data-cat="' + category + '"]')
      .addClass('active');

    // reset active filter
    filterActive = category;
  }
}

$('.f-cat').addClass('active');

$('.filtering select').change(function () {
  if ($(this).val() == 'cat-all') {
    $('.filter-cat-results .f-cat').addClass('active');
    filterActive = 'cat-all';
  } else {
    filterCategory($(this).val());
  }
});



