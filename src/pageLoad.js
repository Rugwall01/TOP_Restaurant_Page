
export const genHomePage = (function(){

    const header = document.querySelector('.head');
    const navBar = document.querySelector('.nav');
    const navBtns = document.querySelectorAll('.navBtn');

    const content = document.querySelector('#content');

    const frontPage = document.createElement('div');
    // const searchBar = document.createElement('input');
    // const headline = document.createElement('h2');
    // const testimonial = document.createElement('h4');

    frontPage.classList.add('main');
    // searchBar.classList.add('search');
//     headline.classList.add('headline');
//     testimonial.classList.add('testimonial');
    

    const buildPage = () => {

        // frontPage.append(headline, testimonial);
        content.append(frontPage);

    }



    return { frontPage, content, buildPage }

})();



