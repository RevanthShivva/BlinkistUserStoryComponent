import React from 'react';

export interface IconProps {
  source?: string,
  
}

const BookDetailThumbnail = (props: IconProps) => {
  let {source} = props
  return (
    <div>
      <img src={source} alt="BlinkistThumbnail" ></img>
    </div>
  )
}

export default BookDetailThumbnail;