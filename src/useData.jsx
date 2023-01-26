function useData() {

    const data = [
        {
            title: 'Unwind',
            about: [
                `Wanting to push myself, I've gone on to turn my love for reading into an ecommerce store. Browse books and their synopsis and after finding the right one, simply add it into your basket. This was created using React and me spending an hour creating a custom JSX database and importing it.`
            ],
            pic: [
                require(`./assets/unwind/unwind-home.png`), 
                require(`./assets/unwind/shopping-cart.png`), 
                require(`./assets/unwind/empty-shopping-cart.png`), 
                require(`./assets/unwind/book-page.png`)
            ],
            id: 'unw01',
            tools: ['React', 'Tailwind', 'Custom Database'],
            link: 'https://nmukassa1.github.io/unwind/'
        },
        {
            title: 'Find',
            about: [
                `A small interface listing a small range of popular films and tv series with their respective synopsis and trailer. This project was made possible with the help of creating a fetch request to a third party's api.`,
                `A new version is in the works to allow users to filter films and shows by genre, search for specific content as well as create a watchlist.`
            ],
            pic: [
                // require(`./assets/movie/movie.png`),
                require(`./assets/movie/movie-info.png`),
            ],
            id: 'mov01',
            tools: ['React', 'Tailwind', 'API'],
            link: "https://nmukassa1.github.io/movie-project-2/"
        },
        {
            title: 'Spotify Clone',
            about: [
                'A rendition of Spotify created with Vanilla Javascript with a live timestamp to let you know where you are in your song.'
            ],
            pic: [
                require(`./assets/spotify/spotify.png`)
            ],
            id: 'spo01',
            tools: ['Vanila Js', 'Scss', 'Custom Database'],
            link: "https://nmukassa1.github.io/spotifyclone/"
        },
    ]

    return { data };
}

export default useData;