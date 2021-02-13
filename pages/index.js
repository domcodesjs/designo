import Head from 'next/head';
import Link from 'next/link';
import cn from 'classnames';
import styles from '../styles/Home.module.scss';

const Home = () => {
  return (
    <>
      <Head>
        <title>designo | Home</title>
      </Head>
      <main>
        <section className={styles['hero']}>
          <div className={styles['hero__img-circle']}></div>
          <div className={styles['hero__content']}>
            <h1 className={styles['hero__content__title']}>
              Award-winning custom designs and digital branding solutions
            </h1>
            <p className={styles['hero__content__text']}>
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <button className={styles['hero__content__btn']}>Learn more</button>
          </div>
          <img
            src='/static/home/desktop/image-hero-phone.png'
            className={styles['hero__img-phone']}
          />
        </section>

        {/* projects */}
        <section className={styles['projects']}>
          <div
            className={cn(
              styles['projects__item'],
              styles['projects__item__web']
            )}
          >
            <h2>Web Design</h2>
            <Link href='/'>
              <a>
                View Projects
                <img
                  src='/static/shared/desktop/icon-right-arrow.svg'
                  alt='Right Arrow'
                />
              </a>
            </Link>
          </div>
          <div
            className={cn(
              styles['projects__item'],
              styles['projects__item__app']
            )}
          >
            <h2>App Design</h2>
            <Link href='/'>
              <a>
                View Projects
                <img
                  src='/static/shared/desktop/icon-right-arrow.svg'
                  alt='Right Arrow'
                />
              </a>
            </Link>
          </div>
          <div
            className={cn(
              styles['projects__item'],
              styles['projects__item__graphic']
            )}
          >
            <h2>Graphic Design</h2>

            <Link href='/'>
              <a>
                View Projects
                <img
                  src='/static/shared/desktop/icon-right-arrow.svg'
                  alt='Right Arrow'
                />
              </a>
            </Link>
          </div>
        </section>
        <p>
          Passionate Each project starts with an in-depth brand research to
          ensure we only create products that serve a purpose. We merge art,
          design, and technology into exciting new solutions. Resourceful
          Everything that we do has a strategic purpose. We use an agile
          approach in all of our projects and value customer collaboration. It
          guarantees superior results that fulfill our clients’ needs. Friendly
          We are a group of enthusiastic folks who know how to put people first.
          Our success depends on our customers, and we strive to give them the
          best experience a company can provide. Let’s talk about your project
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow. Get in touch Our company
          Locations Contact Designo Central Office 3886 Wellington Street
          Toronto, Ontario M9C 3J5 Contact Us (Central Office) P : +1
          253-863-8967 M : contact@designo.co
        </p>
      </main>
    </>
  );
};

export default Home;
