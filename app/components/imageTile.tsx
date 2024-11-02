import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";


type PhotoType = {
  src: string;
  height: number;
  width: number;
};

type ImageProps = {
  photos: PhotoType[]
  onClick?: () => void
}

const ImageTile: React.FC<ImageProps> = ( {photos, onClick} ) => {

  return (
    <RowsPhotoAlbum
      photos={photos}
      padding={10}
      onClick={onClick}
    />
  );
}
export default ImageTile;
