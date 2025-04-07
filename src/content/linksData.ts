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
    //     date: "24 Mar 2025",
    //     title: "title",
    //     comment: "comment",
    //     quote: "quote",
    //     tags: ['tag', 'tag'],
    // },
    {
        url: 'https://www.seangoedecke.com/where-the-money-comes-from/',
        date: "7 Apr 2025",
        title: "Knowing where your engineer salary comes from",
        tags: ['tech', 'essay'],
    },
    {
        url: 'https://gerrymcgovern.com/data-centers-contain-90-crap-data/',
        date: "7 Apr 2025",
        title: "Data centers contain 90% crap data",
        quote: "The Cloud is what happens when the cost of storing data is less than the cost of figuring out what to do with the crap.",
        tags: ['tech', 'ai'],
    },
    {
        url: 'https://simone.org/advertising/',
        date: "6 Apr 2025",
        title: "What if we made advertising illegal?",
        quote: "I think there's a world where we'll look back on our advertising-saturated era with the same bewilderment with which we now regard cigarette smoke, child labor, or public executions: a barbaric practice that we allowed to continue far too long because we couldn't imagine an alternative.",
        tags: ['policy', 'essay'],
    },
    {
        url: 'https://blog.julik.nl/2025/02/the-surcharge-of-big-tech',
        date: "27 Mar 2025",
        title: "The Surcharge of Big Tech",
        comment: "The delta between a Big Tech salary and an agency salary is a bullshit surcharge",
        quote: "People who are great at working in big tech are not only able to navigate this type of environment – they are able to ship in that environment and make meaningful contributions to the business despite the inherent toxicity of it all. And be optimistic and kind while doing so.",
        tags: ['tech', 'essay'],
    },
    {
        url: 'https://cendyne.dev/posts/2025-03-19-vibe-coding-vs-reality.html',
        date: "22 Mar 2025",
        title: "\"Vibe Coding\" vs Reality",
        quote: "The optimal technical founder for a VC is not the 10x engineer. It is someone who'll deliver enough of a product to test its fitness in the market and then succeed in raising more investment money.",
        tags: ['tech', 'essay'],
    },
    {
        url: 'https://susam.net/indieweb-does-not-need-to-take-off.html',
        date: "21 Mar 2025",
        title: "The IndieWeb Doesn't Need to \"Take Off\"",
        comment: "It's like saying that gardening hasn't taken off because most people buy their vegetables at the supermarket.",
        quote: "The IndieWeb is about preserving that hacker culture where websites are crafted and hosted not for mass appeal but for the sheer joy of creation and sharing with like-minded individuals.",
        tags: ['tech', 'essay'],
    },
    {
        url: 'https://en.wikipedia.org/wiki/Nomic',
        date: "18 Mar 2025",
        title: "Nomic",
        comment: "a game in which changing the rules is a move.",
        quote: "The game demonstrates that in any system where rule changes are possible, a situation may arise in which the resulting laws are contradictory or insufficient to determine what is in fact legal.",
        tags: ['politics'],
    },
    {
        url: 'https://doesioshavesideloadingyet.com/#can-hobbyists-take-advantage-of-the-eus-dma-today',
        date: "14 Mar 2025",
        title: "Does iOS have sideloading yet?",
        comment: "DMA (Digital Market Act) implementation",
        quote: "Sideloading is simply the act of installing apps on your computing device that haven't been explicitly reviewed and approved by the company who made the device (or the operating system running on it).",
        tags: ['tech', 'policy'],
    },
    {
        url: 'https://thebaffler.com/salvos/the-problem-with-music',
        date: "14 Mar 2025",
        title: "The Problem with Music",
        comment: "This piece from 1993 has aged too well",
        quote: "I imagine a trench, about four feet wide and five feet deep, maybe sixty yards long, filled with runny, decaying shit. I imagine these people, some of them good friends, some of them barely acquaintances, at one end of this trench. I also imagine a faceless industry lackey at the other end, holding a fountain pen and a contract waiting to be signed.",
        tags: ['music'],
    },
    {
        url: 'http://www.aaronsw.com/weblog/hatethenews',
        date: "13 Mar 2025",
        title: "I Hate the News - Aaron Swartz",
        quote: "With the time people waste reading a newspaper every day, they could have read an entire book about most subjects covered and thereby learned about it with far more detail and far more impact than the daily doses they get dribbled out by the paper. But people, of course, wouldn’t read a book about most subjects covered in the paper, because most of them are simply irrelevant.",
        tags: ['essay', 'life'],
    },
    {
        url: 'https://pluralistic.net/2025/03/08/turnabout/',
        date: "12 Mar 2025",
        title: "Gandersauce",
        comment: "Disruption for thee, but not for me.",
        quote: "\"Moving fast and breaking things\" is not intrinsically amoral. There's plenty of stuff out there that needs breaking. The problem isn't disruption, per se. The problem comes when the disruptor can declare an end to history, declare themselves to be eternal kings, and block anyone from disrupting them.",
        tags: ['tech', 'politics'],
    },
    {
        url: 'https://contrachrome.com',
        date: "10 Mar 2025",
        title: "Contra Chrome – a webcomic",
        comment: "How Google's browser became a threat to privacy and democracy",
        tags: ['tech', 'privacy', 'webcomic'],
    },
    {
        url: "https://johnpweiss.com/blog/199949/the-day-the-muse-died",
        date: "6 Mar 2025",
        title: "The Day the Muse Died",
        comment: "What should you do if what you did disappears?",
        quote: "Someday, the muse may die in you. The thing you always loved suddenly doesn’t do it for you. If that happens, don’t panic. It might come back. But whether it does or not, try new things.",
        tags: ["essay", "art", "human"],
    },
    {
        url: "https://freddiedeboer.substack.com/p/the-r-slur-inner-circle-and-outer",
        date: "5 Mar 2025",
        title: "\"The R-Slur,\" Inner Circle and Outer",
        quote: "...a core way that the alt-right/new right/MAGA tendency grew was precisely through this kind of normative overreach on the part of progressives, the assertion of shared community expectations for language and behavior that simply weren’t actually shared. Put another way, one of the most consequential elements of the social justice era was the implication that certain language and discourse norms had been broadly accepted when they had in fact only been adopted by a small elite.",
        tags: ["essay", "language", "politics"],
    },
    {
        url: "https://blog.cloudflare.com/the-project-jengo-saga-how-cloudflare-stood-up-to-a-patent-troll-and-won/",
        date: "5 Mar 2025",
        title: "The Project Jengo Saga",
        comment: "How Cloudflare Stood up to a Patent Troll – and Won",
        quote: "As we have explained previously, patent trolls benefit from a problematic incentive structure that allows them to take vague or abstract patents that they have no intention of developing and assert them as broadly as possible. Instead, these trolls collect licensing fees or settlements from companies who are otherwise trying to start a business, produce useful products, and create good jobs.",
        tags: ['tech', 'activism'],
    },
    {
        url: "https://cooperlund.medium.com/the-incuriosity-engine-16bdf41e229d",
        date: "27 February 2025",
        title: "The Incuriosity Engine",
        comment: "nice take on what Pirsig calls \"Lateral Knowledge\", and what I talk about a lot in my book Debugging Javascript",
        quote: "A good teacher doesn’t give you an answer, the teacher makes you think about how to get the answer. AI fails at that, and more importantly, AI isn’t sold as a teacher.",
        tags: ['ai', 'tech', 'essay'],
    },
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
