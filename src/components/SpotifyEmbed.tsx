// SpotifyEmbed.tsx
import React from 'react';

const SpotifyEmbed: React.FC = () => {
  return (
    <iframe
      src="https://open.spotify.com/embed/track/7MJQ9Nfxzh8LPZ9e9u68Fq"
      width="300"
      height="80"
      frameBorder=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      style={{ borderRadius: '2px' }}
    ></iframe>
  );
};

export default SpotifyEmbed;

