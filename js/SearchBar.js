class SearchBar {
  constructor(thumbnailsArray, inputSearchId) {
    this.inputSearch = document.getElementById(inputSearchId);
    this.thumbnailsList = thumbnailsArray;
    this.inputSearch.addEventListener('input', this.search.bind(this));
  }
  /**
   * Search the keyword
   * Check if the keyword is found in objects array "thumbnailsList"
   * Push the title found in results[]
   * @param {event} e
   */
  search(e) {
    this.results = [];
    this.displayResults = document.getElementById('display-results');

    this.thumbnailsList.forEach(thumbnail => {
      let keyword = e.target.value.toLowerCase();
      if (keyword !== '') {
        let thumbnailTitle = thumbnail.title.toLowerCase();
        let isFound = thumbnailTitle.includes(keyword);

        if (isFound) {
          this.results.push(thumbnail.title);
        }
      } else {
        this.displayResults.style.boxShadow = 'none';
        this.displayResults.innerHTML = '';
        let section = document.querySelectorAll('section');
        section.forEach(section => {
          section.style.display = 'flex';
        });
      }
    });
    this.displayResults.innerHTML = '';
    this.createResultsListAndFilter();
  }
  /**
   * Creates list of results (li) using results[]
   * Filter the thumbnails
   */
  createResultsListAndFilter() {
    this.results.forEach(result => {
      // creating each li
      let li = document.createElement('li');
      this.displayResults.appendChild(li);
      li.textContent = result;
      this.displayResults.style.boxShadow = '1px 0 2px 1px #D1D1D1';

      // adding click event
      li.addEventListener('click', e => {        
        this.displayResults.style.boxShadow = 'none';
        let targetLi = e.target.innerText;
        let hiddenInputList = document.querySelectorAll('section input');

        /* there're hidden input containing the title in the HTML
        *  if the selected result IS DIFFERENT from a hidden input title : hide the parent (section)
        */
        hiddenInputList.forEach(input => {
          let hiddenInputText = input.value;
          this.displayResults.innerHTML = '';

          if (targetLi !== hiddenInputText) {
            input.parentNode.style.display = 'none';
          } else {
            input.parentNode.style.display = 'flex';
          }
        });
      });
    });
  }
}
