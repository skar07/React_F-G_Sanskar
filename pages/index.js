import Head from 'next/head'
import styles from '../styles/FormContainer.module.css'
import { Form } from '../components/Form'


export default function Home() {
      return (
            <>
                  <Head>
                        <title>F&G - Aromatic Bar</title>
                  </Head>
                  <div className={styles.main}>
                        <div className={styles.headerContainer}>
                              <h2 className={styles.header}>Aromatic bar</h2>
                        </div>
                        <section className={styles.formContainer}>
                              <Form />
                        </section>
                  </div>
            </>
      )
}
