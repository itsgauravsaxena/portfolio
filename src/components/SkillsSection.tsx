// TODO: One by one fade in for each skill in the skill card
// TODO: Maybe refactor skill Card to be a grid rather than a flexbox (could facilitate the animation above)

import React, { ReactElement } from 'react';

import styles from '../styles/components/SkillsSection.module.scss';

import SectionHeader from './SectionHeader';

function SkillsSection(): ReactElement {
  return (
    <section className={styles.container}>
      <SectionHeader title="Tools & Skills" align="left" />

      <div className={styles.cardsGrid}>
        <div className={styles.cardWrapper}>
          <h1>Front-end</h1>
          <div className={styles.card}>
            <div
              className={styles.row}
              style={{ justifyContent: 'space-between', padding: '0 20px' }}
            >
              <div className={styles.item}>
                <img src="/icons/icon_html.svg" alt="html" />
                <h2>HTML</h2>
              </div>

              <div className={styles.item}>
                <img src="/icons/icon_css.svg" alt="css" />
                <h2>CSS</h2>
              </div>

              <div className={styles.item}>
                <img src="/icons/icon_sass.svg" alt="sass" />
                <h2>SASS</h2>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.item}>
                <img src="/icons/icon_javascript.svg" alt="javascript" />
                <h2>JavaScript</h2>
              </div>

              <div className={styles.item}>
                <img src="/icons/icon_typescript.svg" alt="typescript" />
                <h2>TypeScript</h2>
              </div>
            </div>

            <div
              className={styles.row}
              style={{ justifyContent: 'space-between', padding: '0 20px' }}
            >
              <div className={styles.item}>
                <img src="/icons/icon_react.svg" alt="react" />
                <h2>React</h2>
              </div>

              <div className={styles.item}>
                <img src="/icons/icon_redux.svg" alt="redux" />
                <h2>Redux</h2>
              </div>

              <div className={styles.item}>
                <img src="/icons/icon_next.svg" alt="next" />
                <h2>NextJS</h2>
              </div>

              <div className={styles.item}>
                <img src="/icons/icon_angular.svg" alt="next" />
                <h2>Angular</h2>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.item}>
                <img
                  src="/icons/icon_styledComponents.svg"
                  alt="styledComponents"
                />
                <h2>Styled Components</h2>
              </div>

              <div className={styles.item}>
                <img src="/icons/icon_framer.svg" alt="framer" />
                <h2>Framer Motion</h2>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cardWrapper}>
          <h1>Back-end</h1>
          <div className={styles.card}>
            <div className={styles.row}>
              <div className={styles.item}>
                <img src="/icons/icon_nodejs.svg" alt="nodejs" />
                <h2>NodeJs</h2>
              </div>

              <div className={styles.item}>
                <img src="/icons/icon_express.svg" alt="express" />
                <h2>Express</h2>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.item}>
                <img src="/icons/icon_javascript.svg" alt="javascript" />
                <h2>JavaScript</h2>
              </div>

              <div className={styles.item}>
                <img src="/icons/icon_typescript.svg" alt="typescript" />
                <h2>TypeScript</h2>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.item}>
                <img src="/icons/icon_mongodb.svg" alt="mongodb" />
                <h2>Java</h2>
              </div>

              <div className={styles.item}>
                <img src="/icons/icon_mongodb.svg" alt="mongodb" />
                <h2>OracleDB</h2>
              </div>

              <div className={styles.item}>
                <img src="/icons/icon_pug.svg" alt="pug" />
                <h2>Spring eureka</h2>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.item}>
                <img src="/icons/icon_jest.svg" alt="jest" />
                <h2>Kafka</h2>
              </div>
              <div className={styles.item}>
                <img src="/icons/icon_jest.svg" alt="jest" />
                <h2>Zuul gateway</h2>
              </div>
              <div className={styles.item}>
                <img src="/icons/icon_jest.svg" alt="jest" />
                <h2>AWS Cloud</h2>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cardWrapper}>
          <h1>Miscellaneous</h1>
          <div className={styles.card}>
            <div className={styles.row}>
              <div className={styles.item}>
                <img src="/icons/icon_git.svg" alt="git" />
                <h2>Git</h2>
              </div>

              <div className={styles.item}>
                <img src="/icons/icon_github.svg" alt="github" />
                <h2>GitHub</h2>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.item}>
                <img src="/icons/icon_firebase.svg" alt="firebase" />
                <h2>k8s</h2>
              </div>

              <div className={styles.item}>
                <img src="/icons/icon_webpack.svg" alt="webpack" />
                <h2>Docker</h2>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.item}>
                <img src="/icons/icon_figma.svg" alt="figma" />
                <h2>IntelliJ</h2>
              </div>

              <div className={styles.row}>
                <div className={styles.item}>
                  <img src="/icons/icon_linux.svg" alt="linux" />
                  <h2>Linux</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.languagesWrapper}>
        <span>
          I speak <strong>English</strong>{' '}
          <img src="/icons/united-kingdom.svg" alt="UK" />
        </span>
        <span>
          Jeg taler <strong>Dansk</strong>
          <img src="/icons/danish.svg" alt="BR" />
        </span>
        <span>
          मैं <strong>हिंदी</strong> बोल सकता हूँ
          <img src="/icons/india.svg" alt="FR" />
        </span>
      </div>
    </section>
  );
}

export default SkillsSection;
