class SearchBar {
    constructor(thumbnailsArray, keywordId) {
      this.keyword = document.getElementById(keywordId);
      this.thumbnailsData = thumbnailsArray; // le tableau des infos
      this.keyword.addEventListener("input", this.search.bind(this));      
    }
    search(e) {        

      let results = [];
      let displayResults = document.getElementById('display-results');

      this.thumbnailsData.forEach(thumbnail => {
        let keyword = e.target.value.toLowerCase();
        let thumbnailTitle = thumbnail.title.toLowerCase();
        let isFound = thumbnailTitle.includes(keyword);  

        if (isFound) {
          results.push(thumbnail.title); 
        } 
      });

      displayResults.innerHTML = '';
      results.forEach(result => {     
        let listLi = document.createElement("li");
        displayResults.appendChild(listLi);
        listLi.innerHTML = result;
      });      
    }
  }