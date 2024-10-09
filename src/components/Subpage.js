import Navigation from "@/components/Navigation";
import "./Subpage.scss";

const Subpage = ({ title, children}) => (
  <section className="subpage">
    <div className="subpage__box">
      <Navigation />
      <div className="subpage__contentWrapper">
        <h1 className="subpage__title">{title}</h1>
        <div className="subpage__content">
          {children}
        </div>
      </div>
    </div>
  </section>
);

export default Subpage;
