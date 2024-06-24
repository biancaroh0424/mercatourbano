'use client'
import styles from './globals.css';
import Marquee from './components/marquee';
import HeroVideoSection from './components/heroVideoSection';
import DecorationBig from './components/decorationBig';
import FirstDescription from './components/firstDescription';
import StockModa from './components/stockModa'
import FirstSlider from './components/firstSlider';

export default function Home() {
  return (
    <main>
      <Marquee/>
      <HeroVideoSection/>
      <StockModa/>
    <DecorationBig/>
    <FirstDescription/>
    <FirstSlider/>
    <div className="secondDescription">
            <p className="smallBody">
            Con nuovi arrivi ogni giorno, troverai sempre qualcosa di fresco e alla moda<br/> per arricchire il tuo guardaroba. Vieni a scoprire le ultime tendenze e le<br/> migliori offerte nel nostro negozio: la moda a prezzi imbattibili ti aspetta!
            </p>
        </div>
    </main>
  );
}
