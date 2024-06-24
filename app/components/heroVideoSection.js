import Image from 'next/image';
import HeroVideo from '/public/images/Hero_video.gif';


const HeroVideoSection = ()=>{
    
    return(
        <div className="heroVideoDiv">
      <Image className="heroVideo" src={HeroVideo} alt="mercato urbano video stock da 5 soli euro"/>
      </div>
    )
}

export default HeroVideoSection;