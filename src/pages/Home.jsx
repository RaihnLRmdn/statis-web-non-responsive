import "../styles/Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Tutors from "../components/Tutors";
import Contact from "../components/Contact";
import { contactSection } from "../data/ContactSection";
import { partnersSection, partnersList } from "../data/PartnersSection";
import { homeSection } from "../data/HomeSection";
import { courseSection } from "../data/CourseSection";
import { TutorsSection, tutorsList } from "../data/TutorsSection";
import parse from "html-react-parser";
import Partners from "../components/Partners";
function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <section id="home">
          <img src={homeSection.Image} />
          <div className="kolom">{parse(homeSection.content)}</div>
        </section>

        <section id="courses">
          <div className="kolom">{parse(courseSection.content)}</div>
          <img src={courseSection.Image} />
        </section>
        <section id="tutors">
          <div className="tengah">
            <div className="kolom">{parse(TutorsSection.content)}</div>

            <Tutors tutorsList={tutorsList} />
          </div>
        </section>
        <section id="partners">
          <div className="tengah">
            <div className="kolom">{parse(partnersSection.content)}</div>
            <Partners partnersList={partnersList} />
          </div>
        </section>
      </div>
      <Contact contactSection={contactSection} />
      <Footer />
    </>
  );
}

export default Home;
