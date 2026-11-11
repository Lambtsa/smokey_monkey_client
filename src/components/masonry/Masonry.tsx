import Image, { type StaticImageData } from "next/image";
import type { ReactElement } from "react";

interface MasonryProps {
  images: {
    id: string;
    img: StaticImageData;
  }[];
}

export const Masonry = ({ images }: MasonryProps): ReactElement | null => {
  if (!images.length) {
    return null;
  }

  return (
    <div className="py-8 bg-night">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 max-w-[1180px] mx-auto p-4">
        {images.map((image) => (
          <Image
            key={image.id}
            alt=""
            src={image.img}
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover object-center h-full max-w-full"
          />
        ))}
      </div>
    </div>
  );
};
