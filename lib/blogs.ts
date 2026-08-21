export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "image-comparison"; images: { src: string; alt: string; label: string }[]; caption?: string };

export interface BlogSection {
  id: string;
  heading: string; // empty string = no heading (intro)
  content: ContentBlock[];
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  summary: string[]; // bullet points shown at the top of the post
  author: { name: string; initials: string };
  date: string;
  readTime: string;
  excerpt: string; // shown on the index card
  coverImage?: string; // optional override for the featured image
  sections: BlogSection[];
}

export const posts: BlogPost[] = [
  {
    slug: "change-management-is-a-context-problem",
    title: "Change management is a context problem",
    subtitle:
      "The hardest part of an AI deployment is often work the organization has already done, captured in a form the next team cannot reach.",
    tags: ["Change Management", "Forward Deployed Engineering", "Context"],
    summary: [
      "Change management stays hard because deployment decisions, workarounds, and stakeholder context are rarely captured in a reusable form",
      "Scattered context makes an account difficult to reconstruct, while siloed deployments prevent teams from learning from one another",
      "Wikis and source retrieval still depend on manual upkeep or flatten decision chains into disconnected facts",
      "A self-updating, cross-deployment context layer lets every engagement build on the lessons of the last",
    ],
    author: { name: "Nikhil Pillai", initials: "NP" },
    date: "August 20, 2026",
    readTime: "6 min read",
    excerpt:
      "Change management is usually framed as a people problem. In practice, it stays hard because the reasoning, decisions, and workarounds from one deployment rarely reach the next.",
    coverImage: "/images/blog/change-management-context.png",
    sections: [
      {
        id: "intro",
        heading: "",
        content: [
          {
            type: "paragraph",
            text: "Someone posted two words on X last week: \"Change management.\" An FDE at OpenAI replied: \"probably the hardest part of the job.\"",
          },
          {
            type: "paragraph",
            text: "That's worth sitting with, not because deployment work being hard is surprising, but because of who was saying it. This is OpenAI: best models in the world, engineers who can build almost anything, and a customer who has already signed.",
          },
          {
            type: "paragraph",
            text: "Every technical advantage available, and the hardest part of the job is still getting a room full of people to change how they work. If that's the hardest part there, it isn't a problem you solve by hiring better.",
          },
        ],
      },
      {
        id: "people-problem",
        heading: "Everyone reads this as a people problem",
        content: [
          {
            type: "paragraph",
            text: "The default interpretation is that change management is about soft skills. Stakeholder wrangling, executive buy-in, the ops lead who quietly hates the rollout and slows it down for four weeks without ever saying no out loud.",
          },
          {
            type: "paragraph",
            text: "All of that is real, but it isn't why change management stays hard forever. It stays hard because almost none of it is written down anywhere the next deployment can reach.",
          },
          {
            type: "paragraph",
            text: "Think about what it actually consists of. Which process you're replacing and which one you're leaving alone. Who signed off, and what they were actually agreeing to versus what they thought they were agreeing to. The workaround you built in week three because the approval chain had an undocumented step.",
          },
          {
            type: "paragraph",
            text: "None of that is soft. It's specific, hard-won, expensive to acquire, and almost entirely undocumented.",
          },
        ],
      },
      {
        id: "fde-model-compounds",
        heading: "The whole premise of the FDE model is that this compounds",
        content: [
          {
            type: "paragraph",
            text: "The reason the model works is that the first deployment subsidizes the next one. You accept bad margins on customer one because what you learn gets absorbed into how you run customer two.",
          },
          {
            type: "paragraph",
            text: "The fifth should be faster than the second, and by the twentieth you're solving a harder class of problem for the same effort. Every deployment is supposed to leave the organization smarter than it found it.",
          },
          {
            type: "paragraph",
            text: "So deployment number nine should be meaningfully easier than number one. Ask anyone running an FDE team whether it actually is.",
          },
        ],
      },
      {
        id: "deployment-nine",
        heading: "In practice, number nine starts a lot like number one",
        content: [
          {
            type: "paragraph",
            text: "Two things break the loop, and most teams have both.",
          },
          {
            type: "paragraph",
            text: "The context is scattered. The reasoning behind a decision lives in a Slack thread, the requirement lives in a call recording nobody re-listened to, and the revised scope lives in a doc that stopped being true a month ago. The actual state of the engagement lives in one engineer's head, where it's genuinely current, which is exactly the problem.",
          },
          {
            type: "paragraph",
            text: "The deployments are siloed. Even when one team documents well, that record is scoped to that account. The FDE on a different customer, hitting a nearly identical approval-chain problem, has no way to know it was already solved.",
          },
          {
            type: "paragraph",
            text: "Scattered context means you can't reconstruct your own account. Siloed deployments mean you can't learn from anyone else's. Together they guarantee each engagement restarts from close to zero, on the customer's clock.",
          },
        ],
      },
      {
        id: "person-is-the-fix",
        heading: "Right now the fix is a person, and that's why it doesn't hold",
        content: [
          {
            type: "paragraph",
            text: "The standard answer is discipline. Write better docs, run retros, maintain the playbook.",
          },
          {
            type: "paragraph",
            text: "This fails for reasons that have nothing to do with whether the team is any good. Codifying a best practice means noticing that what just happened is generalizable, deciding it's worth writing up, writing it so a stranger can use it, then keeping it current as the product changes underneath it.",
          },
          {
            type: "paragraph",
            text: "All of that competes with the deployment they're currently being measured on, and nobody wins that tradeoff consistently. The FDE closest to the lesson has the least time to record it.",
          },
          {
            type: "paragraph",
            text: "What does get written has a short half-life anyway, because the author rotates to another account, the product ships three releases, and the doc silently becomes wrong. The result is a team that keeps re-solving problems it already solved.",
          },
        ],
      },
      {
        id: "querying-is-not-learning",
        heading: "Querying your sources is not the same as learning a process",
        content: [
          {
            type: "paragraph",
            text: "There are two versions of the obvious objection, and both deserve a straight answer.",
          },
          {
            type: "paragraph",
            text: "The first is the wiki. Confluence exists, Notion exists, and every one of these teams already has a knowledge base.",
          },
          {
            type: "paragraph",
            text: "The problem was never a missing container. It's that every container built so far assumes a human will keep it current, and a system that only knows what someone remembered to type into it will always lag the engagement.",
          },
          {
            type: "paragraph",
            text: "The second objection is newer: why not plug all the sources into a model and ask it questions? You can, and you'll get real answers back.",
          },
          {
            type: "paragraph",
            text: "But retrieval and deployment knowledge are different things. What an FDE carries isn't a set of facts to look up, it's a decision chain: why a scope got cut, what that traded away, which stakeholder it unblocked, and what that implies for the next customer with a similar org chart.",
          },
          {
            type: "paragraph",
            text: "That has to be learned, kept current, and traversed in order. Search across a pile of documents flattens it into disconnected answers that read plausible and miss the reasoning.",
          },
          {
            type: "paragraph",
            text: "A senior FDE at Ranger put it plainly when we described this to him: \"overloading an agent with sources\" doesn't reliably produce good output for the FDE job. The sources are necessary. They were never sufficient.",
          },
        ],
      },
      {
        id: "what-were-building",
        heading: "What we're building",
        content: [
          {
            type: "paragraph",
            text: "We built Nexus (trynexus.io) as a unified workspace for all of your deployments. It keeps each deployment's context up to date automatically, pulling from the tools the work already happens in, and pools best practices and decisions across deployments back into the core product.",
          },
          {
            type: "paragraph",
            text: "Two properties matter more than any feature. The context updates without anyone maintaining it, so it doesn't go stale the week after kickoff.",
          },
          {
            type: "paragraph",
            text: "And it's cross-deployment aware, so a pattern that worked on one customer is already known to the next. It isn't a place to store lessons, it's a layer that notices them and carries them forward.",
          },
        ],
      },
      {
        id: "back-to-the-start",
        heading: "Back to the thing that started this",
        content: [
          {
            type: "paragraph",
            text: "The OpenAI FDE who said change management is the hardest part of the job wasn't complaining about people being difficult. The hardest part of his job is work his organization has almost certainly done before, in a form he cannot reach.",
          },
          {
            type: "paragraph",
            text: "If that's true at OpenAI, it's true at every AI company staffing deployment teams right now.",
          },
          {
            type: "paragraph",
            text: "Deployments should compound. Right now they mostly just repeat.",
          },
        ],
      },
    ],
  },
  {
    slug: "fdes-connect-everything-problem-solved-not-quite",
    title: "FDEs Connect Everything. Problem Solved? Not Quite.",
    subtitle:
      "Connecting every source makes information searchable. It does not automatically give an FDE the isolated decision history and shared team learning a deployment needs.",
    tags: ["Forward Deployed Engineering", "Context", "Knowledge Graphs"],
    summary: [
      "An FDE needs a deployment's decision history, not merely access to all of its information",
      "One shared context pool creates overload by mixing facts from unrelated deployments",
      "Fully isolated workspaces prevent successful decisions and processes from compounding across the team",
      "The right architecture has two layers: one brain per deployment and a cross-deployment learning layer",
    ],
    author: { name: "Nikhil Pillai", initials: "NP" },
    date: "August 11, 2026",
    readTime: "5 min read",
    excerpt:
      "Connect Slack, Drive, contracts, meeting notes, and calls to an agent and answers arrive instantly. But an FDE's real context problem is not access to information. It is understanding a deployment's evolving decision history without losing what the whole team should learn.",
    coverImage: "/images/blog/fdes-connect-everything.png",
    sections: [
      {
        id: "intro",
        heading: "",
        content: [
          {
            type: "paragraph",
            text: "Connect all your tools to Claude. Slack, Drive, contracts, meeting notes, calls. Ask it a question and get an answer back instantly.",
          },
          { type: "paragraph", text: "Problem solved?" },
          {
            type: "paragraph",
            text: "Yes and no. As a team, you can query it, go back and forth, learn as you go.",
          },
          {
            type: "paragraph",
            text: "Even as a founder, I've done exactly this, connected everything I touch and just started asking it things constantly. It works. The first few times, it feels like magic.",
          },
          {
            type: "paragraph",
            text: "So when an FDE asks for the same setup, the instinct is to say yes immediately. FDEs complain about context constantly. FDE teams hate silos.",
          },
          {
            type: "paragraph",
            text: "Getting the right information in front of an FDE fast is often the difference between a deployment moving and a deployment stalling. Connect everything, and the problem should be solved.",
          },
          { type: "paragraph", text: "Real FDEs know it isn't that easy. Here's why." },
        ],
      },
      {
        id: "decision-history",
        heading: "What an FDE deals with isn't information, it's a decision history",
        content: [
          {
            type: "paragraph",
            text: "Give an agent access to your sources and it gets good at answering \"what.\" What's the contract value, what's the current SLA, what did the last call cover. That's a data analytics job: get the right numbers back, run semantic search, done.",
          },
          {
            type: "paragraph",
            text: "An FDE's job isn't a \"what\" job. The role is decision-making, customer support, and engineering rolled into one person, and none of those functions are separable from the deployment's history.",
          },
          {
            type: "paragraph",
            text: "What matters isn't just what the customer said, it's why they said it, what stage the deployment was in when they said it, and what changed as a result. Context here isn't a pile of documents. It's relational: one decision chained to the next as the deployment moves through its stages.",
          },
          {
            type: "paragraph",
            text: "Reasoning over that means inferring how something was decided, not retrieving that it was decided. That's not a search index. That's closer to a knowledge graph, a brain built for one deployment.",
          },
        ],
      },
      {
        id: "context-overload-fallacy",
        heading: "The context-overload fallacy",
        content: [
          {
            type: "paragraph",
            text: "So: connect every source, shared across the team, Slack, Drive, contracts, meeting notes, Linear, engineering decisions, all of it, and let the agent sort it out.",
          },
          {
            type: "paragraph",
            text: "This breaks in a specific way. Every deployment is its own product. Ask an agent a question about the customer you're running, and it will happily pull in a fact from a deployment you've never touched, because it has no way to tell that fact apart from one that actually matters to you.",
          },
          {
            type: "paragraph",
            text: "The agent isn't wrong, it's just talking too much. It can't infer relevance it was never taught to track.",
          },
          {
            type: "paragraph",
            text: "If every customer deserves one FDE, every deployment deserves its own brain, one that learns and tracks only what's relevant to that deployment. That way, the priorities and context that matter to the FDE running it are the only things that surface when they ask.",
          },
        ],
      },
      {
        id: "silo-fallacy",
        heading: "The silo fallacy",
        content: [
          {
            type: "paragraph",
            text: "The obvious fix is to swing the other way. Give every FDE their own workspace, keep it personal, keep each customer's context fully separate. Clean, contained, no overload.",
          },
          {
            type: "paragraph",
            text: "That's a great setup if you're running a consulting business. It's a bad one if you're running a product company.",
          },
          {
            type: "paragraph",
            text: "FDE teams live on the question of what's working and what should get pulled back into the core platform. Full isolation means every deployment lead is now personally responsible for documenting and broadcasting every lesson, by hand, or it dies with that deployment.",
          },
          {
            type: "paragraph",
            text: "Your best FDE should know how to approach a scenario without starting from zero just because a different FDE hit it first. Left fully siloed, you're not preventing overload, you're just guaranteeing your product never gets smarter.",
          },
        ],
      },
      {
        id: "two-layers",
        heading: "It's not one brain. It's two layers.",
        content: [
          {
            type: "paragraph",
            text: "The mistake is treating this as one context problem with one setting: connected or not, shared or not. It's two different layers that both need to be true at once.",
          },
          {
            type: "paragraph",
            text: "Each deployment needs an isolated, self-updating brain scoped to exactly what that customer and that FDE need, nothing pulled in from unrelated accounts. On top of that, a second layer has to be constantly learning across every deployment, compounding the best practices, skills, and process that make the next deployment faster than the last.",
          },
          {
            type: "paragraph",
            text: "Get both right and an FDE ships faster, gets time back to actually focus on the customer in front of them, and the product itself gets better with every deployment instead of staying flat.",
          },
          {
            type: "paragraph",
            text: "That's what we built Nexus to be: an AI context engine for the forward deployed motion, at the individual FDE level and the team level. Every deployment gets its own self-updating brain.",
          },
          {
            type: "paragraph",
            text: "Underneath that, Nexus is constantly learning across deployments to maintain a library of best practices, skills, and process the whole team compounds on. We can show it to you in fifteen minutes.",
          },
          { type: "paragraph", text: "Connect everything. Problem solved?" },
          {
            type: "paragraph",
            text: "Yes, if you scope it to what the deployment actually needs. No, if scoping it was never part of the plan.",
          },
        ],
      },
    ],
  },
  {
    slug: "context-is-changing-and-you-didnt-even-know",
    title: "Context Is Changing, and You Didn't Even Know About It",
    subtitle:
      "Forward deployed engineering has become a primary motion, but its hybrid context still lives in tools built for narrower, more stable jobs.",
    tags: ["Forward Deployed Engineering", "Deployment Context", "AI Engineering"],
    summary: [
      "FDE context spans customer history, code, decisions, and a deployment's constantly changing stage",
      "As FDE-to-deployment ratios grow, context becomes an operational bottleneck and deployments turn into silos",
      "A deployment brain needs both isolated per-customer memory and cross-deployment learning",
      "Purpose-built context lets AI remove glue work while FDEs retain the human judgment the role requires",
    ],
    author: { name: "Nikhil Pillai", initials: "NP" },
    date: "August 6, 2026",
    readTime: "7 min read",
    excerpt:
      "Forward deployed engineering is now a default motion, but its context is neither narrow nor stable. The role combines engineering, customer success, and decision-making, and the existing toolchain was never built to hold that shared picture together.",
    coverImage: "/images/blog/deployment-paradox.png",
    sections: [
      {
        id: "deployment-paradox",
        heading: "The Deployment Paradox",
        content: [
          {
            type: "paragraph",
            text: "A few years ago, forward deployed engineering was a Palantir thing. A weird, one-off model for one weird, one-off company.",
          },
          { type: "paragraph", text: "Now it's default." },
          {
            type: "paragraph",
            text: "Ask around and you'll find it everywhere: Decagon, Sierra, Cursor, Cognition, Ramp, Rippling, Anthropic, OpenAI. Not as an experiment. As the primary motion. Even teams that consider themselves product-led — one product, one roadmap, ship it to everyone — are running an FDE org underneath, because \"ship it to everyone\" still means someone has to make it work inside this specific customer's mess of systems and edge cases.",
          },
          {
            type: "paragraph",
            text: "That shift changes what \"context\" means for the person doing the job.",
          },
          {
            type: "paragraph",
            text: "A regular engineer's context is narrow and stable: the codebase, the ticket, maybe some product analytics. You can hold most of it in your head.",
          },
          {
            type: "paragraph",
            text: "An FDE's context looks nothing like that. It's a call from last Tuesday. A Slack thread with a customer's ops lead. A doc nobody updated in three weeks. A decision made in a meeting the FDE wasn't even in. The actual codebase. And underneath all of it, a constant read on where this customer is in their journey and what happens if you get that wrong.",
          },
          {
            type: "paragraph",
            text: "That's not an engineer's context. It's a hybrid: part engineer, part customer success, part decision-maker. A supersoldier role nobody built tools for, because the tools we have were built for the engineer version of the job, not this one.",
          },
        ],
      },
      {
        id: "rising-patchwork",
        heading: "A Rising Patchwork That Keeps Leaking",
        content: [
          {
            type: "paragraph",
            text: "Talked to a Series A/B team recently who are living this in real time.",
          },
          {
            type: "paragraph",
            text: "They started with pods, small groups assigned to a deployment. Then customer count grew, and pods gave way to 1:1: one FDE, one deployment, full context depth, no dilution.",
          },
          { type: "paragraph", text: "That worked too. For a while." },
          {
            type: "paragraph",
            text: "Now it's slipping. 1:1 is quietly becoming 1:2. Everyone can see where it's heading: 1:4, 1:5, because that's what happens when customer growth outpaces FDE hiring.",
          },
          {
            type: "paragraph",
            text: "Here's the part that doesn't show up on a headcount chart: every deployment has its own context, and that context isn't static. It grows. It moves through stages, discovery, build, launch, hypercare, each with a different shape of what matters right now. Multiply that by however many accounts one FDE is juggling, and you get an actual nightmare.",
          },
          {
            type: "paragraph",
            text: "What that pressure produces, eventually, is silos. The worst symptom of all of this.",
          },
          {
            type: "paragraph",
            text: "Each deployment turns into its own island, living in one person's head. Nobody else can reference it. Nobody can borrow a pattern that worked, or avoid one that's already failed somewhere else. Common complaints pile up across ten customers, unconnected, because there's no shared place for them to collide and become a signal.",
          },
          {
            type: "paragraph",
            text: "The team I talked to described exactly this: scrambling to extract what \"best practice\" even means across their deployments, mostly losing that fight. Not because anyone's bad at their job. Because nothing holds the shared picture together.",
          },
          {
            type: "paragraph",
            text: "Every deployment needs its own context. Every team also needs the context across all of them. Right now, almost nobody has both.",
          },
        ],
      },
      {
        id: "purpose-built-context",
        heading: "A New Age of AI & Engineering Demands Purpose-Built Context",
        content: [
          {
            type: "paragraph",
            text: "The FDE role doesn't map cleanly onto any existing job description, and that's the problem.",
          },
          {
            type: "paragraph",
            text: "They build and ship like engineers. They read and adapt to customer needs like an AE closing a deal. They carry customers through rough patches like a Customer Success rep who also writes code. One person, three jobs, stitched together by whatever context they can hold onto that week.",
          },
          {
            type: "paragraph",
            text: "Generic tooling was never going to serve this. A ticket system built for engineering doesn't know what a customer said on a call. A CRM built for sales doesn't know what broke in production last night.",
          },
          {
            type: "paragraph",
            text: "This is exactly where AI, coding agents especially, should be the unlock. An FDE with the right context behind them can hypercare a client in a way that used to take a whole team: catching drift before it becomes a fire, shipping a fix the moment it's needed, keeping five accounts moving without any of them feeling deprioritized.",
          },
          {
            type: "paragraph",
            text: "But that only happens if the context is actually there, shaped for this specific job. Not company-wide search. Something built around what an FDE's day actually looks like: customer, code, decision, repeat.",
          },
          {
            type: "paragraph",
            text: "Get that right, and the silos stop forming in the first place. The whole team gets faster, because the win on one deployment stops staying trapped in one person's head.",
          },
        ],
      },
      {
        id: "deployment-brain-vs-company-brain",
        heading: "A Deployment Brain vs. a Company Brain",
        content: [
          {
            type: "paragraph",
            text: "There's a version of this idea going around already: give the company a brain. One shared model of what the company knows, so people and agents stop losing context across Slack, docs, and meetings.",
          },
          { type: "paragraph", text: "That's a real problem. But it's not the same problem." },
          {
            type: "paragraph",
            text: "A company brain is internal, built to represent one organization to itself. A deployment brain has two very different sides at once.",
          },
          { type: "paragraph", text: "Picture it as left and right." },
          {
            type: "paragraph",
            text: "The left side is per-deployment. Each customer engagement gets its own graph, isolated and dense with everything unique to that relationship: their stack, their stakeholders, their history, their open threads. It's the FDE's working memory for that one account.",
          },
          {
            type: "paragraph",
            text: "The right side is cross-deployment. This is where the patterns live: what's worked before in a similar problem, what's failed, what three different customers all independently asked for last month. This side catches the exact thing that dies in silos, the win nobody else gets to use.",
          },
          {
            type: "paragraph",
            text: "And this isn't static. Each graph on the left keeps updating and growing as the deployment moves, through weeks, months, sometimes years. It's not a wiki someone has to remember to edit.",
          },
          {
            type: "paragraph",
            text: "The point isn't search. Search already exists. The point is a workspace built for how a deployment actually moves, so the whole motion, from first call to steady state, gets faster because the system underneath stopped leaking.",
          },
        ],
      },
      {
        id: "final-form",
        heading: "FDEs Reach Their Final Form",
        content: [
          {
            type: "paragraph",
            text: "Give an FDE a deployment brain, and something changes about what the role even is.",
          },
          {
            type: "paragraph",
            text: "Right now, a huge share of the job is glue work that has nothing to do with judgment: tracking what changed, remembering what was promised, chasing what stage a deployment is in, manually stitching together information that already exists somewhere.",
          },
          {
            type: "paragraph",
            text: "Take that away, and what's left is the part that can't be automated: understanding a customer's journey well enough to know what they need before they ask.",
          },
          {
            type: "paragraph",
            text: "With the right context and AI, an FDE stops manually tracking shifting priorities, the system tracks it. Stops chasing where a deployment stands, it's visible. Starts shipping fixes autonomously through coding agents instead of context-switching into \"now I write code\" mode. For product-led teams, the patterns that used to die in silos start flowing back into the core product on their own.",
          },
          {
            type: "paragraph",
            text: "On every front, context is what makes the motion self-managing. Not self-managing in the sense that FDEs disappear, the opposite. They become the piece of this that was never automatable: the human interface for the most heterogeneous, judgment-heavy part of the process. Every customer is different. Every deployment breaks differently. That part stays human.",
          },
          { type: "paragraph", text: "What stops being human is the burden around it. That's the whole point." },
        ],
      },
      {
        id: "why-we-built-nexus",
        heading: "Why We Built Nexus",
        content: [
          {
            type: "paragraph",
            text: "We pivoted Nexus to this less than two weeks ago, because we'd already been staring straight at it.",
          },
          {
            type: "paragraph",
            text: "For months before that, we were basically pseudo-forward-deployed ourselves, embedded with teams, watching how the work actually happened. And across every one of those teams, the loudest complaints came from the people doing agent deployments. They had almost no hours in a week to build anything for themselves. Stuck in the stone age, doing this high-leverage job with none of the tooling that should exist for it.",
          },
          { type: "paragraph", text: "So we built the thing that should exist." },
          {
            type: "paragraph",
            text: "We want to give every company an AI context engine and a unified workspace to manage their deployments and context, automatically. Every deployment gets a self-updating brain. Cross-deployment context surfaces the patterns that used to die in silos, so the whole team moves faster together instead of each person re-solving the same problem alone.",
          },
          {
            type: "paragraph",
            text: "The deployments update, grow, and learn as they go. Execution stops being about thinking and stitching context together by hand, and starts being about just doing the work.",
          },
          {
            type: "paragraph",
            text: "Managing this knowledge in someone's head, or scattered across a dozen tools, is a 2022 way of working. The FDE motion has outgrown it, and the timing for this shift is now. AI needs context to actually help these teams, not just generate more noise for them to manage.",
          },
          {
            type: "paragraph",
            text: "That's what Nexus gives them. Context, built for the way they actually work, so the forward deployed motion can move as fast as it's supposed to.",
          },
        ],
      },
    ],
  },
  {
    slug: "the-interesting-case-of-domain-specific-agents",
    title: "The Interesting Case of Domain-Specific Agents",
    subtitle:
      "Evals catch a lot. But there is a class of production failure they were never designed to see, especially when dealing with domain-specific AI agents.",
    tags: ["Finance", "Insurance", "Domain-Specific Agents"],
    summary: [
      "Domain-specific agents in finance and insurance face silent failure modes that standard evals are blind to",
      "The convenience hallucination occurs when agents distort real data to deliver confident answers rather than surface ambiguity",
      "Non-determinism means the exact same request can yield two different strategic narratives",
      "Complaint rates are notoriously low. Financial folks abandon threads rather than filing thumbs-down reviews",
      "Closing the loop requires real-time trace monitoring, implicit user signal detection, and customizable grading thresholds",
    ],
    author: { name: "Nikhil Pillai", initials: "NP" },
    date: "April 16, 2026",
    readTime: "6 min read",
    excerpt:
      "When an AI agent is deployed to handle specialized, high-stakes work in finance or insurance, the extent of silent failures in production is staggering, and standard evaluation frameworks are blind to them.",
    coverImage: "/images/insurance_finance.png",
    sections: [
      {
        id: "intro",
        heading: "",
        content: [
          {
            type: "paragraph",
            text: "Evals catch a lot. But there is a class of production failure they were never designed to see, especially when dealing with domain-specific AI agents.",
          },
          {
            type: "paragraph",
            text: "When an AI agent is deployed to handle specialized, high-stakes work in finance or insurance, deeply subjective tasks are being handed over to a probabilistic system. These are agents that finance teams rely on to query and interpret their financial data, that investment folks use to research and forecast, and that insurance teams depend on to process, compare, and reconcile.",
          },
          {
            type: "paragraph",
            text: "The stakes are high, the questions are complex, and the answers are expected to be authoritative. The extent of silent failures in production is staggering, and standard evaluation frameworks are blind to them.",
          },
        ],
      },
      {
        id: "convenience-hallucination",
        heading: "The Convenience Hallucination",
        content: [
          {
            type: "paragraph",
            text: "Domain-specific agents are under immense pressure to deliver. They are expected to synthesize across proprietary databases, live market feeds, or core systems of record, and return something structured and confident.",
          },
          {
            type: "paragraph",
            text: "The problem arises when the agent encounters ambiguity. Agents have gotten much better at handling data, but they still struggle with the friction of the unknown. Instead of returning an error or asking for clarification, the agent compromises:",
          },
          {
            type: "list",
            items: [
              "It takes intermediate data that is a borderline fit and massages the reasoning to justify its inclusion.",
              "It forces information to fit the required threshold because the system is mandated to deliver a completed result.",
              "It is not inventing a fake financial metric or a fake insurance policy. It is distorting the interpretation of real data to fulfill the task.",
            ],
          },
          {
            type: "paragraph",
            text: "This is the convenience hallucination.",
          },
          {
            type: "paragraph",
            text: "If a finance agent is asked why an expense line spiked last quarter and finds conflicting signals across its connected systems, it might quietly pick one source, ignore the discrepancy, and confidently generate a narrative explaining the variance. It is simply more convenient to deliver a seamless answer than to push back and ask the user to clarify.",
          },
          {
            type: "paragraph",
            text: "If an insurance agent encounters an ambiguous field during a comparison or intake, it might infer a value based on surrounding context rather than flagging it for review.",
          },
          {
            type: "paragraph",
            text: "The output looks like a valid, well-reasoned report or a perfectly formatted comparison. A single-turn grader scores it a pass. The failure is entirely silent, buried in the intermediate steps of the agent's decision trace.",
          },
        ],
      },
      {
        id: "context-non-determinism-trap",
        heading: "The Context and Non-Determinism Trap",
        content: [
          {
            type: "paragraph",
            text: "Another critical failure mode is the tension between live tool retrieval and the non-deterministic path the agent takes through it.",
          },
          {
            type: "paragraph",
            text: "The retrieval and extraction themselves are almost always solid. The concern is the decision making around what to pull fresh versus what the agent infers when context is missing.",
          },
          {
            type: "paragraph",
            text: "When a research agent is tasked with synthesizing market signals, management commentary, and macro conditions to produce a view on a company, it dynamically composes multiple models to tackle the task. Because the user's natural language request can come in thousands of variations, the path to the answer is highly non-deterministic.",
          },
          {
            type: "paragraph",
            text: "The exact same request can be submitted twice and produce two different strategic narratives, simply because the agent chose a slightly different path through its tools or weighted a different piece of context more heavily.",
          },
          {
            type: "paragraph",
            text: "This is why companies building domain-specific agents consistently run into internal hallucinations. The context gap between what the user actually meant and what the underlying systems provide forces the agent to make assumptions.",
          },
          {
            type: "paragraph",
            text: "The response is grammatically perfect, confidently delivered, and factually consistent with the agent's internal state, so standard evals miss the error entirely. The user acts on the flawed analysis, and no error trace is ever flagged.",
          },
        ],
      },
      {
        id: "why-evals-not-enough",
        heading: "Why Evals Are Not Enough",
        content: [
          {
            type: "paragraph",
            text: "Trace-level observability is not the problem. Most tooling is genuinely solid at storing traces. The problem is what teams can do with them.",
          },
          {
            type: "paragraph",
            text: "Unless someone is visually debugging in real time as it is happening, trace storage is practically useless for catching silent failures in multi-step reasoning. Teams are stuck being reactive, waiting on periodic eval runs to surface a pattern that has already hit users.",
          },
          {
            type: "paragraph",
            text: "Single-turn evals are often too late for domain-specific, user-facing agents. The complaint rate is notoriously low. Most don't leave detailed thumbs-down reviews when an agent misses the mark. They get frustrated, go back and forth trying to get the right answer, and maybe abandon the thread altogether.",
          },
          {
            type: "paragraph",
            text: "That distinction is everything, because:",
          },
          {
            type: "list",
            items: [
              "The more agentic the system becomes, the less a final-output eval actually covers. Evals might only cover 50% of the equation.",
              "Agents do not hallucinate because they are broken. They hallucinate because they are adapting to difficult task requirements under pressure to deliver.",
              "A 0-100 score means nothing without the ability to pattern match against the situation it happened in, or customize that grading for a specific definition of correct.",
            ],
          },
        ],
      },
      {
        id: "closing-the-loop",
        heading: "What Actually Closes the Loop",
        content: [
          {
            type: "paragraph",
            text: "Domain-specific agents are user-facing, which means accuracy is always cumbersome to judge. The greatest signal is whether the user is getting the value they expected, and that is hard to know from a single-turn eval or a rare thumbs down.",
          },
          {
            type: "paragraph",
            text: "There are two options:",
          },
          {
            type: "list",
            items: [
              "Wait for a user to report that the analysis was wrong, usually after they have already acted on it.",
              "Know the moment it happens and figure out why, so the issue gets caught before it spreads.",
            ],
          },
          {
            type: "paragraph",
            text: "The second option is what keeps customers. Pulling it off requires three things happening together:",
          },
          {
            type: "list",
            items: [
              "Watching the decisions the agent makes inside each trace as they happen. Not after the fact, not in a periodic eval run, but in real time, as the agent is reasoning through a financial question or an insurance comparison. Whether it is making a convenient assumption due to a context gap, following the wrong internal formula, or massaging intermediate data to reach a coherent answer, the failure lives in the trace, not the output.",
              "Picking up the implicit signals users give outside the output itself. A user who rephrases the same question three times, who keeps narrowing their request, or who abandons a thread and starts over is telling you something. These signals do not show up in a thumbs down. They show up in the pattern of how users interact with the agent across a session.",
              "Customization. Depending on the situation, a generic eval suite will not capture what \"correct\" means for a specific fund's investment thesis, or what \"complete\" means for a specific carrier's reconciliation format. Enterprise customers have their own thresholds, their own terminology, and their own expectations. Production monitoring has to be configurable at that level to be useful.",
            ],
          },
          {
            type: "paragraph",
            text: "Nexus automates all of this. Silent errors compound fast. A string of convenient but wrong answers leads directly to eroded trust, and by the time it shows up in an eval dashboard, it has already shown up in churn.",
          },
          {
            type: "paragraph",
            text: "The teams that get this right are the ones that stop waiting for the output to look wrong and start catching the compromises in live traffic, tied directly to whether the user got what they expected, before a complaint ever lands.",
          },
        ],
      },
    ],
  },
  {
    slug: "whats-missing-with-your-sourcing-agent",
    title: "What's Missing With Your Sourcing Agent",
    subtitle:
      "Evals catch a lot. But there is a class of production failure they were never designed to see, especially when dealing with AI agents to source.",
    tags: ["Evals", "Sourcing Agents", "AI Quality"],
    summary: [
      "Sourcing agents are under pressure to deliver and often compromise silently when perfect matches do not exist",
      "Agents distort the interpretation of real data to hit thresholds rather than return empty results",
      "Training-driven memory causes agents to bypass live tools and return stale information with full confidence",
      "Standard evals are blind to these failures because the output looks valid on the surface",
      "Catching silent failures requires watching agent decisions in real time, not waiting for periodic eval runs",
    ],
    author: { name: "Nikhil Pillai", initials: "NP" },
    date: "April 13, 2026",
    readTime: "5 min read",
    excerpt:
      "When you rely on an AI agent to source companies, founders, or prospects, the extent of silent failures in production is staggering — and your standard evaluation frameworks are blind to them.",
    coverImage: "/images/stressedaf.png",
    sections: [
      {
        id: "intro",
        heading: "",
        content: [
          {
            type: "paragraph",
            text: "Evals catch a lot. But there is a class of production failure they were never designed to see, especially when dealing with AI agents to source.",
          },
          {
            type: "paragraph",
            text: "When you rely on an AI agent to source companies, founders, or prospects based on natural language criteria, you are handing over a deeply subjective task to a probabilistic system. The extent of silent failures in production is staggering, and your standard evaluation frameworks are blind to them.",
          },
        ],
      },
      {
        id: "one-shot-compromise",
        heading: "The \"One-Shot\" Compromise",
        content: [
          {
            type: "paragraph",
            text: "Sourcing agents are under immense pressure to deliver. They are often designed as one-shot systems: they take a request upfront, orchestrate a complex web of searches across proprietary databases and live sources, and are expected to return a structured table of results.",
          },
          {
            type: "paragraph",
            text: "The problem arises when the perfect matches do not exist, or when the natural language interpretation of the ideal profile is slightly misaligned. Instead of returning an empty list or asking for clarification, the agent compromises:",
          },
          {
            type: "list",
            items: [
              "It takes a profile that is a borderline fit and massages the reasoning to justify its inclusion.",
              "It forces information to fit the required threshold because the system is mandated to deliver a set of profiles.",
              "It is not inventing a fake company. It is distorting the interpretation of a real one to fulfill the task.",
            ],
          },
          {
            type: "paragraph",
            text: "If a user asks for \"roofing companies with 10+ employees,\" and the agent can only find five, it might pull in a general contractor with 8 employees and internally justify it as a match. The output looks like a valid list of companies, so a single-turn grader scores it a pass. The failure is entirely silent.",
          },
          {
            type: "image-comparison",
            images: [
              {
                src: "/images/exa_agentic_search_1_same_prompt.png",
                alt: "Exa agentic search — same prompt, run 1",
                label: "Exa — Same Prompt, Run 1",
              },
              {
                src: "/images/exa_search_3_same_prompt.png",
                alt: "Exa agentic search — same prompt, run 3",
                label: "Exa — Same Prompt, Run 2",
              },
            ],
            caption: "The exact same prompt sent to Exa twice — the results are drastically different with almost no overlap between runs. This is not a bug. It is the system behaving as designed, and your evals will pass both.",
          },
        ],
      },
      {
        id: "training-driven-memory-trap",
        heading: "The Training-Driven Memory Trap",
        content: [
          {
            type: "paragraph",
            text: "Another critical failure mode is the tension between live tool retrieval and internal memory. The enrichment itself is almost always solid. The concern is the decision making around what makes sense to pull fresh versus what the agent thinks it already knows.",
          },
          {
            type: "paragraph",
            text: "Consider an agent tasked with pulling recent funding data for a specific startup. It has the tools to hit a live API, but because the company is well-known and heavily represented in training data, it bypasses the tool and confidently states the last round was a $20M Series A in 2022. The reality? They raised a Series B three months ago.",
          },
          {
            type: "paragraph",
            text: "This is why companies working in sourcing consistently run into agents referring back to older sources. The response is grammatically perfect, confidently delivered, and factually consistent with the agent's internal state, so standard evals miss the error entirely. The user accepts the stale data, makes an outreach or investment decision on it, and no error trace is ever flagged.",
          },
          {
            type: "image",
            src: "/images/memory_issue.png",
            alt: "Sourcing agent falling back to internal memory after a live tool failure",
            caption: "A sample flow showing what happens when a live data tool returns a faulty output or fails mid-run. Rather than surfacing an error, the agent silently falls back to its internal memory — returning stale information it was trained on as if it were current.",
          },
        ],
      },
      {
        id: "traces-and-evals-not-enough",
        heading: "Why Traces and Evals Are Not Enough",
        content: [
          {
            type: "paragraph",
            text: "Trace-level observability is not the problem. Most tooling is genuinely solid at storing traces. The problem is what you can do with them. Unless you want to visually debug in real time as it is happening, trace storage is practically useless for catching silent failures. You are stuck being reactive, waiting on periodic eval runs to surface a pattern that has already hit users.",
          },
          {
            type: "paragraph",
            text: "Even the biggest labs, including Anthropic, rely on live monitoring for exactly this reason. Evals only test for what users have already told you matters. Monitoring picks up, in production, what users are about to tell you matters.",
          },
          {
            type: "paragraph",
            text: "That distinction is everything in sourcing, because:",
          },
          {
            type: "list",
            items: [
              "You can submit the exact same request twice and get two different sets of profiles with minimal overlap.",
              "Agents hallucinate not because they are broken, but because they are adapting to difficult task requirements.",
              "Static graders are graders. A 0-100 score means nothing if you cannot pattern match against the situation it happened in to tell whether this is an actual failure or a one-off.",
            ],
          },
        ],
      },
      {
        id: "closing-the-loop",
        heading: "What Actually Closes the Loop",
        content: [
          {
            type: "paragraph",
            text: "Sourcing is user-facing, which means accuracy is always cumbersome to judge. The greatest signal is whether the user is getting what they expected, and that is hard to know from a single-turn eval.",
          },
          {
            type: "paragraph",
            text: "So you have two options:",
          },
          {
            type: "list",
            items: [
              "Wait for a user to tell you no.",
              "Know the moment it happens and figure out why, so you can nip it in the bud.",
            ],
          },
          {
            type: "paragraph",
            text: "The second option is what keeps customers happy. To pull it off, you need three things happening together:",
          },
          {
            type: "list",
            items: [
              "Watching the decisions the agent makes inside each trace as they happen: whether it is skipping a live tool for stale memory, stretching a borderline profile to hit a threshold, or producing reasoning that does not actually match the user's intent.",
              "Picking up the signals users give you outside the output itself: frustration in multi-turn sourcing, clarifications that keep repeating, rephrasings that mean the first answer missed.",
              "Tying both back to whether the situation is a real failure or a one-off, across parallel agents on a single query and across users running similar ones.",
            ],
          },
          {
            type: "paragraph",
            text: "Nexus automates all of this for you. Silent errors compound fast, and a string of misaligned profiles or stale data points leads directly to frustration and churn. The teams that win in AI sourcing are the ones that stop grading in isolation and start catching these compromises in live traffic, tied directly to whether the user got what they expected, before a complaint ever lands.",
          },
        ],
      },
    ],
  },
  {
    slug: "what-evals-miss-once-your-support-agent-goes-live",
    title: "What Evals Miss Once Your Support Agent Goes Live",
    subtitle:
      "Evals catch a lot. But there is a class of production failure they were never designed to see.",
    tags: ["Evals", "Support Agents", "AI Quality"],
    summary: [
      "Evals are essential pre-production, but they have real blind spots once you ship",
      "Single-turn LLM graders miss frustration that builds across multi-turn conversations",
      "78% of AI failures leave no user signal for evals to ever catch",
      "High deflection rate is not the same as high resolution rate",
      "The teams getting this right have an automated layer that catches failures, verifies them, and closes the loop without waiting for a complaint",
    ],
    author: { name: "Nikhil Pillai", initials: "NP" },
    date: "March 22, 2026",
    readTime: "5 min read",
    excerpt:
      "Eval frameworks are genuinely useful. But there is a class of production failure that even a well-configured eval setup does not reach — and it is quietly eroding your customer trust.",
    sections: [
      {
        id: "intro",
        heading: "",
        content: [
          {
            type: "paragraph",
            text: "There is a lot of content out there on building production-ready support agents. Not enough on what happens after they ship.",
          },
          {
            type: "paragraph",
            text: "Eval frameworks are the go-to solution for quality at scale, and genuinely useful ones. Writing grading criteria in plain language and running them across thousands of conversations catches things you would never find manually. But there is a class of production failure that even a well-configured eval setup does not reach.",
          },
        ],
      },
      {
        id: "single-turn-graders",
        heading: "Where single-turn graders fall short",
        content: [
          {
            type: "paragraph",
            text: "Most LLM-as-judge evaluators look at one turn at a time. What they miss is what builds across the full conversation.",
          },
          {
            type: "paragraph",
            text: "In multi-turn support interactions, failure rarely looks like one bad response. It looks like a user who rephrased the same question three times, got close-but-not-quite answers each time, and eventually gave up. The individual turns might all score fine. The conversation as a whole was a failure, and that kind of accumulated frustration is not something a single-turn grader picks up on.",
          },
        ],
      },
      {
        id: "failures-you-are-not-seeing",
        heading: "The failures you are not seeing",
        content: [
          {
            type: "paragraph",
            text: "A significant majority of AI failures produce no explicit user signal, and according to recent research that number sits around 78%. The user quietly accepts a wrong answer, abandons the thread, or moves on frustrated without saying anything. No complaint gets filed, no trace gets flagged for review.",
          },
          {
            type: "paragraph",
            text: "And it is not always subtle either. Consider an agent that tells a user their refund has been processed. The eval scores it a pass. No API was actually called. The customer is still waiting, and nothing in your observability stack knows it yet.",
          },
          {
            type: "paragraph",
            text: "Langfuse is great for trace-level visibility and running evaluators at scale, but it is built around the assumption that there is something to grade. When the failure is silent, nothing surfaces itself for review.",
          },
        ],
      },
      {
        id: "deflection-trap",
        heading: "The deflection trap",
        content: [
          {
            type: "paragraph",
            text: "Many teams use deflection rate as their north star. But deflection without resolution is not a win:",
          },
          {
            type: "list",
            items: [
              "A user who gets three unhelpful responses and quietly gives up is a deflection",
              "An agent that answers confidently but incorrectly and closes the ticket is a deflection",
              "A multi-turn conversation that loops until the user just leaves is a deflection",
            ],
          },
          {
            type: "paragraph",
            text: "If your eval layer grades coherence but not actual resolution, your dashboard can look healthy while the real experience quietly goes in the wrong direction. And waiting for users to tell you about it is not a reliable signal either. For every user who bothers to complain, there were likely several more who were just as frustrated and never said a word. Over time that silence does not mean satisfaction, it means eroding trust.",
          },
        ],
      },
      {
        id: "pressure-on-your-team",
        heading: "The pressure it puts on your team",
        content: [
          {
            type: "paragraph",
            text: "When production monitoring relies purely on Langfuse traces and periodic eval runs, the engineering team ends up in a reactive loop:",
          },
          {
            type: "list",
            items: [
              "A pattern eventually surfaces in the logs",
              "Someone has to manually dig through conversation traces to piece together what went wrong",
              "By then the issue has already touched a significant number of users",
            ],
          },
          {
            type: "paragraph",
            text: "That workflow made sense when humans were the primary operators flagging problems. With support agents running at volume, it does not scale.",
          },
        ],
      },
      {
        id: "closing-the-loop",
        heading: "Closing the loop properly",
        content: [
          {
            type: "paragraph",
            text: "The better approach is not just alerting on failures. An alert without context just creates more work for an already stretched team.",
          },
          {
            type: "paragraph",
            text: "What actually closes the loop is a layer that catches a potential failure, verifies it is high-fidelity and not noise, and surfaces the full context behind it so an engineer can jump straight into a fix without a scavenger hunt through traces. From there, automating the next step is possible — whether that is a direct fix or automatically updating the eval dataset with a real production instance that actually belongs there, so your evals get sharper over time rather than staying static.",
          },
          {
            type: "paragraph",
            text: "That is how the feedback loop between production and improvement actually closes. Failures get limited before they reach more users, evals improve from real signal rather than synthetic cases, and your engineering team spends less time being reactive and more time building.",
          },
          {
            type: "paragraph",
            text: "That is the mission behind what we are building with Nexus.",
          },
        ],
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
