import { Footer, Header } from "@/components";
import FeaturedCard from "@/components/card";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <FeaturedCard />
      <Footer />
    </main>
  )
}
