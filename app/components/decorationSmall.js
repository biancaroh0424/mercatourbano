import Image from 'next/image';
import stripeSmall from '/public/images/stripes_small.svg'

const DecorationSmall = () =>{
    return(
        <div className="decorationDiv">
      <Image src={stripeSmall} alt=""/>
      <Image src={stripeSmall} alt=""/>
      <Image src={stripeSmall} alt=""/>
      <Image src={stripeSmall} alt=""/>
    </div>
    )
}

export default DecorationSmall