import Image from 'next/image';
import FooterLogo from '/public/images/footerLogo.svg';
import IgIcon from '/public/images/ig_icon.svg';
import TtIcon from '/public/images/tt_icon.svg';

const Footer = ()=>{
    return(
    <footer>
        <div className="footerFirst">
      <div className="footerLogoDiv">
      <Image src={FooterLogo} alt="Mercato Urbano"/>
      </div>
      <div className="footerDivEmpty"></div>
      </div>
      <div className="footerLinkGroup">
        <a className="footerLink" herf="/" target="_blank">Contatti</a>
        <a className="footerLink" herf="/" target="_blank">Servizio clienti</a>
      </div>
      <div className="footerSocialDiv">
        <div className="footerSocialGroup">
            <a href="/" target="_blank"><Image src={IgIcon} alt="mercato urbano instagram"/></a>
            <a href="/" target="_blank"><Image src={TtIcon} alt="mercato urbano tiktok"/></a>
        </div>
        <div className="footerDivEmpty"></div>
      </div>
    </footer>
    )
}

export default Footer