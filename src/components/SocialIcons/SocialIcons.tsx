import { SocialIconsContainer } from "./SocialIcons.styles";
import { ReactComponent as Facebook } from "@assets/facebook.svg";
import { ReactComponent as Instagram } from "@assets/instagram.svg";
// import { ReactComponent as TikTok } from "@assets/tiktok.svg";
// import { ReactComponent as Google } from "@assets/google.svg";
import Link from "next/link";

export const SocialIcons = (): JSX.Element => {
  return (
    <SocialIconsContainer>
      <Link href="https://www.facebook.com/michelle.sanchezfuentes.56">
        <Facebook />
      </Link>
      <Link href="https://www.instagram.com/mi_cha_sas/">
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
