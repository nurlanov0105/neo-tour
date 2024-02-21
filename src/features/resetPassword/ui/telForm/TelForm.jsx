import React, { useState } from 'react';
import InputMask from 'react-input-mask';

import telImg from '@/shared/assets/imgs/resetPsw/tel.svg';
import styles from '../styles.module.scss';

import kgFlag from '@/shared/assets/imgs/form/KG.svg';
import kzFlag from '@/shared/assets/imgs/form/KZ.svg';
import ruFlag from '@/shared/assets/imgs/form/RU.svg';

import { isValidPhoneNumber } from 'react-phone-number-input';

//  кастомный компонент флага
const flags = {
   KG: kgFlag,
   KZ: kzFlag,
   RU: ruFlag,
};

const countryCodes = {
   KG: '+996 (999) 999 999',
   KZ: '+7 (999) 999 9999',
   RU: '+7 (999) 999-99-99',
};

const TelForm = ({ handleTel }) => {
   const [tel, setTel] = useState('');
   const [country, setCountry] = useState('KG');
   const [activeSelect, setActiveSelect] = useState(false);
   const onChangeTel = (e) => setTel(e.target.value);

   const isValidNumber = (number, country) => {
      const format = countryCodes[country];
      const digits = number.replace(/\D/g, '');
      const requiredLength = format.replace(/\D/g, '').length;
      return digits.length === requiredLength;
   };

   const isButtonDisabled = !isValidNumber(tel, country);

   const onSubmit = (e) => {
      e.preventDefault();
      handleTel(tel);
   };

   const handleFlagClick = () => {
      setActiveSelect(!activeSelect);
      setCountry('KG');
   };

   const handleOptionClick = (countryCode) => {
      setCountry(countryCode);
      setActiveSelect(false);
      setTel('');
   };

   return (
      <form className={styles.telForm} onSubmit={onSubmit}>
         <h3 className={styles.telForm__title}>Введите номер телефона</h3>
         <div className={styles.telForm__body}>
            <img src={telImg} alt='tel img' className={styles.telForm__img} />
            <h4 className={styles.telForm__subtitle}>Введите номер телефона</h4>
            <p className={styles.telForm__descr}>Мы отправим вам СМС с кодом подтверждения</p>
            <div className={styles.telForm__box}>
               <div className={styles.country}>
                  <img
                     src={flags[country]}
                     alt='flag'
                     className={styles.country__flag}
                     onClick={handleFlagClick}
                  />
                  {activeSelect ? (
                     <div className={styles.country__select}>
                        <div
                           className={styles.contry__option}
                           onClick={() => handleOptionClick('KG')}>
                           <img src={kgFlag} alt='flag' className={styles.country__select__flag} />
                           <span>+996</span>
                        </div>
                        <div
                           className={styles.contry__option}
                           onClick={() => handleOptionClick('KZ')}>
                           <img src={kzFlag} alt='flag' className={styles.country__select__flag} />
                           <span>+7</span>
                        </div>
                        <div
                           className={styles.contry__option}
                           onClick={() => handleOptionClick('RU')}>
                           <img src={ruFlag} alt='flag' className={styles.country__select__flag} />
                           <span>+7</span>
                        </div>
                     </div>
                  ) : (
                     ''
                  )}
               </div>
               <InputMask
                  mask={countryCodes[country]}
                  className={styles.telForm__input}
                  placeholder={countryCodes[country]}
                  value={tel}
                  onChange={onChangeTel}>
                  {(inputProps) => <input {...inputProps} type='tel' />}
               </InputMask>
            </div>
         </div>
         <button className={styles.btn} type='submit' disabled={isButtonDisabled}>
            <span>Далее</span>
         </button>
      </form>
   );
};

export default TelForm;
