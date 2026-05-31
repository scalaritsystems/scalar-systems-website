import Header from "@/components/header";
import Footer from "@/components/footer";
import CtaBanner from "@/components/cta-banner";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="gradient-bg section">
          <div className="container-custom">
            <h1 className="text-5xl font-bold max-w-4xl">Technology Solutions That Scale With Your Business</h1>
            <p className="mt-6 text-xl text-slate-600 max-w-3xl">Based in Shrewsbury, Shropshire, Scalar Systems provides professional website development, managed IT support, infrastructure management, software development and business automation services for organisations across the UK.</p>
            <div className="mt-8 flex gap-4">
              <a href="/contact" className="btn-primary">Get a Quote</a>
              <a href="/services" className="btn-secondary">View Services</a>
            </div>
          </div>
        </section>
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
