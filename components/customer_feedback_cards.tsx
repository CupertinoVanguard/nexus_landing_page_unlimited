'use client'
import Image from "next/image";

interface FeedbackCardProps {
  text: string;
  source: 'nexus';
  opacity?: number;
}

function FeedbackCard({ text, source, opacity = 1 }: FeedbackCardProps) {
  return (
    <div 
      className="relative bg-gray-800/50 border border-gray-700/50 rounded-lg p-2.5 backdrop-blur-sm h-full flex flex-col justify-between"
      style={{ opacity }}
    >
      <p className="text-xs text-gray-300 leading-relaxed mb-2 line-clamp-2 flex-1">{text}</p>
      <div className="flex items-center justify-end mt-auto">
        <div className="w-4 h-4 rounded overflow-hidden">
          <Image
            src="/images/nexuslogo (3) (1).png"
            alt="Nexus"
            width={16}
            height={16}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function CustomerFeedbackCards() {
  const feedbackSamples = [
    {
      text: "user rephrases or corrects the agent multiple times, indicating dissatisfaction with the response.",
      source: 'nexus' as const,
    },
    {
      text: "agents makes a choice without referencing available evidence, constraints, or stated goals.",
      source: 'nexus' as const,
    },
    {
      text: "agent answers from memory despite having an appropriate tool available to verify or retrieve the information.",
      source: 'nexus' as const,
    },
    {
      text: "assistant repeats the same reasoning or response pattern across turns without advancing toward completion.",
      source: 'nexus' as const,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-2 h-full relative">
      {feedbackSamples.map((feedback, index) => {
        // Top 2 cards fully visible, bottom 2 cards faded
        const opacity = index < 2 ? 1 : 0.3;
        return (
          <div key={index} className="h-full">
            <FeedbackCard
              text={feedback.text}
              source={feedback.source}
              opacity={opacity}
            />
          </div>
        );
      })}
    </div>
  );
}

