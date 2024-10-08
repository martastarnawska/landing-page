import './OurOffices.scss';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

const OurOffices = () => {
  const { t } = useTranslation();
  const getLanguage = i18n.language;

  return (
    <section className="offices" id="OurOffices">
      <div className="offices__heading">
        <span className={`dot offices__dot ${i18n.language === 'pl' ? "offices__dot--polish" : ""}`}></span>
        <h2 className="offices__header">{t('ourOffices.title')}</h2>
      </div>
      <div className="offices__content">
        <div className="offices__us">
          <p>United States</p>
          <p>Empire State Building</p>
          <p>New York</p>
        </div>
        <div className='divider'>
          <p className='dot divider__dot'></p>
          <p className='dot dot--gray divider__dot'></p>
          <p className='dot dot--gray divider__dot'></p>
          <p className='dot dot--gray divider__dot'></p>
          <p className='dot dot--gray divider__dot'></p>
        </div>
        <div className="offices__pl">
          <p>Poland</p>
          <p>Warsaw Spire </p>
          <p>Warsaw</p>
        </div>
      </div>
    </section>
  )
};

export default OurOffices;
