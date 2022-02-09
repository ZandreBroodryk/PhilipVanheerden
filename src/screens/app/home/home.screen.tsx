import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Icon } from '../../../assets';

import { userSelector } from '../../../reducers';

export const HomeScreen: React.FC = () => {
  const { user } = useSelector(userSelector);
  const [imageSource, setImageSource] = useState<string>(
    Icon,
  );

  return (
    <div className="p-5">
      <p>Welcome, {user.email}</p>
      <img
        src={imageSource}
        onMouseEnter={() => setImageSource('https://media.giphy.com/media/cvbGraL8NJJZu/giphy.gif')}
        onMouseLeave={() => setImageSource(Icon)}
      />
    </div>
  );
};
