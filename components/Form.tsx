import React from 'react'
import styles from '../styles/Form.module.css'

export const Form = () => {
      return (
            <form>
                  <div className={styles.customerInfo}>
                        <label className={styles.label}>
                              Customer Name: <br />
                              <input id={styles.customerName} type='text' name='name' placeholder='E.g. John Doe' />
                        </label>
                        <label className={styles.label}>
                              Email: <br />
                              <input id={styles.customerEmail} type='email' name='email' placeholder='example@mail.com' />
                        </label>
                        <label className={styles.label}>
                              Phone: <br />
                              <input id={styles.customerPhone} type='tel' name='phone' placeholder='123-45-678-90' pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{2}' />
                        </label>
                  </div>
                  <div className={styles.feedback}>
                        <div className={styles.questions}>
                              Please rate the quality of the service you received from your host.
                              <div className={styles.questionsRatings}>
                                    <label>
                                          <input type='checkbox' />
                                          Excellent
                                    </label>
                                    <label>
                                          <input type='checkbox' />
                                          Good
                                    </label>
                                    <label>
                                          <input type='checkbox' />
                                          Fair
                                    </label>
                                    <label>
                                          <input type='checkbox' />
                                          Bad
                                    </label>
                              </div>
                        </div>
                        <div className={styles.questions}>
                              <span>Please rate the quality of your beverage.</span>
                              <div className={styles.questionsRatings}>
                                    <label>
                                          <input type='checkbox' />
                                          Excellent
                                    </label>
                                    <label>
                                          <input type='checkbox' />
                                          Good
                                    </label>
                                    <label>
                                          <input type='checkbox' />
                                          Fair
                                    </label>
                                    <label>
                                          <input type='checkbox' />
                                          Bad
                                    </label>
                              </div>
                        </div>
                        <div className={styles.questions}>
                              <span>Was our restaurant clean?</span>
                              <div className={styles.questionsRatings}>
                                    <label>
                                          <input type='checkbox' />
                                          Excellent
                                    </label>
                                    <label>
                                          <input type='checkbox' />
                                          Good
                                    </label>
                                    <label>
                                          <input type='checkbox' />
                                          Fair
                                    </label>
                                    <label>
                                          <input type='checkbox' />
                                          Bad
                                    </label>
                              </div>
                        </div>
                        <div className={styles.questions}>
                              <span>Please rate your overall dining experience.</span>
                              <div className={styles.questionsRatings}>
                                    <label>
                                          <input type='checkbox' />
                                          Excellent
                                    </label>
                                    <label>
                                          <input type='checkbox' />
                                          Good
                                    </label>
                                    <label>
                                          <input type='checkbox' />
                                          Fair
                                    </label>
                                    <label>
                                          <input type='checkbox' />
                                          Bad
                                    </label>
                              </div>
                        </div>
                  </div>
            </form>
      )
}