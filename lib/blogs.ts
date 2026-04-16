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
