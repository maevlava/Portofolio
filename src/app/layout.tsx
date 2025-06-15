import "./globals.css";
import {Raleway, Montserrat, Lato} from 'next/font/google'

const raleway = Raleway({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-raleway'
});

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
    variable: '--font-montserrat'
})

const lato = Lato({
    subsets: ['latin'],
    weight: ['100', '400', '700'],
    display: 'swap',
    variable: '--font-lato'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${montserrat.variable} ${lato.variable}`}>
      <body className={"bg-[#253345] font-lato"}>
        {children}
      </body>
    </html>
  );
}