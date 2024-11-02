import React from 'react';

type PhotoModalProps = {
  src: string;
  isOpen: boolean;
  onClose: () => void;
};

const PhotoModal: React.FC<PhotoModalProps> = ({ src, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="relative">
        <img src={src} alt="Selected photo" className="max-w-full max-h-full rounded-lg" />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-white rounded-full p-2 text-black hover:bg-gray-200"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default PhotoModal;
