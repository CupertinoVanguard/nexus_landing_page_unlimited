'use client'
import Image from "next/image";
import { RefreshCw, MousePointerClick } from "lucide-react";

interface IntegrationCardProps {
  toolName: string;
  image: string;
  rotation?: number;
}

export default function IntegrationCard({ toolName, image, rotation = 0 }: IntegrationCardProps) {
  return (
    <div className="relative" style={{ transform: `rotate(${rotation}deg)` }}>
      {/* <style dangerouslySetInnerHTML={{__html: `
        @keyframes cursorMove {
          0% {
            transform: translate(calc(100% - 24px), calc(100% + 20px));
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          20% {
            transform: translate(calc(100% - 24px), calc(100% + 10px));
          }
          40% {
            transform: translate(calc(50% - 12px), calc(50% - 12px));
          }
          48% {
            transform: translate(calc(50% - 12px), calc(50% - 12px)) scale(0.9);
          }
          52% {
            transform: translate(calc(50% - 12px), calc(50% - 12px)) scale(1);
          }
          100% {
            transform: translate(calc(50% - 12px), calc(50% - 12px));
            opacity: 1;
          }
        }
        @keyframes buttonClick {
          0%, 47% {
            transform: scale(1);
            background-color: rgb(255, 255, 255);
          }
          48% {
            transform: scale(0.98);
            background-color: rgb(240, 240, 240);
          }
          50% {
            transform: scale(0.97);
            background-color: rgb(235, 235, 235);
          }
          52% {
            transform: scale(1);
            background-color: rgb(255, 255, 255);
          }
          53%, 100% {
            transform: scale(1);
            background-color: rgb(255, 255, 255);
          }
        }
        .cursor-click-animation {
          animation: cursorMove 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          position: absolute;
          bottom: 0;
          right: 0;
        }
        .button-click-animation {
          animation: buttonClick 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}} /> */}
      <div className="rounded-lg border border-gray-700 shadow-lg hover:shadow-xl transition-shadow p-4 flex flex-col items-center justify-center gap-3 bg-gray-800/30 relative overflow-hidden">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-gray-700/50">
            <Image
              src={image}
              alt={toolName}
              width={40}
              height={40}
              className="rounded-lg"
            />
          </div>
          <h3 className="text-gray-200 font-medium text-base">{toolName}</h3>
        </div>
        <div className="relative w-full">
          <button className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-white/95 h-7 rounded-md w-full text-xs px-4 py-1 bg-white text-black">
            <RefreshCw className="h-3 w-3 mr-1" />
            Connect
          </button>
          {/* Animated Cursor - positioned relative to button container */}
          {/* <div className="cursor-click-animation pointer-events-none z-10">
            <MousePointerClick 
              className="text-green-500 drop-shadow-lg"
              size={24}
              style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.8))' }}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

