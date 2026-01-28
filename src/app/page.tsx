import {
  Header,
  Hero,
  Problem,
  Solution,
  HowItWorks,
  Cta,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
