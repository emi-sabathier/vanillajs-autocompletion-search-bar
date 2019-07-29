class SearchBar {
  constructor(thumbnailsArray, inputSearchId) {
    this.inputSearch = document.getElementById(inputSearchId);
    this.thumbnailsList = thumbnailsArray;
    this.inputSearch.addEventListener('input', this.search.bind(this));
    this.displayResults = document.getElementById('display-results');
    this.results = [];
  }
  /**
   * Search the keyword
   * Check if the keyword is found in objects array "thumbnailsList"
   * Push the title found in results[]
   * @param {event} e
   */
  search(e) {
    let keyword = e.target.value.toLowerCase();
    
    this.results = keyword === '' ? [] : this.thumbnailsList.map(e => e.title).filter(e => e.toLowerCase().includes(keyword))

    if (this.results.length > 0) {
      this.createResultsListAndFilter();
    } else {
      this.resetDisplayResults();
      document.querySelectorAll('section').forEach(section => {
        section.style.display = 'flex';
      });
    }
  }
  
  resetDisplayResults() {
    this.displayResults.style.boxShadow = 'none';
    this.displayResults.textContent = '';
  }
  
  /**
   * Creates list of results (li) using results[]
   * Filter the thumbnails
   */
  createResultsListAndFilter() {
    this.displayResults.textContent = '';
    this.results.forEach(result => {
      // creating each li
      let li = document.createElement('li');
      this.displayResults.appendChild(li);
      li.textContent = result;
      this.displayResults.style.boxShadow = '1px 0 2px 1px #D1D1D1';

      // adding click event
      li.addEventListener('click', e => {
        this.resetDisplayResults(); 
        document.querySelectorAll('section h3').forEach(h3El => {
          h3El.parentNode.parentNode.style.display = e.target.textContent !== h3El.textContent ? 'none' : 'flex';
          
        });
      });
    });
  }
}
