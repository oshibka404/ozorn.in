export interface LinkData {
    url?: string;
    embed?: boolean;
    date: string;
    title: string;
    comment?: string;
    quote?: string;
    tags: string[];
}

export const linksData: LinkData[] = [
    // {
    //     url: "https",
    //     embed: false,
    //     date: "24 Feb 2025",
    //     title: "title",
    //     comment: "comment",
    //     quote: "quote",
    //     tags: ['tag', 'tag'],
    // },
    {
        url: "https://startacomputer.club",
        date: "24 Feb 2025",
        title: "You should start a computer club in the place you live",
        quote: "a computer club is where a group of people hang out and do computer together",
        tags: ['tech', 'activism'],
    },
    {
        url: "https://goodenough.us/blog/2023-08-23-bad-ideas-are-fun/",
        date: "22 Feb 2025",
        title: "Bad Ideas Are Fun",
        quote: "And once you loosen up your brain by coming up with ten bad ideas, some good ideas may follow. But here's another thing: we're not great at judging if an idea is good or bad. So write all of your ideas down.",
        tags: ['essay', 'psychology', 'management'],
    },
    {
        url: "https://www.miriamsuzanne.com/2025/02/12/tech-ai-wtf/",
        date: "22 Feb 2025",
        title: "Tech continues to be political", 
        comment: "And the politics aren’t looking great",
        quote: "Every time I log on I feel like I’m being gaslit – asked to train my shitty replacement, and then step aside. The future is not women, I’m learning now. [...] The future is actually inhuman word synthesizers.",
        tags: ['essay', 'tech'],
    },
    {
        url: "https://kk.org/thetechnium/50-years-of-travel-tips/",
        date: "21 Feb 2025",
        title: "50 Years of Travel Tips",
        quote: "Organize your travel around passions instead of destinations. An itinerary based on obscure cheeses, or naval history, or dinosaur digs, or jazz joints will lead to far more adventures, and memorable times than a grand tour of famous places.",
        tags: ['essay', 'travel', 'life'],
    },
    {
        url: "https://jon.bo/posts/meaningful-life/",
        date: "19 Feb 2025",
        title: "what makes a meaningful life?",
        quote: "Re-potting a plant. Smiling at a stranger. The extraordinary emerges from the ordinary, complexity from simplicity. Being in right relationship with self, others, and the earth. Building towards systems that are re-generative, non-extractive, non-exclusionary. Learning, each and every day.",
        tags: ['essay', 'human', 'life'],
    },
    {
        url: "https://www.wheresyoured.at/what-were-fighting-for/",
        date: "19 Feb 2025",
        title: "What We're Fighting For",
        quote: "We do not \"use\" the computer — we negotiate with it to try and make it do the things we want it to do, because the incentives behind modern software development no longer align with the user.",
        tags: ['essay', 'tech'],
    },
    {
        url: "https://www.henrikkarlsson.xyz/p/start-a-blog",
        date: "18 Feb 2025",
        title: "Advice for a friend who wants to start a blog",
        comment: "Great piece of advice if you just have started writing independently, like myself, or are going to",
        tags: ['essay', 'writing']
    },
    {
        url: "http://johnsalvatier.org/blog/2017/submission-and-dominance-among-friends",
        date: "18 Feb 2025",
        title: "Submission and dominance among friends",
        quote: "I recently found myself longing for male friends to act dominant over me. Imagining close male friends putting their arms over my shoulders and jostling me a bit, or squeezing my shoulders a bit roughly as they come up to talk to me felt good. Actions that clearly convey ‘I’m in charge here and I think you’ll like it’.",
        comment: "Status dynamics are weirder than you might think.",
        tags: ['essay', 'psychology'],
    },
    {
        url: "https://chadnauseam.com/coding/random/calculator-app",
        date: "18 Feb 2025",
        title: "A calculator app? Anyone could make that",
        quote: "Remember - if the calculator showed 0 for e^(-10000), that would be wrong. It's not 0. It should say 0.00000... and let you scroll until you see where it changes. But, it SHOULD show 0 when you type sin(π). sin(π) is exactly 0",
        comment: "Simple arithmetics has a surprising amount of detail",
        tags: ['coding', 'algorithms'],
    },
    {
        url: "https://www.lesswrong.com/posts/PJu2HhKsyTEJMxS9a/you-don-t-know-how-bad-most-things-are-nor-precisely-how",
        date: "18 Feb 2025",
        title: "You don't know how bad most things are nor precisely how they're bad",
        quote: "If their art dies out, maybe nobody will know how bad all the pianos are. And then we'll all have slightly worse pianos than we would otherwise have. And I mean if that's the way things are going to go, then let's just steer the Earth into the Sun, because what's the point of any of this.",
        comment: "Quality you cannot measure and barely can feel",
        tags: ['music', 'essay'],
    },
    {
        title: "Analytical anti-aliasing",
        date: "19 Jan 2025",
        url: "https://blog.frost.kiwi/analytical-anti-aliasing/",
        comment: "Different approaches to the smooth rendering of shape edges, with live demos of every one of them.",
        tags: ['coding', 'graphics'],
    },
    {
        url: "https://madebyevan.com/algos/",
        date: "23 Dec 2024",
        title: "CRDT algorithms by Evan Wallace",
        comment: "Nice research of CRDT algorithms with demos by Figma co-founder.",
        tags: ['coding', 'local-first', 'algorithms'],
    },
    {
        url: "https://josephg.com/blog/crdts-go-brrr/",
        title: "5000x optimization of one CRDT algorithm",
        date: "20 Dec 2024",
        comment: "How the same thing can be made so much faster",
        tags: ['coding', 'performance'],
    },
    {
        url: "https://www.youtube.com/watch?v=h9YZXuUjyOs",
        embed: true,
        date: "25 Nov 2024",
        title: "The scientific method of troubleshooting",
        comment: "a talk from 10 years ago on debugging as a scientific research process.",
        tags: ['coding', 'debugging', 'video'],
    },
    {
        url: "https://charity.wtf",
        date: "22 Nov 2024",
        title: "Charity Majors",
        comment: "The CTO of Honeycomb. Writes on being a good engineering manager.",
        tags: ['blog', 'people', 'management'],
    },
    {
        url: "https://pluralistic.net",
        date: "20 Nov 2024",
        title: "Pluralistic by Cory Doctorow",
        comment: "Sci-fi writer and digital rights activist punches monopolies and capitalism in general.",
        tags: ['blog', 'politics'],
    },
    {
        url: "https://newsletter.pragmaticengineer.com",
        date: "20 Nov 2024",
        title: "Pragmatic Engineer by Gergely Orosz",
        comment: "Insides from IT companies, deep analytics of what's happening in the industry",
        tags: ['blog', 'coding', 'tech'],
    },
    {
        url: "https://www.astralcodexten.com",
        date: "20 Oct 2024",
        title: "Astral Codex Ten by Scott Alexander",
        comment: "Psychiatrist based in Bay Area writes about Bayes, rationalism, effective altruism and, well, psychiatry.",
        tags: ['blog', 'psychology'],
    },
    {
        url: "https://www.wheresyoured.at",
        date: "20 Oct 2024",
        title: "Where's Your Ed At by Ed Zitron",
        comment: "On economic bubbles, rot economy and calling bullshit",
        tags: ['blog', 'ai'],
    },
    {
        url: "https://kagi.com",
        date: "20 Oct 2024",
        title: "Kagi",
        comment: "Superior search engine",
        tags: ['product', 'web'],
    },
    {
        url: "https://www.givewell.org",
        date: "20 Sep 2024",
        title: "GiveWell",
        comment: "A non-profit that credibly evaluates the cost-effectiveness of charities, measured in lives saved per dollar spent.",
        tags: ["charity", "effective-altruism"]
    },
    {
        url: "https://www.eff.org",
        date: "20 Sep 2024",
        title: "EFF",
        comment: "Digital rights, privacy, right to repair. Good things. Important things.",
        tags: ["charity", "digital-rights"]
    },
]
