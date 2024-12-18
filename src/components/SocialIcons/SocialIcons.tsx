import { SocialIconsContainer } from "./SocialIcons.styles";
import { ReactComponent as Facebook } from "@assets/facebook.svg";
import { ReactComponent as Instagram } from "@assets/instagram.svg";
import { details } from "@constants/details";
// import { ReactComponent as TikTok } from "@assets/tiktok.svg";
// import { ReactComponent as Google } from "@assets/google.svg";
import Link from "next/link";

export const SocialIcons = (): JSX.Element => {
  return (
    <SocialIconsContainer>
      <Link target="_blank" rel="noopener noreferrer" href={details.facebook}>
        <Facebook />
      </Link>
      <Link target="_blank" rel="noopener noreferrer" href={details.instagram}>
        <Instagram />
      </Link>
      {/* <Link href="">
        <TikTok />
      </Link>
      <Link href="">
        <Google />
      </Link> */}
    </SocialIconsContainer>
  );
};
