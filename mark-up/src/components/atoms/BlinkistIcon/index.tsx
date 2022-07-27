import React from 'react';

export interface IconProps {
  source?: string,
  style?: React.CSSProperties;
}

const BlinkistImage = (props: IconProps) => {
  let {source, style} = props
  return (
    <div>
      <img src={source} alt="BlinkistLogo"  style={style}></img>
    </div>
  )
}

export default BlinkistImage;
