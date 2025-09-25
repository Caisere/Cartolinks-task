
import Header from './_components/header';
import ImageSlider from './_components/imageslider';
import Footer from './_components/footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
        <Header />
        <ImageSlider/>
        <Footer/>
    </main>
  );
}
