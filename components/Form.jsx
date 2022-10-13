import React from 'react'
import styles from '../styles/Form.module.css'
import ContainerStyle from '../styles/FormContainer.module.css'

export const Form = () => {
      return (
            <form action='../pages/table' method='post' className={ContainerStyle.formContainer}>
                  <div className={styles.customerInfo}>
                        <label className={styles.label}>
                              Customer Name: <br />
                              <input id={styles.customerText} type='text' name='name' placeholder='E.g. John Doe' required />
                        </label>
                        <label className={styles.label}>
                              Email: <br />
                              <input id={styles.customerText} type='email' name='email' placeholder='example@mail.com' required />
                        </label>
                        <label className={styles.label}>
                              Phone: <br />
                              <input id={styles.customerPhone} type='tel' name='phone' placeholder='123-45-678-90' pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{2}' required />
                        </label>
                  </div>
                  <div className={styles.feedback}>
                        <div className={styles.questions}>
                              Please rate the quality of the service you received from your host.
                              <div className={styles.questionsRatings}>
                                    <label>
                                          <input type='checkbox' className={styles.checkboxStyle} />
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
                        <input type='submit' value='Submit Review' id={styles.submit} />
            </form>
      )
}