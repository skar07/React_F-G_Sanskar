import Head from 'next/head';
import styles from '../styles/Submit.module.css';
import 'remixicon/fonts/remixicon.css';

export default function(){
      return (
            <div className={styles.main}>
                  <span id={styles.icons}>
                  <i className="ri-checkbox-circle-fill"/>
                  </span>
                  <p id={styles.heading}>Thank you for providing the feedback</p>
                  <p id={styles.subtitle}>We will work towards improving your experience</p>
                  <button onClick={() => window.top.close()} id={styles.closeButton}>Close</button>
            </div>
      )
}