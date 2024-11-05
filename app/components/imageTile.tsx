import React, { useState } from 'react';
import PhotoModal from '../detail/page';

type PhotoType = {
  src: string;
};

type ImageProps = {
  data: PhotoType[]
}

const ImageTile: React.FC<ImageProps> = ( { data } ) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const handlePhotoClick = (src: string) => {
    setSelectedPhoto(src);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {data.map((item, index ) => (
          <div key={ index }
            className="aspect-w-16 aspect-h-9"
            onClick={() => handlePhotoClick(item.src)}
          >
            <img
              className="w-full h-full object-cover"
              src={item.src}
              alt="gallery-photo"
            />
          </div>
        ))}
        {selectedPhoto && (
          <PhotoModal
            src={selectedPhoto}
            isOpen={!!selectedPhoto}
            onClose={() => setSelectedPhoto(null)}
          />
        )}
      </div>
    </>
  );

}
export default ImageTile;
