import React, { useState } from 'react';



type PhotoType = {
  src: string;
};

type ImageProps = {
  data: PhotoType[]
}

const ImageTile: React.FC<ImageProps> = ( { data } ) => {



  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {data.map((item, index ) => (
          <div key={ index } className="aspect-w-16 aspect-h-9">
            <img
              className="w-full h-full object-cover"
              src={item.src}
              alt="gallery-photo"
            />
          </div>
        ))}
      </div>
    </>
  );

}
export default ImageTile;
