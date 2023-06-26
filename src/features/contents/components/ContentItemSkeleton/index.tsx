import React from 'react';

const ContentItemSkeleton: React.FC = () => {
  return (
    <div className="animate-skeleton">
      <div className="relative bg-zinc-700">
        <div style={{ paddingTop: '120%' }} />
      </div>
      <div className="mt-2 flex justify-between">
        <div className="flex-1">
          <div className="mb-1 h-4 w-4/5 bg-zinc-700" />
          <div className="h-4 w-3/5 bg-zinc-700" />
        </div>
        <div className="basis-20">
          <div className="h-6 w-full bg-zinc-700" />
        </div>
      </div>
    </div>
  );
};

export default ContentItemSkeleton;
