import Image from "next/image";
import StripeBig from "/public/images/stripeBig.svg";

const DecorationBig = () =>{
    return (
        <div className="decorationDiv">
        <Image src={StripeBig} alt=""/>
        <Image src={StripeBig} alt=""/>
        <Image src={StripeBig} alt=""/>
        <Image src={StripeBig} alt=""/>
        </div>
    )
}

export default DecorationBig;