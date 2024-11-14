import Image from 'next/image';
import Link from 'next/link';

export default function AboutHomeTwo() {
  return (
    <>
      <section
        id='why-choose-us'
        className='about-section style-v01 pb-60 mb-3 white-bg'>
        <div className='container'>
          <div className='row g-4 align-items-lg-center justify-content-center'>
            <div className='col-lg-6 col-md-6 col-sm-8 order-md-0 order-1'>
              <div
                className='about-thumv02 position-relative w-100 wow fadeInDown ratio ratio-1x1'
                data-wow-delay='.3s'>
                <Image
                  // src='/assets/img/about/choose-thumb2.png'
                  src='/Why us.jpg'
                  alt='img'
                  className='w-100 h-100 object-fit-cover'
                  width={649}
                  height={532}
                  priority
                />
              </div>
            </div>
            <div className='col-lg-6 col-md-6'>
              <div className='about-contentv1'>
                <div className='section-title mb-40'>
                  <h5 className='p1-clr wow fadeInLeft' data-wow-delay='0.4s'>
                    Why Chose Us
                  </h5>
                  <h2 className='wow fadeInDown' data-wow-delay='.3s'>
                    Farming with passion the feeding purpose
                  </h2>
                  {/* <p className='wow fadeInUp mb-lg-4 mb-3' data-wow-delay='.4s'>
                    Morem ipsum dolor sit amet consectetur. Amet lectus mi
                    ultricies dictum se facilisis sem. Imperdiet massa turpis
                    sit Lorem ipsum dolor sit amet consectetur. Amet lectus mi
                    ultricies dictum facilisis sem. Imperdiet
                  </p> */}
                  <ul className='about-list2'>
                    <li
                      className={
                        'd-flex flex-column justify-content-start align-items-start'
                      }>
                      <span className={'d-flex gap-1 align-items-center'}>
                        <i className='fa-solid fa-circle-check'></i>
                        <strong>Domain Expertise</strong>
                      </span>
                      <p>
                        Our seasoned agronomists blend current scientific
                        knowledge with on ground practical farming challenges to
                        deliver the best extensive and extension support
                      </p>
                    </li>
                    <li
                      className={
                        'd-flex flex-column justify-content-start align-items-start'
                      }>
                      <span className={'d-flex gap-1 align-items-center'}>
                        <i className='fa-solid fa-circle-check'></i>
                        <strong>Customized Farming Solutions</strong>
                      </span>
                      <p>
                        We understand that every farm is unique, and we design
                        solutions tailored to meet your specific unique farming
                        needs.
                      </p>
                    </li>
                    <li
                      className={
                        'd-flex flex-column justify-content-start align-items-start'
                      }>
                      <span className={'d-flex gap-1 align-items-center'}>
                        <i className='fa-solid fa-circle-check'></i>
                        <strong>Cutting-Edge Sustainable Technology</strong>
                      </span>
                      <p>
                        Use <strong> our sustainable biofarm solutions</strong>{' '}
                        to stay ahead in an unpredictable climate.
                      </p>
                    </li>
                    <li
                      className={
                        'd-flex flex-column justify-content-start align-items-start'
                      }>
                      <span className={'d-flex gap-1 align-items-center'}>
                        <i className='fa-solid fa-circle-check'></i>
                        <strong>Sustainability & ESG Focus</strong>
                      </span>
                      <p>
                        We’re committed to enabling sustainable farming
                        practices that enhance your farm’s productivity,
                        profitability and positive impact on health.
                      </p>
                    </li>
                  </ul>
                  <Link href='/#' className='cmn-btn primary-border'>
                    Read More
                    <i className='fa-solid fa-arrow-right p1-clr'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
