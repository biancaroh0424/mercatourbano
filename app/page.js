'use client'
import Marquee from './components/marquee';
import HeroVideoSection from './components/heroVideoSection';
import DecorationBig from './components/decorationBig';
import FirstDescription from './components/firstDescription';
import StockModa from './components/stockModa'
import FirstSlider from './components/firstSlider';
import SecondDescription from './components/secondDescription';
export default function Home() {
  return (
    <main>
      <Marquee/>
      <HeroVideoSection/>
      <StockModa/>
    <DecorationBig/>
    <FirstDescription/>
    <FirstSlider/>
    <SecondDescription/>
    </main>
  );
}
