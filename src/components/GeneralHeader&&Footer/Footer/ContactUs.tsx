import {
  TiSocialYoutube,
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialFacebook,
} from "react-icons/ti";
import { TbBrandTiktok } from "react-icons/tb";

type Props = {
  url: string;
  icon: 'facebook'| 'twitter'| 'tiktok' | 'instagram' | 'youtube';
  color?: string;
}

const ContactUsParts = ({ url,color, icon }: Props) => {
  return (
    <>
      <span>
          <a href={url}  style={{ color: `${color}` }}>
            {icon === 'facebook' ? <TiSocialFacebook /> : null}
            {icon === 'twitter' ? <TiSocialTwitter /> : null}
            {icon === 'tiktok' ? <TbBrandTiktok /> : null}
            {icon === 'instagram' ? <TiSocialInstagram /> : null}
            {icon === 'youtube' ? <TiSocialYoutube /> : null}

          </a>
        </span>
    </>
  );
}


export default function ContactUs() {
  return (
    <>
      <div>Contact us:</div>
      <div className="Icons">
        <ContactUsParts url="https://www.facebook.com/"  icon="facebook"/>
        <ContactUsParts url="https://www.youtube.com/" color="red" icon="youtube"/>
        <ContactUsParts url="https://www.instagram.com/" color="pink" icon="instagram"/>
        <ContactUsParts url="https://www.tiktok.com/" color="black" icon="tiktok"/>
        <ContactUsParts url="https://twitter.com/" icon="twitter"/>
      </div>
    </>
  );
}
