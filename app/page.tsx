import Header from "./_components/header";
import ImageSlider from "./_components/imageslider";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between px-6 py-2">
      <Header />
      <ImageSlider />
      <Footer />
    </main>
  );
}
