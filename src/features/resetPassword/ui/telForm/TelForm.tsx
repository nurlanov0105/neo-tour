import React, { FC, useState } from 'react';
import InputMask from 'react-input-mask';

import telImg from '@/shared/assets/imgs/resetPsw/tel.svg';
import styles from '../styles.module.scss';

import kgFlag from '@/shared/assets/imgs/form/KG.svg';
import kzFlag from '@/shared/assets/imgs/form/KZ.svg';
import ruFlag from '@/shared/assets/imgs/form/RU.svg';

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

type Props = {
   setSelectedTelForm: React.Dispatch<React.SetStateAction<boolean>>;
};

type CountryCode = keyof typeof countryCodes;

const TelForm: FC<Props> = ({ setSelectedTelForm }) => {
   const [tel, setTel] = useState<string>('');
   const [country, setCountry] = useState<string>('KG');
   const [activeSelect, setActiveSelect] = useState<boolean>(false);
   const onChangeTel = (e: React.ChangeEvent<HTMLInputElement>) => setTel(e.target.value);

   const isValidNumber = (number: string, country: CountryCode) => {
      const format = countryCodes[country];
      const digits = number.replace(/\D/g, '');
      const requiredLength = format.replace(/\D/g, '').length;
      return digits.length === requiredLength;
   };

   const isButtonDisabled = !isValidNumber(tel, country as 'KG' | 'KZ' | 'RU');

   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSelectedTelForm(false);
   };

   const handleFlagClick = () => {
      setActiveSelect(!activeSelect);
      setCountry('KG');
   };

   const handleOptionClick = (countryCode: string) => {
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
                     src={flags[country as keyof typeof flags]}
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
                  mask={countryCodes[country as CountryCode]}
                  className={styles.telForm__input}
                  placeholder={countryCodes[country as CountryCode]}
                  value={tel}
                  onChange={onChangeTel}>
                  {/* @ts-ignore */}
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
