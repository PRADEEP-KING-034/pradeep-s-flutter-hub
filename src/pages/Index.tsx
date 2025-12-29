import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import DataAnnotation from "@/components/DataAnnotation";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Pradeep Sabarinathan | Flutter Developer & Data Annotation Analyst</title>
        <meta
          name="description"
          content="Flutter developer with hands-on internship experience building cross-platform mobile apps. Experienced in data annotation and AI training. Open to opportunities."
        />
        <meta
          name="keywords"
          content="Flutter Developer, Mobile App Developer, Data Annotation, AI Training, CVAT, Labelbox, Cross-platform Apps, Dart, Firebase"
        />
        <meta name="author" content="Pradeep Sabarinathan" />
        <link rel="canonical" href="https://pradeepsabarinathan.dev" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Pradeep Sabarinathan | Flutter Developer" />
        <meta
          property="og:description"
          content="Flutter developer passionate about building beautiful cross-platform mobile apps and AI-driven systems."
        />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pradeep Sabarinathan | Flutter Developer" />
        <meta
          name="twitter:description"
          content="Flutter developer passionate about building beautiful cross-platform mobile apps and AI-driven systems."
        />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <DataAnnotation />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
