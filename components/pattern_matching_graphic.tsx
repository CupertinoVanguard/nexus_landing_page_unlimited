'use client'

export default function PatternMatchingGraphic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-1">
      {/* Desktop/Tablet: Horizontal layout (cluster left, arrow, issue right) */}
      <div className="hidden sm:flex items-center justify-between w-full h-full">
        {/* Tight overlapping cluster of cards on left */}
        <div className="relative w-[50%] h-full flex items-center justify-center">
          <div className="relative w-40 h-48">
            {/* Tickets Cards - overlapping with logs (lower z-index) */}
            <div className="absolute top-2 left-16 z-[1]">
              <div className="w-20 bg-gray-800/50 border border-gray-700/50 rounded-lg p-2.5 backdrop-blur-sm flex flex-col justify-between">
                <p className="text-xs text-gray-200 font-medium mb-1">Tickets</p>
                <div className="flex items-center justify-end mt-auto">
                  <div className="w-4 h-4 rounded bg-gray-600/50"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-14 left-20 z-[13]">
              <div className="w-20 bg-gray-800/50 border border-gray-700/50 rounded-lg p-2.5 backdrop-blur-sm flex flex-col justify-between shadow-lg">
                <p className="text-xs text-gray-200 font-medium mb-1">Tickets</p>
                <div className="flex items-center justify-end mt-auto">
                  <div className="w-4 h-4 rounded bg-gray-600/50"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-28 left-18 z-[3]">
              <div className="w-20 bg-gray-800/50 border border-gray-700/50 rounded-lg p-2.5 backdrop-blur-sm flex flex-col justify-between">
                <p className="text-xs text-gray-200 font-medium mb-1">Tickets</p>
                <div className="flex items-center justify-end mt-auto">
                  <div className="w-4 h-4 rounded bg-gray-600/50"></div>
                </div>
              </div>
            </div>
            {/* Logs Cards - overlapping cluster (higher z-index) */}
            <div className="absolute top-0 left-0 z-[7]">
              <div className="w-20 bg-gray-800/50 border border-gray-700/50 rounded-lg p-2.5 backdrop-blur-sm flex flex-col justify-between">
                <p className="text-xs text-gray-200 font-medium mb-1">Logs</p>
                <div className="flex items-center justify-end mt-auto">
                  <div className="w-4 h-4 rounded bg-gray-600/50"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-4 left-8 z-[8]">
              <div className="w-20 bg-gray-800/50 border border-gray-700/50 rounded-lg p-2.5 backdrop-blur-sm flex flex-col justify-between">
                <p className="text-xs text-gray-200 font-medium mb-1">Logs</p>
                <div className="flex items-center justify-end mt-auto">
                  <div className="w-4 h-4 rounded bg-gray-600/50"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-10 left-2 z-[9]">
              <div className="w-20 bg-gray-800/50 border border-gray-700/50 rounded-lg p-2.5 backdrop-blur-sm flex flex-col justify-between">
                <p className="text-xs text-gray-200 font-medium mb-1">Logs</p>
                <div className="flex items-center justify-end mt-auto">
                  <div className="w-4 h-4 rounded bg-gray-600/50"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-16 left-10 z-[10]">
              <div className="w-20 bg-gray-800/50 border border-gray-700/50 rounded-lg p-2.5 backdrop-blur-sm flex flex-col justify-between">
                <p className="text-xs text-gray-200 font-medium mb-1">Logs</p>
                <div className="flex items-center justify-end mt-auto">
                  <div className="w-4 h-4 rounded bg-gray-600/50"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-24 left-4 z-[11]">
              <div className="w-20 bg-gray-800/50 border border-gray-700/50 rounded-lg p-2.5 backdrop-blur-sm flex flex-col justify-between">
                <p className="text-xs text-gray-200 font-medium mb-1">Logs</p>
                <div className="flex items-center justify-end mt-auto">
                  <div className="w-4 h-4 rounded bg-gray-600/50"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-32 left-12 z-[12]">
              <div className="w-20 bg-gray-800/50 border border-gray-700/50 rounded-lg p-2.5 backdrop-blur-sm flex flex-col justify-between">
                <p className="text-xs text-gray-200 font-medium mb-1">Logs</p>
                <div className="flex items-center justify-end mt-auto">
                  <div className="w-4 h-4 rounded bg-gray-600/50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow pointing right - pure white */}
        <div className="flex items-center justify-center w-[15%]">
          <div className="flex items-center">
            <div className="w-20 h-0.5 bg-white"></div>
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-white"></div>
          </div>
        </div>

        {/* Issue card on right */}
        <div className="w-[25%] flex items-center justify-center">
          <div className="w-20 bg-gray-800/50 border border-gray-700/50 rounded-lg p-2.5 backdrop-blur-sm shadow-lg flex flex-col justify-between">
            <p className="text-xs text-gray-200 font-medium mb-1">Issue</p>
            <div className="flex items-center justify-end mt-auto">
              <div className="w-4 h-4 rounded bg-red-500/30 border border-red-400/40"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Vertical layout (cluster top, arrow down, issue bottom) */}
      <div className="flex sm:hidden flex-col items-center justify-between w-full h-full py-2">
        {/* Tight overlapping cluster of cards on top */}
        <div className="relative h-[55%] flex items-center justify-center">
          <div className="relative w-32 h-36">
            {/* Tickets Cards - overlapping with logs (lower z-index) */}
            <div className="absolute top-1 left-12 z-[1]">
              <div className="w-16 bg-gray-800/50 border border-gray-700/50 rounded-lg p-2 backdrop-blur-sm flex flex-col justify-between">
                <p className="text-[10px] text-gray-200 font-medium mb-1">Tickets</p>
                <div className="flex items-center justify-end mt-auto">
                  <div className="w-3 h-3 rounded bg-gray-600/50"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-11 left-14 z-[13]">
              <div className="w-16 bg-gray-800/50 border border-gray-700/50 rounded-lg p-2 backdrop-blur-sm flex flex-col justify-between shadow-lg">
                <p className="text-[10px] text-gray-200 font-medium mb-1">Tickets</p>
                <div className="flex items-center justify-end mt-auto">
                  <div className="w-3 h-3 rounded bg-gray-600/50"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-22 left-16 z-[3]">
              <div className="w-16 bg-gray-800/50 border border-gray-700/50 rounded-lg p-2 backdrop-blur-sm flex flex-col justify-between">
                <p className="text-[10px] text-gray-200 font-medium mb-1">Tickets</p>
                <div className="flex items-center justify-end mt-auto">
                  <div className="w-3 h-3 rounded bg-gray-600/50"></div>
                </div>
              </div>
            </div>
            {/* Logs Cards - overlapping cluster (higher z-index) */}
            <div className="absolute top-0 left-0 z-[7]">
              <div className="w-16 bg-gray-800/50 border border-gray-700/50 rounded-lg p-2 backdrop-blur-sm flex flex-col justify-between">
                <p className="text-[10px] text-gray-200 font-medium mb-1">Logs</p>
                <div className="flex items-center justify-end mt-auto">
                  <div className="w-3 h-3 rounded bg-gray-600/50"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-3 left-6 z-[8]">
              <div className="w-16 bg-gray-800/50 border border-gray-700/50 rounded-lg p-2 backdrop-blur-sm flex flex-col justify-between">
                <p className="text-[10px] text-gray-200 font-medium mb-1">Logs</p>
                <div className="flex items-center justify-end mt-auto">
                  <div className="w-3 h-3 rounded bg-gray-600/50"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-8 left-1 z-[9]">
              <div className="w-16 bg-gray-800/50 border border-gray-700/50 rounded-lg p-2 backdrop-blur-sm flex flex-col justify-between">
                <p className="text-[10px] text-gray-200 font-medium mb-1">Logs</p>
                <div className="flex items-center justify-end mt-auto">
                  <div className="w-3 h-3 rounded bg-gray-600/50"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-14 left-8 z-[10]">
              <div className="w-16 bg-gray-800/50 border border-gray-700/50 rounded-lg p-2 backdrop-blur-sm flex flex-col justify-between">
                <p className="text-[10px] text-gray-200 font-medium mb-1">Logs</p>
                <div className="flex items-center justify-end mt-auto">
                  <div className="w-3 h-3 rounded bg-gray-600/50"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-20 left-3 z-[11]">
              <div className="w-16 bg-gray-800/50 border border-gray-700/50 rounded-lg p-2 backdrop-blur-sm flex flex-col justify-between">
                <p className="text-[10px] text-gray-200 font-medium mb-1">Logs</p>
                <div className="flex items-center justify-end mt-auto">
                  <div className="w-3 h-3 rounded bg-gray-600/50"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-26 left-10 z-[12]">
              <div className="w-16 bg-gray-800/50 border border-gray-700/50 rounded-lg p-2 backdrop-blur-sm flex flex-col justify-between">
                <p className="text-[10px] text-gray-200 font-medium mb-1">Logs</p>
                <div className="flex items-center justify-end mt-auto">
                  <div className="w-3 h-3 rounded bg-gray-600/50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow pointing down - pure white */}
        <div className="flex flex-col items-center justify-center h-[15%]">
          <div className="w-0.5 h-6 bg-white"></div>
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-white"></div>
        </div>

        {/* Issue card on bottom */}
        <div className="h-[25%] flex items-center justify-center">
          <div className="w-16 bg-gray-800/50 border border-gray-700/50 rounded-lg p-2 backdrop-blur-sm shadow-lg flex flex-col justify-between">
            <p className="text-[10px] text-gray-200 font-medium mb-1">Issue</p>
            <div className="flex items-center justify-end mt-auto">
              <div className="w-3 h-3 rounded bg-red-500/30 border border-red-400/40"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
