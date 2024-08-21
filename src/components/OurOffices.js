import './OurOffices.scss';

const OurOffices = () => (
  <section className="offices" id="OurOffices">
    <div className="offices__heading">
      <span className="dot offices__dot"></span>
      <h2 className="offices__header">Our Offices</h2>
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
);

export default OurOffices;
