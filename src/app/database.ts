type Project = {
  id: number;
  name: string;
  year: number;
  previewImage: string | undefined;
  description?: string;
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "Designspo",
    year: 2025,
    previewImage: "/designspo.png",
    link: "https://designspo-webpage.vercel.app/",
    description:
      "An app to better manage your design inspirations into one central hub for easy access and organization. Replacing the need for multiple apps and bookmarks, Designspo allows you to save, categorize, and revisit your favorite designs effortlessly.",
  },
  {
    id: 2,
    name: "Unwind",
    year: 2023,
    previewImage: "/unwind.png",
    link: "https://ecommerce-beryl-pi.vercel.app/",
    description:
      "Unwind is a project made to improve my skills of persisitng state management across pages in a time before I learnt about state management tools like Redux and databases.",
  },
  {
    id: 3,
    name: "Top 20",
    year: 2022,
    previewImage: "/movieApp.png",
    link: "https://nmukassa1.github.io/movie-project-2/",
    description:
      "A movie app that showcases a few top films and shows of the week to watch by using the TMDB API to fetch data and display it in a user-friendly interface. Allowing me to practice my skills in API integration.",
  },
  {
    id: 4,
    name: "Spotify Clone",
    year: 2022,
    previewImage: "/spotifyClone.png",
    link: "https://nmukassa1.github.io/spotifyclone/",
    description:
      "An early stage exploration into Javascript in my developer journey by building a Spotify clone that focuses on being able to play music, toggle play state, and navigate through the playlist.",
  },
  {
    id: 5,
    name: "Photosnap",
    year: 2021,
    previewImage: "/photosnap.png",
    link: "https://nmukassa1.github.io/photosnap/index.html",
    description:
      "A Frontend Mentor Challenge that focuses on building a landing page for a photography company. It showcases my ability to create responsive designs and implement interactive elements using HTML, CSS, and JavaScript.",
  },
];

export default projects;
