// Importamos los estilos y las fuentes
import '@/styles/globals.css';
import Head from 'next/head';
import { Montserrat } from 'next/font/google';
import NavBar from './components/NavBar';
import Logo from './components/Logo';
import Footer from './components/Footer';

// Configuración de las fuentes
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

// Definición del componente App
export default function App({ Component, pageProps }) {
  // Devolvemos el contenido principal del componente
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>

        <NavBar/>
        <Component {...pageProps} />
        <Footer/>
      </main>
    </>
  );
}
