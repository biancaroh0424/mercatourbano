import "./globals.css";
import localFont from 'next/font/local'

const myFont = localFont(
  { src:'../public/font/IntegralCF-Regular.otf'
   }
)

export const metadata = {
  title: "Mercato Urbano",
  description: "Situato nel cuore pulsante dello shopping milanese, in Corso Buenos Aires, MERCATO URBANO offre un'ampia gamma di abbigliamento e accessori per uomo e donna a partire da soli 5€.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
