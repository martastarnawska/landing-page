import Image from "next/image";
import { useTranslation } from 'react-i18next';
import "./AboutUs.scss";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section className="aboutUs" id="AboutUs">
      <div className="aboutUs__heading">
        <h2 className="aboutUs__header">{t('aboutUs.title')}</h2>
        <span className="dot aboutUs__dot"></span>
      </div>
      <div className="card card--first">
        <p className="card__name">
          <span className="card__firstName">
            <span>Adrian</span>
            <span className="dot card__dot"></span>
          </span>
          <b className="card__lastName">Kubicki</b>
        </p>
        <div className="card__imageWrapper card__imageWrapper--first">
          <Image 
            src="/images/AdrianKubicki.jpeg"
            alt="portrait"
            className="card__portrait"
            width={400}
            height={600}
          />
        </div>
        <div className="card__bio">
          <p>{t('aboutUs.president.bio-part1')}</p>
          <p>{t('aboutUs.president.bio-part2')}</p>
          <p>{t('aboutUs.president.bio-part3')}</p>
          <p>{t('aboutUs.president.bio-part4')}</p>
          <p>{t('aboutUs.president.bio-part5')}</p>
        </div>
      </div>
      <div className="card card--reversed">
        <p className="card__name">
          <span className="card__firstName">
            <span>Stanisław</span>
            <span className="dot card__dot"></span>
          </span>
          <b className="card__lastName">Starnawski</b>
        </p>
        <div className="card__imageWrapper card__imageWrapper--second">
          <Image 
            src="/images/StanislawStarnawski.jpeg"
            alt="portrait"
            className="card__portrait"
            width={400}
            height={500}
          />
        </div>
        <div className="card__bio">
          <p>{t('aboutUs.vicePresident.bio-part1')}</p>
          <p>{t('aboutUs.vicePresident.bio-part2')}</p>
          <p>{t('aboutUs.vicePresident.bio-part3')}</p>
          <p>{t('aboutUs.vicePresident.bio-part4')}</p>
        </div>
      </div>
    </section>
  )
};

export default AboutUs
