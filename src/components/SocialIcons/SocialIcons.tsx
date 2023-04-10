import { SocialIconsContainer } from "./SocialIcons.styles";
import { ReactComponent as Facebook } from "@assets/facebook.svg";
import { ReactComponent as Instagram } from "@assets/instagram.svg";
// import { ReactComponent as TikTok } from "@assets/tiktok.svg";
// import { ReactComponent as Google } from "@assets/google.svg";
import Link from "next/link";

export const SocialIcons = (): JSX.Element => {
  return (
    <SocialIconsContainer>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/profile.php?id=100083411077689"
      >
        <Facebook />
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/lescopainsdemaui/"
      >
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
