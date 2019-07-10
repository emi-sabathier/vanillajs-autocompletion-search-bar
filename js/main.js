/**
 * Creates an empty array
 * Pushes each object in the array, with the infos.
 * As i don't use a DB, i have to create each existing thumbnails
 */
const thumbnailsArray = [];
thumbnailsArray.push(new Thumbnail('Morbi ut perspiciatis','Mme Pérera', '8 juillet 2019', 'documentaliste','https://picsum.photos/200?random=1'));
thumbnailsArray.push(new Thumbnail('Neque porro quisquam','M. Patini', '10 juin 2019', 'professeur de français','https://picsum.photos/200?random=2'));
thumbnailsArray.push(new Thumbnail('At vero eos et accusamus','Mme Sabatini', '26 avril 2019', '','https://picsum.photos/200?random=3'));
thumbnailsArray.push(new Thumbnail('At harum quidem','M. Magionfreddo', '5 mai 2019', 'professeur d\'anglais','https://picsum.photos/200?random=4'));
thumbnailsArray.push(new Thumbnail('Aliquam vero eos','Mme Nefes', '31 mars 2019', 'documentaliste','https://picsum.photos/200?random=5'));
thumbnailsArray.push(new Thumbnail('Harum quidem','Mme Bounzy', '14 janvier 2019', '','https://picsum.photos/200?random=6'));

thumbnailsArray.forEach((thumbnail) => {
        const thumbnailsListId = document.getElementById('list-thumbnails');
        // Create Elements
        let section = document.createElement('section');
        let hiddenTitle = document.createElement('input'); 
        let textsContainer = document.createElement('div');
        let figure = document.createElement('figure');
        let img = document.createElement('img');
        let title = document.createElement('h4');
        let pAuthor = document.createElement('p');
        let pDate = document.createElement('p');
        let pProfession = document.createElement('p');

        // Create attributes, classes or textContents
        hiddenTitle.setAttribute('type', 'hidden');
        hiddenTitle.setAttribute('value', thumbnail.title);
        textsContainer.className = 'infos-texts';
        img.src = thumbnail.image;
        img.setAttribute('alt', thumbnail.title);
        title.textContent = thumbnail.title;
        pAuthor.textContent = thumbnail.author;
        pProfession.textContent = thumbnail.profession;
        pDate.textContent = thumbnail.date;
    
        thumbnailsListId.appendChild(section);
        section.appendChild(hiddenTitle);
        section.appendChild(figure);
        figure.appendChild(img);
        section.appendChild(textsContainer);
        textsContainer.appendChild(title);
        textsContainer.appendChild(pAuthor);
        textsContainer.appendChild(pDate);
        textsContainer.appendChild(pProfession);
});

const searchBar = new SearchBar(thumbnailsArray, 'keyword');