//Projects
const projects = {
//     bookmark: {
//         name: 'bookmark',
//         github: 'https://github.com/nmukassa1/bookmark',
//         website: 'https://nmukassa1.github.io/bookmark/',
//         img: './assets/bookmark copy.jpeg',
//         alt: 'bookmark site',
//         overview: 'A simple one page site consisting of an Accordion feature and email validation. (Project sourced from Frontend Mentor)',
//         tools: ['HTML', 'SCSS', 'JAVASCRIPT']
//     },
    photosnap: {
        name: 'photosnap',
        github: 'https://github.com/nmukassa1/photosnap',
        website: 'https://nmukassa1.github.io/photosnap/',
        img: './assets/photosnap copy.jpeg',
        alt: 'photosnap site',
        overview: 'My first ever attempt at creating a multi-page site consisting of 4-pages in total, as well as using Javascript for the first time ever. (Project sourced from Frontend Mentor)',
        tools: ['HTML', 'CSS', 'JAVASCRIPT']
    },
    designo: {
        name: 'designo',
        github: 'https://github.com/nmukassa1/designo',
        website: 'https://nmukassa1.github.io/designo/',
        img: './assets/designo copy.jpeg',
        alt: 'designo site',
        overview: `Wanting to put my skills to the test once more after creating a 4-page site. This here is a 7-page site that containts an email form on the 'contact' page. (Project sourced from Frontend Mentor)`,
        tools: ['HTML', 'SCSS', 'JAVASCRIPT']
    },
//     bespoke: {
//         name: 'bespoke',
//         github: 'https://github.com/nmukassa1/bespoke/settings/pages',
//         website: 'https://nmukassa1.github.io/bespoke/',
//         img: './assets/bespoke.jpeg',
//         alt: 'bespoke site',
//         overview: 'A hypothetical interior design company whose design I replecated from taylorhowes.co.uk.',
//         tools: ['HTML', 'SCSS', 'JAVASCRIPT']
//     },
    movieDirectory: {
        name: 'movieDirectory',
        github: 'https://github.com/nmukassa1/movie-directory',
        website: 'https://nmukassa1.github.io/movie-directory/',
        img: './assets/movie-directory.jpeg',
        alt: 'movie directory site',
        overview: `Using "www.tmdb.com" API, I was able to create a directory where people can find an array of movies and shows, filter them through genre and even add their favourite shows to their favourite's page`,
        tools: ['HTML', 'SCSS', 'JAVASCRIPT, API']
    }
};

//Store 'projects' values into an array so I can loop thru
const projectsValesArray = Object.values(projects);


const projectContainer = document.querySelector('#projects__container ul');

/*
Loop through 'projectsValuesArray' to create 
and append element 
*/
const createNewProject = function() {
    for(let i = 0; i < projectsValesArray.length; i++) {
        const individualProject = document.createElement('li');
        individualProject.setAttribute('class', 'individual-project');
        individualProject.innerHTML = `
            <button id='${projectsValesArray[i].name}'>
                <img src='${projectsValesArray[i].img}' alt='${projectsValesArray[i].alt}'>
            </button>
        `;
        projectContainer.prepend(individualProject);
    }
};

createNewProject();



//Modal
const individualProject = document.querySelectorAll('.individual-project button');
const modal = document.querySelector('#modal');
const close = document.querySelector('#close');
const modalImg = document.querySelector('#modal-img img');
const overview = document.querySelector('#overview p');
const toolsUsed = document.querySelector('#tools-used p');
const web = document.querySelector('#web');
const github = document.querySelector('#github');
const body = document.querySelector('body');


//Open modal
individualProject.forEach(function(project) {
    project.addEventListener('click', function(e) {
        // const item = e.target.id;
        //Open modal
        modal.style.display = 'flex';

        //Display relevent image
        modalImg.src = `${projects[`${project.id}`].img}`

        //Display relevent overview
        overview.textContent = `${projects[`${project.id}`].overview}`

        //Display relevent tools used
        toolsUsed.textContent = `${projects[`${project.id}`].tools.join(', ')}`

        //Inset correct hrefs
        web.href = `${projects[`${project.id}`].website}`
        github.href = `${projects[`${project.id}`].github}`

       //Prevent scroll
       body.classList.toggle('bodyActive');
    })
})


close.addEventListener('click', (e) => {
    modal.style.display = 'none'
    body.classList.toggle('bodyActive');
}) 
