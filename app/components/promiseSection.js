import Image from 'next/image';
import promiseImage from '/public/images/promise.svg';

const PromiseSection = () =>{
    return(
        <div className="promiseSection">
      <Image src={promiseImage} alt="Se lo trovi a meno, te lo rimborsiamo"/>
    </div>
    )
}


export default PromiseSection;