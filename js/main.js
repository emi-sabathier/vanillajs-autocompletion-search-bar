/**
 * Create empty array
 * Then, push each object in the array, with the informations.
 * As i don't have  DB, i have to create each existing thumbnails
 */
const thumbnailsArray = [];
thumbnailsArray.push(new Thumbnail('Jambon ut perspiciatis','Mme Pérera', '8 juillet 2019', 'documentaliste','https://picsum.photos/200?random=1'));
thumbnailsArray.push(new Thumbnail('Neque porro quisquam','M. Patini', '10 juin 2019', 'professeur de français','https://picsum.photos/200?random=2'));
thumbnailsArray.push(new Thumbnail('At vero eos et accusamus','Mme Sabatini', '26 avril 2019', '','https://picsum.photos/200?random=3'));
thumbnailsArray.push(new Thumbnail('At harum quidem','M. Magionfreddo', '5 mai 2019', 'professeur d\'anglais','https://picsum.photos/200?random=4'));
thumbnailsArray.push(new Thumbnail('Xt vero eos','Mme Nefes', '31 mars 2019', 'documentaliste','https://picsum.photos/200?random=5'));
thumbnailsArray.push(new Thumbnail('Harum quidem','Mme Bounzy', '14 janvier 2019', '','https://picsum.photos/200?random=6'));

thumbnailsArray.forEach((thumbnail) => {
        const thumbnailsListId = document.getElementById('list-thumbnails');
        // Create Elements
        let section = document.createElement('section');
        let textsContainer = document.createElement('div');
        let divElt = document.createElement('div');
        let figure = document.createElement('figure');
        let img = document.createElement('img');
        let title = document.createElement('h4');
        let pAuthor = document.createElement('p');
        let pDate = document.createElement('p');
        let pProfession = document.createElement('p');
    
        img.src = thumbnail.image;
        img.setAttribute('alt', thumbnail.title);
        textsContainer.className = 'texts-valign';
        title.textContent = thumbnail.title;
        pAuthor.textContent = thumbnail.author;
        pProfession.textContent = thumbnail.profession;
        pDate.textContent = thumbnail.date;
    
        thumbnailsListId.appendChild(section);
        section.appendChild(figure);
        figure.appendChild(img);
        section.appendChild(textsContainer);
        textsContainer.appendChild(divElt);
        divElt.appendChild(title);
        divElt.appendChild(pAuthor);
        divElt.appendChild(pDate);
        divElt.appendChild(pProfession);
});

const searchBar = new SearchBar(thumbnailsArray, 'keyword');