import Link from "next/link";
import "./OurServices.scss";

const OurServices = () => (
  <section className="ourServices" id="OurServices">
    <div className="ourServices__heading">
      <span className="dot ourServices__dot"></span>
      <h2 className="ourServices__header">Our Services</h2>
    </div>
    <div className="ourServices__content">
        <Link className="tile tile--first tile--special tile--large" href="/GeneralConsulting">General Consulting</Link>
        <Link className="tile" href="/StrategyConsulting">Strategy Consulting</Link>
        <Link className="tile" href="/BusinessAdvisory">Business Advisory</Link>
        <Link className="tile tile--unique tile--large" href="/PRConsulting">PR Consulting</Link>
        <Link className="tile" href="/WorkshopsTrainings">Workshops Trainings</Link>
        <Link className="tile" href="/ResearchInsights">Research Insights</Link>
        <Link className="tile tile--long" href="/Community Outreach">Community Outreach</Link>
        <Link className="tile" href="/Government Relations">Government Relations</Link>
    </div>
  </section>
); 

export default OurServices;
