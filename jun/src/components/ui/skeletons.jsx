export const ProductCardsSkeleton = () => {
    return (
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 sm:px-40 sm:max-w-8xl">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex animate-pulse flex-col rounded-md shadow py-4 max-w-80 w-72 h-[700px] items-center gap-6 pb-10"
          >
            <div className="w-72 h-96 bg-gray-300"></div>
            <div className="flex flex-col items-center gap-3 w-full px-4">
              <div className="h-6 bg-gray-300 w-3/4 rounded"></div>
              <div className="h-4 bg-gray-300 w-full rounded"></div>
              <div className="h-4 bg-gray-300 w-5/6 rounded"></div>
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="h-5 bg-gray-300 w-1/2 rounded"></div>
                <div className="h-4 bg-gray-300 w-1/3 rounded"></div>
                <div className="h-5 bg-gray-300 w-1/4 rounded"></div>
              </div>
              <div className="flex gap-2 mt-2">
                {[1, 2, 3, 4].map((dot) => (
                  <div key={dot} className="bg-gray-300 p-2 rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};