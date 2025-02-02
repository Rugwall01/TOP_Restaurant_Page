
export const genHomePage = (function(){

    const header = document.querySelector('.head');
    const navBar = document.querySelector('.nav');
    const navBtns = document.querySelectorAll('.navBtn');

    const content = document.querySelector('#content');

    const frontPage = document.createElement('div');
    const searchBar = document.createElement('input');
    const headline = document.createElement('h2');
    const testamonial = document.createElement('h4');

    frontPage.classList.add('main');
    searchBar.classList.add('search');
    headline.classList.add('headline');
    testamonial.classList.add('testamonial');
    


    const buildPage = () => {

        frontPage.append(searchBar, headline, testamonial);
        content.append(frontPage);

    }



    return { buildPage }

})();



// export const page = () => genHomePage.buildPage();

