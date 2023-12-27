'use client'

import React, { useEffect, useState } from "react";
import styles from '@/styles/cardinfoblock.module.css'

const Cardinfo = (props) => {
  const cardinfo = props.cardinfo;
  const cardfeatures = props.cardfeatures;
  const carddescriptions = props.carddescriptions;

  const scrollTo = (section) => {
    document
      .querySelector(section)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section>
      {windowWidth < 1048 ? (
        <div>
          {windowWidth < 664 ? (
            <div>
              <div className="cpblock">
                {/* Mobile */}
                <div className="cprighttop">
                  <div className="cprighttopleft">
                    <h2>{cardinfo.name}</h2>
                    <p>{cardinfo.place}</p>
                  </div>
                  <div className="cprighttopright">
                    <a
                      href={cardinfo.rating_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p>{cardinfo.rating}</p>
                      <img src='/images/Star.svg' alt="Star" />
                    </a>
                  </div>
                </div>
                <div className="cpblocktopl">
                  <img src={cardinfo.image_url} alt="cardicon" />
                </div>
                <div className="cpleftbuttons">
                  <a href={cardinfo.link} target="_blank" rel="noreferrer">
                    <button className="startbrowse">
                      Start browse{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="7"
                        height="8"
                        viewBox="0 0 7 8"
                        fill="none"
                      >
                        <path
                          d="M0.646447 6.39645C0.451184 6.59171 0.451184 6.90829 0.646447 7.10355C0.841709 7.29882 1.15829 7.29882 1.35355 7.10355L0.646447 6.39645ZM7 1.25C7 0.973858 6.77614 0.75 6.5 0.75H2C1.72386 0.75 1.5 0.973858 1.5 1.25C1.5 1.52614 1.72386 1.75 2 1.75H6V5.75C6 6.02614 6.22386 6.25 6.5 6.25C6.77614 6.25 7 6.02614 7 5.75V1.25ZM1.35355 7.10355L6.85355 1.60355L6.14645 0.896447L0.646447 6.39645L1.35355 7.10355Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </a>
                  <button
                    className="similar"
                    onClick={() => scrollTo("#categorycardlist")}
                  >
                    Similar
                  </button>
                </div>
                <div className="descblock">
                  {carddescriptions.map((carddes) => {
                    const text = carddes.paragraph;
                    const p = text.split("\n");
                    return (
                      <div>
                        <h2 key={carddes.heading}>{carddes.heading}</h2>
                        {p.map((paragraph, index) => {
                          return (
                            <div>
                              <p key={index}>{paragraph}</p>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
                <div className="featblock">
                  {cardfeatures.map((cardfeat) => {
                    return (
                      <div>
                        <h2 key={cardfeat.heading}>{cardfeat.heading}</h2>
                        <p key={cardfeat.text}>{cardfeat.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="cpblock">
                {/* TAblet */}
                <div className="cpblocktop">
                  <div className="cpblocktopl">
                    <img src={cardinfo.image_url} alt="cardicon" />
                  </div>
                  <div className="cpblocktopr">
                    <div className="cprighttop">
                      <div className="cprighttopleft">
                        <h2>{cardinfo.name}</h2>
                        <p>{cardinfo.place}</p>
                      </div>
                      <div className="cprighttopright">
                        <a
                          href={cardinfo.rating_url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <p>{cardinfo.rating}</p>
                          <img src='/images/Star.svg' alt="Star" />
                        </a>
                      </div>
                    </div>
                    <div className="cpleftbuttons">
                      <a href={cardinfo.link} target="_blank" rel="noreferrer">
                        <button className="startbrowse">
                          Start browse{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7"
                            height="8"
                            viewBox="0 0 7 8"
                            fill="none"
                          >
                            <path
                              d="M0.646447 6.39645C0.451184 6.59171 0.451184 6.90829 0.646447 7.10355C0.841709 7.29882 1.15829 7.29882 1.35355 7.10355L0.646447 6.39645ZM7 1.25C7 0.973858 6.77614 0.75 6.5 0.75H2C1.72386 0.75 1.5 0.973858 1.5 1.25C1.5 1.52614 1.72386 1.75 2 1.75H6V5.75C6 6.02614 6.22386 6.25 6.5 6.25C6.77614 6.25 7 6.02614 7 5.75V1.25ZM1.35355 7.10355L6.85355 1.60355L6.14645 0.896447L0.646447 6.39645L1.35355 7.10355Z"
                              fill="white"
                            />
                          </svg>
                        </button>
                      </a>
                      <button
                        className="similar"
                        onClick={() => scrollTo("#categorycardlist")}
                      >
                        Similar
                      </button>
                    </div>
                  </div>
                </div>
                <div className="cardblockbot">
                  <div className="descblock">
                    {carddescriptions.map((carddes) => {
                      const text = carddes.paragraph;
                      const p = text.split("\n");
                      return (
                        <div>
                          <h2 key={carddes.heading}>{carddes.heading}</h2>
                          {p.map((paragraph, index) => {
                            return (
                              <div>
                                <p key={index}>{paragraph}</p>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                  <div className="featblock">
                    {cardfeatures.map((cardfeat) => {
                      return (
                        <div>
                          <h2 key={cardfeat.heading}>{cardfeat.heading}</h2>
                          <p key={cardfeat.text}>{cardfeat.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className={styles.cpblock}>
            <div className={styles.cpleft}>
              <img src={cardinfo.image_url} alt="cardimg" />
              <div className={styles.cpleftbuttons}>
                <a href={cardinfo.link} target="_blank" rel="noreferrer">
                  <button className={styles.startbrowse}>
                    Start browse
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="8"
                      viewBox="0 0 7 8"
                      fill="none"
                    >
                      <path
                        d="M0.646447 6.39645C0.451184 6.59171 0.451184 6.90829 0.646447 7.10355C0.841709 7.29882 1.15829 7.29882 1.35355 7.10355L0.646447 6.39645ZM7 1.25C7 0.973858 6.77614 0.75 6.5 0.75H2C1.72386 0.75 1.5 0.973858 1.5 1.25C1.5 1.52614 1.72386 1.75 2 1.75H6V5.75C6 6.02614 6.22386 6.25 6.5 6.25C6.77614 6.25 7 6.02614 7 5.75V1.25ZM1.35355 7.10355L6.85355 1.60355L6.14645 0.896447L0.646447 6.39645L1.35355 7.10355Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </a>
                <button
                  className={styles.similar}
                  onClick={() => scrollTo("#categorycardlist")}
                >
                  Similar
                </button>
              </div>
            </div>
            <div className={styles.cpright}>
              <div className={styles.cprighttop}>
                <div className={styles.cprighttopleft}>
                  <h1>{cardinfo.name}</h1>
                  <p>{cardinfo.place}</p>
                </div>
                <div className={styles.cprighttopright}>
                  <a
                    href={cardinfo.rating_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p>{cardinfo.rating}</p>
                    <img src='/images/Star.svg' alt="Star" />
                  </a>
                </div>
              </div>
              <div className={styles.descblock}>
                {carddescriptions.map((carddes) => {
                  const text = carddes.paragraph;
                  const p = text.split("\n");
                  return (
                    <div>
                      <h2 key={carddes.heading}>{carddes.heading}</h2>
                      {p.map((paragraph, index) => {
                        return (
                          <div>
                            <p key={index}>{paragraph}</p>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
              <div className={styles.featblock}>
                {cardfeatures.map((cardfeat) => {
                  return (
                    <div>
                      <h2 key={cardfeat.heading}>{cardfeat.heading}</h2>
                      <p key={cardfeat.text}>{cardfeat.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cardinfo;