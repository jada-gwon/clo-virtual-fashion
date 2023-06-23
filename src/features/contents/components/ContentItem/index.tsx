import React from 'react';

import { Content } from '../../types';
import ContentPrice from '../ContentPrice';

type ContentItemProps = { content: Content };

const ContentItem: React.FC<ContentItemProps> = ({ content }) => {
  return (
    <div>
      <div>
        <img
          // TODO: 이미지가 안떠서 임시로 추가
          className="h-80"
          src={content.imagePath}
          alt={`${content.title} - by ${content.creator}`}
        />
      </div>
      <div className="mt-2 flex justify-between">
        <div>
          <div>{content.title}</div>
          <div>{content.creator}</div>
        </div>
        <div className="text-right text-base font-bold">
          <ContentPrice
            pricingOption={content.pricingOption}
            price={content.price}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentItem;
