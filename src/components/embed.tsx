import * as React from 'react';
import Iframe from 'react-iframe';

type Props = {
  url: string;
};

export const EmbedGif: React.FunctionComponent<Props> = props => {
  console.log('asd', props.url);
  return (
    <>
      <div style={{ width: '100%', height: 0, paddingBottom: '96%', position: 'relative' }}>
        <Iframe
          url={props.url}
          width="200px"
          height="200px"
          styles={{ position: 'absolute' }}
          frameBorder={0}
          className="giphy-embed"
          allowFullScreen
        />
      </div>
      <p>
        <a href={props.url}>via GIPHY</a>
      </p>
    </>
  );
};
