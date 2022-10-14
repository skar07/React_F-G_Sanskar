import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import styles from '../../styles/Form.module.css';
import ContainerStyle from '../../styles/FormContainer.module.css';
import { handleStorage } from "../../util/handleStorage";


export const Form = () => {
      const router = useRouter();
      const { register, handleSubmit } = useForm();
      const onSubmit = ({ name, email, phone }) => {
            const body = { name, email, phone }
            if (!localStorage.getItem('data')) {      
                  localStorage.setItem('data', [JSON.stringify(body)])
                  router.push('/table')
                  return;
            }
            let temp = localStorage.getItem('data');
            let temp_data = temp
            temp_data.push(body)
            console.log(temp_data)
            localStorage.setItem('data', JSON.stringify(temp_data))
            router.push('/table')
      }
      return (
            <form onSubmit={handleSubmit(onSubmit)} className={ContainerStyle.formContainer}>
                  <div className={styles.customerInfo}>
                        <label className={styles.label}>
                              Customer Name: <br />
                              <input {...register("name")} id={styles.customerText} type='text' placeholder='E.g. John Doe' required />
                        </label>
                        <label className={styles.label}>
                              Email: <br />
                              <input {...register("email")} id={styles.customerText} type='email' placeholder='example@mail.com' required />
                        </label>
                        <label className={styles.label}>
                              Phone: <br />
                              <input {...register("phone")} id={styles.customerPhone} type='tel' name='phone' placeholder='123-45-678-90' pattern='[0-9]{10}' required maxLength={10} minLength={10} />
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