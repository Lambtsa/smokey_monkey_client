import Image, { type StaticImageData } from "next/image";
import type { ReactElement } from "react";

interface MasonryProps {
  images: {
    id: string;
    img: StaticImageData;
  }[];
}

/* A grid of photos, each in a thin brass frame */
export const Masonry = ({ images }: MasonryProps): ReactElement | null => {
  if (!images.length) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-cellar">
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6 max-w-[1280px] mx-auto px-6 md:px-10">
        {images.map((image) => (
          <li key={image.id} className="relative aspect-square p-2.5 border border-brass/40 bg-bottle">
            <span className="relative block size-full">
              <Image
                alt=""
                src={image.img}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-center"
              />
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
