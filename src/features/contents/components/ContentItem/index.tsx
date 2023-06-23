import React from 'react';

import { Content } from '../../types';
import ContentPrice from '../ContentPrice';

type ContentItemProps = { content: Content };

const ContentItem: React.FC<ContentItemProps> = ({ content }) => {
  return (
    <div>
      <div>
        <img
          src={content.imagePath}
          alt={`${content.imagePath} - by ${content.creator}`}
        />
      </div>
      <div>
        <div>{content.title}</div>
        <div>{content.creator}</div>
        <div>
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
