import React from "react";

interface BaseProps {
  photos: {
    id: string;
    url: string;
    isSelected: boolean;
    isFavorite: boolean;
  }[];
  allowEdit: boolean;
  isOpen: boolean;
  onClose: () => void;
}

interface NotAllowedEditProps {
  allowEdit: false;
}

interface AllowedEditProps {
  allowEdit: true;
  onToggleFavorite: (photoId: string) => void;
  onTogglePreSelect: (photoId: string) => void;
}

type CarouselProps = BaseProps & (NotAllowedEditProps | AllowedEditProps);

export const CarouselCP: React.FC<CarouselProps> = ({ isOpen, onClose }) => {
  return isOpen ? <h1 onClick={onClose}>Carousel</h1> : null;
};
