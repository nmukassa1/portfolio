$('document').ready(() => {


//    async function show(element, time){
//     //$(element).css('display', 'block')
//         setTimeout(() =>{
//             $(element).css('opacity', '1')
//             $(element).css('transform', 'scale(1)')
//         },time)
//     }


    function show(element, time){
        return new Promise((res, rej) =>{
            setTimeout(() =>{
                $(element).css('opacity', '1')
                $(element).css('transform', 'translate(-50%, -50%) scale(1)')
                res()
            },time)
        })
    }
    function hide(element, time){
        return new Promise((res, rej) =>{
            setTimeout(() =>{
                //$(element).css('opacity', '0')
                $(element).fadeOut(1000, () =>{
                    $(element).hide()
                })
                $(element).css('transform', 'translate(-50%, -50%) scale(0)')
                res()
            },time)
        })
    }
   
    async function a(element, start, end){
        await show(element, start)
        await hide(element, end)
    }

    async function animate(){
        try{
            await a('#intro', 1000, 3000)
            // await a('#why', 1000, 8000)
            // await a('#why-2', 1000, 8000)
            await show('main', 1000)
            $('body').css('overflow', 'initial')
        } catch (e){
            console.log(e)
        }
    }

    animate()


    const projects = [
        {
            name: 'Movie Directory',
            img: `../assets/movie-directory.jpg`,
            bio: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit earum doloremque impedit distinctio quis nobis veritatis`,
            tools: ['SASS', 'JQuery', 'API', 'Javascript'],
            site: `https://nmukassa1.github.io/movie-directory/`,
            github: `https://github.com/nmukassa1/movie-directory`
        },
        {
            name: 'Spotify Clone',
            img: `../assets/spotifyClone.png`,
            bio: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit earum doloremque impedit distinctio quis nobis veritatis`,
            tools: ['SASS', 'JQuery', 'API', 'Javascript'],
            site: `https://nmukassa1.github.io/spotifyclone/`,
            github: `https://github.com/nmukassa1/movie-directory`
        }
    ]

    for(let i = 0; i < projects.length; i++){
        $('#portfolio').append(`
        <div class="project">
            <img src="${projects[i].img}" alt="">
            <div class="project-info">
                <h1 id="project-name">${projects[i].name}</h1>
                <p class="project-bio">${projects[i].bio}</p>
                <span class="project-tools">${projects[i].tools.join(', ')}</span>
                <a target="_blank" href="${projects[i].site}">View Project</a>
            </div>
        </div>
        `)
    }
      
     

})