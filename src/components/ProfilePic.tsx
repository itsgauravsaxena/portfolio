import React, { ReactElement } from 'react';
import styles from '../styles/components/ProfilePic.module.scss';

interface Props {}

function ProfilePic({}: Props): ReactElement {
  return (
    <div className={styles.container}>
      <img
        src="/images/gsa.jpg"
        className={`${styles.secondary} ${styles.left}`}
      />
      <img
        src="/images/gsa.jpg"
        className={`${styles.secondary} ${styles.right}`}
      />

      <img src="/images/gsa.jpg" alt="Small doodle of myself" />

      <img
        src="/images/gsa.png"
        alt="Alternative doodle of myself"
        className={styles.easterEgg}
      />
    </div>
  );
}

export default ProfilePic;
