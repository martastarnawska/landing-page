import Link from "next/link";
import { useTranslation } from 'react-i18next';
import "./OurServices.scss";

const OurServices = () => {
  const { t } = useTranslation();

  return (
    <section className="ourServices" id="OurServices">
      <div className="ourServices__heading">
        <span className="dot ourServices__dot"></span>
        <h2 className="ourServices__header">{t('ourServices.title')}</h2>
      </div>
      <div className="ourServices__content">
          <Link className="tile tile--first tile--special tile--large" href="/GeneralConsulting">{t('generalConsulting.title')}</Link>
          <Link className="tile" href="/StrategyConsulting">{t('strategyConsulting.title')}</Link>
          <Link className="tile" href="/BusinessAdvisory">{t('businessAdvisory.title')}</Link>
          <Link className="tile tile--unique tile--large" href="/PRMarketing">{t('PRMarketing.title')}</Link>
          <Link className="tile" href="/WorkshopsEvents">{t('workshopsEvents.title')}</Link>
          <Link className="tile" href="/ResearchInsights">{t('researchInsights.title')}</Link>
          <Link className="tile tile--long" href="/CommunityOutreach">{t('communityOutreach.title')}</Link>
          <Link className="tile" href="/GovernmentRelations">{t('governmentRelations.title')}</Link>
      </div>
    </section>
  )
}; 

export default OurServices;
