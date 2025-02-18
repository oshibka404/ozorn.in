export interface LinkData {
    url: string;
    title: string;
    comment?: string;
    tags: string[];
}

export const linksData: LinkData[] = [
    {
        url: "https://www.henrikkarlsson.xyz/p/start-a-blog",
        title: "Advice for a friend who wants to start a blog",
        comment: "Great piece of advice if you just have started writing independently, like myself, or are going to",
        tags: ['essay', 'writing']
    },
    {
        url: "http://johnsalvatier.org/blog/2017/submission-and-dominance-among-friends",
        title: "Submission and dominance among friends",
        comment: "Simple arithmetics has a surprising amount of detail",
        tags: ['essay', 'psychology'],
    },
    {
        url: "https://chadnauseam.com/coding/random/calculator-app",
        title: "A calculator app? Anyone could make that",
        comment: "Simple arithmetics has a surprising amount of detail",
        tags: ['coding', 'algorithms'],
    },
    {
        url: "https://www.lesswrong.com/posts/PJu2HhKsyTEJMxS9a/you-don-t-know-how-bad-most-things-are-nor-precisely-how",
        title: "You don't know how bad most things are nor precisely how they're bad",
        comment: "Quality you cannot measure",
        tags: ['music', 'essay'],
    },
    {
        title: "Analytical anti-aliasing",
        url: "https://blog.frost.kiwi/analytical-anti-aliasing/",
        comment: "Different approaches to the smooth rendering of shape edges, with live demos of every one of them.",
        tags: ['coding', 'graphics'],
    },
    {
        url: "https://madebyevan.com/algos/",
        title: "CRDT algorithms by Evan Wallace",
        comment: "Nice research of CRDT algorithms with demos by Figma co-founder.",
        tags: ['coding', 'local-first', 'algorithms'],
    },
    {
        url: "https://josephg.com/blog/crdts-go-brrr/",
        title: "5000x optimization of one CRDT algorithm",
        comment: "How the same thing can be made so much faster",
        tags: ['coding', 'performance'],
    },
    {
        url: "https://www.youtube.com/watch?v=h9YZXuUjyOs",
        title: "The scientific method of troubleshooting",
        comment: "a talk from 10 years ago on debugging as a scientific research process.",
        tags: ['coding', 'debugging', 'video'],
    },
    {
        url: "https://charity.wtf",
        title: "Charity Majors",
        comment: "The CTO of Honeycomb. Writes on being a good engineering manager.",
        tags: ['blog', 'people', 'management'],
    },
    {
        url: "https://pluralistic.net",
        title: "Pluralistic by Cory Doctorow",
        comment: "Sci-fi writer and digital rights activist punches monopolies and capitalism in general.",
        tags: ['blog', 'people', 'politics'],
    },
    {
        url: "https://newsletter.pragmaticengineer.com",
        title: "Pragmatic Engineer by Gergely Orosz",
        comment: "Insides from IT companies, deep analytics of what's happening in the industry",
        tags: ['blog', 'people', 'coding'],
    },
    {
        url: "https://www.astralcodexten.com",
        title: "Astral Codex Ten by Scott Alexander",
        comment: "Psychiatrist based in Bay Area writes about Bayes, rationalism, effective altruism and, well, psychiatry.",
        tags: ['blog', 'people', 'psychology'],
    },
    {
        url: "https://www.wheresyoured.at",
        title: "Where's Your Ed At by Ed Zitron",
        comment: "On economic bubbles, rot economy and calling bullshit",
        tags: ['blog', 'people', 'ai'],
    },
    {
        url: "https://kagi.com",
        title: "Kagi",
        comment: "Superior search engine",
        tags: ['product', 'web'],
    },
    {
        url: "https://www.givewell.org",
        title: "GiveWell",
        comment: "A non-profit that credibly evaluates the cost-effectiveness of charities, measured in lives saved per dollar spent.",
        tags: ["charity", "effective-altruism"]
    },
    {
        url: "https://www.eff.org",
        title: "EFF",
        comment: "Digital rights, privacy, right to repair. Good things. Important things.",
        tags: ["charity", "digital-rights"]
    },
]
