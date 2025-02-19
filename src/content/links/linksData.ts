export interface LinkData {
    url: string;
    title: string;
    comment?: string;
    quote?: string;
    tags: string[];
}

export const linksData: LinkData[] = [
    {
        url: "https://jon.bo/posts/meaningful-life/",
        title: "what makes a meaningful life?",
        quote: "Re-potting a plant. Smiling at a stranger. The extraordinary emerges from the ordinary, complexity from simplicity. Being in right relationship with self, others, and the earth. Building towards systems that are re-generative, non-extractive, non-exclusionary. Learning, each and every day.",
        tags: ['essay', 'human', 'life'],
    },
    {
        url: "https://www.wheresyoured.at/what-were-fighting-for/",
        title: "What We're Fighting For",
        quote: "We do not \"use\" the computer — we negotiate with it to try and make it do the things we want it to do, because the incentives behind modern software development no longer align with the user.",
        tags: ['essay', 'tech'],
    },
    {
        url: "https://www.henrikkarlsson.xyz/p/start-a-blog",
        title: "Advice for a friend who wants to start a blog",
        comment: "Great piece of advice if you just have started writing independently, like myself, or are going to",
        tags: ['essay', 'writing']
    },
    {
        url: "http://johnsalvatier.org/blog/2017/submission-and-dominance-among-friends",
        title: "Submission and dominance among friends",
        quote: "I recently found myself longing for male friends to act dominant over me. Imagining close male friends putting their arms over my shoulders and jostling me a bit, or squeezing my shoulders a bit roughly as they come up to talk to me felt good. Actions that clearly convey ‘I’m in charge here and I think you’ll like it’.",
        comment: "Status dynamics are weirder than you might think.",
        tags: ['essay', 'psychology'],
    },
    {
        url: "https://chadnauseam.com/coding/random/calculator-app",
        title: "A calculator app? Anyone could make that",
        quote: "Remember - if the calculator showed 0 for e^(-10000), that would be wrong. It's not 0. It should say 0.00000... and let you scroll until you see where it changes. But, it SHOULD show 0 when you type sin(π). sin(π) is exactly 0",
        comment: "Simple arithmetics has a surprising amount of detail",
        tags: ['coding', 'algorithms'],
    },
    {
        url: "https://www.lesswrong.com/posts/PJu2HhKsyTEJMxS9a/you-don-t-know-how-bad-most-things-are-nor-precisely-how",
        title: "You don't know how bad most things are nor precisely how they're bad",
        quote: "If their art dies out, maybe nobody will know how bad all the pianos are. And then we'll all have slightly worse pianos than we would otherwise have. And I mean if that's the way things are going to go, then let's just steer the Earth into the Sun, because what's the point of any of this.",
        comment: "Quality you cannot measure and barely can feel",
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
        tags: ['blog', 'people', 'coding', 'tech'],
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
