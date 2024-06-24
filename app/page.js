'use client';
import Marquee from './components/marquee';
import HeroVideoSection from './components/heroVideoSection';
import DecorationBig from './components/decorationBig';
import FirstDescription from './components/firstDescription';
import StockModa from './components/stockModa'
import FirstSlider from './components/firstSlider';
import SecondDescription from './components/secondDescription';
import PromiseSection from './components/promiseSection';
import SecondSlider from './components/secondSlider';
import ThirdSlider from './components/thirdSlider';
import FourthSlider from './components/fourthSlider';
import DecorationSmall from './components/decorationSmall';
import Footer from './components/footer';

export default function Home() {
  return (
    <>
    <main>
      <Marquee/>
      <HeroVideoSection/>
      <StockModa/>
    <DecorationBig/>
    <FirstDescription/>
    <FirstSlider/>
    <SecondDescription/>
    <PromiseSection/>
    <SecondSlider/>
    <ThirdSlider/>
    <FourthSlider/>
    <DecorationSmall/>
    </main>
    <Footer/>
    </>
  );
}
