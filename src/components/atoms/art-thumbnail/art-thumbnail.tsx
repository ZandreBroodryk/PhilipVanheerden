import React, { useState } from 'react';

type ArtThumbnailType = {
  opacity?: number;
  backgroundImage: string;
  summaryText: string;
};

export const ArtThumbnail: React.FC<ArtThumbnailType> = ({
  backgroundImage,
  summaryText,
  opacity = 50,
  children,
}) => {
  const [showChildren, setShowChildren] = useState<boolean>(false);

  return (
    <div
      className="relative m-2 h-96"
      onMouseEnter={() => setShowChildren(true)}
      onMouseLeave={() => setShowChildren(false)}
    >
      <img src={backgroundImage} className="h-96" />
      <div className="absolute top-0 left-0 bottom-0 right-0">
        <p className="text-white text-3xl">{summaryText}</p>
      </div>
      <div className="absolute h-full top-0 left-0 bottom-0 right-0">
        {showChildren && (
          <div className="relative flex flex-col h-full bg-thumbnail-color-gradient pb-7">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
