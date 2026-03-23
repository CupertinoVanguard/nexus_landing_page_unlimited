export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

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
  sections: BlogSection[];
}

export const posts: BlogPost[] = [
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
