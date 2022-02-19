import { Modal } from '@material-ui/core';
import React, { useState } from 'react';
import { Photo1, Photo2, Photo3, Photo4, Photo5, Photo6 } from '../../../assets';

import { ArtThumbnail, UnderlineButton } from '../../../components';

export const HomeScreen: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [videoSource, setVideoSource] = useState<string>('');

  const quickViewClick = (url: string) => () => {
    setVideoSource(url);
    setModalOpen(true);
  }

  const renderButtons = (navigateTo: string) => (
    <>
      <div className="flex flex-1 h-full" />
      <div>
        <UnderlineButton className="text-white" onClick={quickViewClick(navigateTo)}>
          Quick View
        </UnderlineButton>
      </div>
    </>
  );
  return (
    <div className="flex flex-row flex-wrap align-top pt-24 justify-center">
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <div
          className="h-full w-full flex flex-1 justify-center"
          onClick={() => setModalOpen(false)}
        >
          <iframe
            className="justify-center self-center"
            width="1280"
            height="767"
            src={`${videoSource}?autoplay=1`}
            title="video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
      <ArtThumbnail backgroundImage={Photo1} summaryText="Philip van Heerden">
        {renderButtons('https://player.vimeo.com/video/332159815?h=e42a0d1227')}
      </ArtThumbnail>

      <ArtThumbnail backgroundImage={Photo2} summaryText="Yoga">
        {renderButtons('https://youtube.com/embed/rsuO6K2RUtI')}
      </ArtThumbnail>

      <ArtThumbnail backgroundImage={Photo3} summaryText="Nature">
        {renderButtons('no-more')}
      </ArtThumbnail>

      <ArtThumbnail backgroundImage={Photo4} summaryText="Lavender for them smells">
        {renderButtons('no-more')}
      </ArtThumbnail>

      <ArtThumbnail backgroundImage={Photo5} summaryText="Boats on a lake">
        {renderButtons('no-more')}
      </ArtThumbnail>

      <ArtThumbnail backgroundImage={Photo6} summaryText="Boats on a lake">
        {renderButtons('no-more')}
      </ArtThumbnail>

      <ArtThumbnail backgroundImage={Photo6} summaryText="Boats on a lake">
        {renderButtons('no-more')}
      </ArtThumbnail>

      <ArtThumbnail backgroundImage={Photo6} summaryText="Boats on a lake">
        {renderButtons('no-more')}
      </ArtThumbnail>

      <ArtThumbnail backgroundImage={Photo6} summaryText="Boats on a lake">
        {renderButtons('no-more')}
      </ArtThumbnail>
    </div>
  );
};
