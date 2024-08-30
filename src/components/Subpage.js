import Head from "next/head";
import Navigation from "@/components/Navigation";
import "./Subpage.scss";

const Subpage = ({ title, children}) => (
  <>
    <Head>
      <link rel="stylesheet" href="https://use.typekit.net/tef7uvt.css"/> 
    </Head>
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
  </>
);

export default Subpage;
