import {
  TiSocialYoutube,
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialFacebook,
} from "react-icons/ti";
import { TbBrandTiktok } from "react-icons/tb";

type FooterProps = {
  top?: string;
};
export default function Footer({ top }: FooterProps) {
  return (
    <footer>
      <div
        className="grid text-center"
        style={{
          marginTop: top,
        }}
      >
        <div className="g-col-6 g-col-md-4">
          <div>Contact us:</div>
          <div className="Icons">
            <span>
              <a href="https://www.facebook.com/">
                <TiSocialFacebook />
              </a>
            </span>
            <span>
              <a href="https://www.youtube.com/" style={{ color: "red" }}>
                <TiSocialYoutube />
              </a>
            </span>
            <span>
              <a href="https://www.instagram.com/" style={{ color: "pink" }}>
                <TiSocialInstagram />
              </a>
            </span>
            <span>
              <a href="https://www.tiktok.com/" style={{ color: "black" }}>
                <TbBrandTiktok />
              </a>
            </span>
            <span>
              <a href="https://twitter.com/">
                <TiSocialTwitter />
              </a>
            </span>
          </div>
        </div>
        <div className="g-col-6 g-col-md-4">
          <ul>
            <li>Customer Support:</li>
            <li>(XXX)-XXXX-XXXX</li>
          </ul>
        </div>
        <div className="g-col-6 g-col-md-4">
          <ul>
            <li>Email:</li>
            <li>page@gmail.com</li>
            <li>Location:</li>
            <li>Xa Avenida XX-XXXX Zone XX</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
