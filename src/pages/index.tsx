import CarouselSuperior from '@/components/CarouselSuperior/carousel'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import Menu from '@/components/testeMenu'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vip Materiais de Construção</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    <Header />
    <CarouselSuperior />
    <Menu />
    <Footer />
    </>
  )
}
