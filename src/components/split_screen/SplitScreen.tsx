import type { ReactElement } from "react";

import type { BackgroundType, SplitScreenProps } from "./SplitScreen.types";

export const BACKGROUND: Record<BackgroundType, string> = {
  forest: "bg-forest",
  bottle: "bg-bottle",
  cellar: "bg-cellar",
  burgundy: "bg-burgundy",
};

/*
 * A section in two halves: some text and a picture (or a map).
 * On small screens the halves are stacked, picture on top unless showImage
 * is false.
 */
export const SplitScreen = ({
  id,
  imgBlock,
  contentBlock,
  showImage = true,
  order = "regular",
  background = "bottle",
}: SplitScreenProps): ReactElement => {
  const content = (
    <div className="relative flex justify-center items-center w-full order-2 md:order-none">
      {contentBlock}
    </div>
  );

  const image = (
    <div className={`relative w-full order-1 md:order-none md:h-auto md:min-h-[640px] ${showImage ? "h-[56vw] min-h-64" : "hidden md:block"}`}>
      {imgBlock}
    </div>
  );

  return (
    <section id={id} className={`w-full text-cream ${BACKGROUND[background]}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full overflow-hidden">
        {order === "reversed" ? (
          <>
            {image}
            {content}
          </>
        ) : (
          <>
            {content}
            {image}
          </>
        )}
      </div>
    </section>
  );
};
