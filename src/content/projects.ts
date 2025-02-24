import type {LinkData} from "./linksData.ts";

export const projects: LinkData[] = [
    // {
    //     url: "https",
    //     date: "24 Feb 2025",
    //     title: "title",
    //     comment: "comment",
    //     quote: "quote",
    //     tags: ['tag', 'tag'],
    // },
    {
        title: "Debugging Javascript",
        comment: "I am writing a book on debugging web applications. To be published in 2025 by Pragmatic Programmers",
        tags: ['book', 'writing'],
    },
    {
        url: "https://hightechmess.com/",
        title: "High Tech Mess",
        comment: "I organized a mini-festival of art and technologies",
        tags: ['music', 'event', 'live'],
    },
    {
        url: "https://youtu.be/Ytjqds8gVOU",
        embed: true,
        title: "SP Sessions",
        comment: "I played live at Zürich made possible by 59perlen and Petite Victory Collective",
        tags: ['music', 'event', 'live'],
    },
    {
        url: "https://threecoloredsquares.bandcamp.com/track/novaya-zemlya",
        title: "Novaya Zemlya",
        comment: "I released Novaya Zemlya, equally influenced by contemporary classical and dance music",
        tags: ['music', 'release'],
    },
]
