import type { ReactElement } from "react";

import type { BackgroundType, SplitScreenProps } from "./SplitScreen.types";

const BACKGROUND: Record<BackgroundType, string> = {
  black: "bg-eerie-black",
  blue: "bg-moonstone",
  green: "bg-dark-green",
  red: "bg-chocolate-cosmos",
};

const halfClassName = "relative flex justify-center items-center w-full min-w-full md:order-none md:h-screen";

/*
 * A full-height section in two halves: some content and a picture.
 * On small screens the halves are stacked, picture on top (unless showImage
 * is false or the content is a form).
 */
export const SplitScreen = ({
  id,
  imgBlock,
  contentBlock,
  isForm = false,
  showImage = true,
  order = "regular",
  background = "green",
}: SplitScreenProps): ReactElement => {
  const hasMobileImage = showImage && !isForm;

  const content = (
    <div className={`${halfClassName} order-2 min-h-screen`}>
      {contentBlock}
    </div>
  );

  const image = (
    <div className={`${halfClassName} order-1 ${hasMobileImage ? "h-[50vh]" : "hidden md:flex"}`}>
      {imgBlock}
    </div>
  );

  return (
    <section
      id={id}
      className={`flex flex-col flex-wrap justify-center items-center w-full h-full text-dark-green ${BACKGROUND[background]}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center content-center w-full h-full overflow-hidden">
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
