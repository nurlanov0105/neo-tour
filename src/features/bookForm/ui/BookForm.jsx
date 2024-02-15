import React, { useState } from 'react';
import styles from './styles.module.scss';

import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
// import InputMask from 'react-input-mask';

import kgFlag from '@/shared/assets/imgs/form/KG.svg';
import kzFlag from '@/shared/assets/imgs/form/KZ.svg';
import ruFlag from '@/shared/assets/imgs/form/RU.svg';

//  кастомный компонент флага
function myFlagComponent({ country }) {
   if (country === 'KG') {
      return <img src={kgFlag.default || kgFlag} />;
   } else if (country === 'KZ') {
      return <img src={kzFlag.default || kzFlag} />;
   } else if (country === 'RU') {
      return <img src={ruFlag.default || ruFlag} />;
   }
}

const BookForm = ({ setActive }) => {
   const [phoneNumber, setPhoneNumber] = useState('+996');
   // const [countryCode, setCountryCode] = useState('KG');
   const [comment, setComment] = useState('');
   const [peopleCount, setPeopleCount] = useState(1);

   // Проверка валидности полей
   const isFormValid = phoneNumber && isValidPhoneNumber(phoneNumber) && comment.trim() !== '';

   const handlePhoneNumberChange = (value) => {
      // Проверка на цифры
      if (value && value.replace(/[^0-9+]/g, '') !== value) {
         return;
      }

      // Установка значения по умолчанию, если поле ввода становится пустым
      if (value === '') {
         setPhoneNumber('+996');
      } else {
         setPhoneNumber(value);
      }
   };

   // const handlePhoneNumberChange = (value) => {
   //    setPhoneNumber(value);
   //    if (value) {
   //       if (value.startsWith('+996')) {
   //          setCountryCode('KG');
   //       } else if (value.startsWith('+7') && value.length === 2) {
   //          setCountryCode('KZ');
   //       } else if (value.startsWith('+7')) {
   //          setCountryCode('RU');
   //       }
   //    }
   // };

   // const getMask = () => {
   //    switch (countryCode) {
   //       case 'KG':
   //          return '+\\9\\96 99 999 9999';
   //       case 'RU':
   //          return '+7 (999) 999 99 99';
   //       case 'KZ':
   //          return '+7 (999) 999 99 99';
   //       default:
   //          return '';
   //    }
   // };

   const onSubmit = (e) => {
      e.preventDefault();
      alert('Booked!');
      setActive(false);
      setPhoneNumber('+996');
      setComment('');
   };

   return (
      <form onSubmit={onSubmit}>
         <div className={styles.row}>
            <h2>Info</h2>
            <button type='button' onClick={() => setActive(false)}>
               <svg>
                  <path d='M14.1149 12L23.5649 2.565C23.8474 2.28255 24.006 1.89946 24.006 1.5C24.006 1.10055 23.8474 0.717459 23.5649 0.435004C23.2825 0.152548 22.8994 -0.00613403 22.4999 -0.00613403C22.1005 -0.00613403 21.7174 0.152548 21.4349 0.435004L11.9999 9.885L2.56491 0.435004C2.28245 0.152548 1.89936 -0.00613368 1.49991 -0.00613368C1.10046 -0.00613367 0.717364 0.152548 0.434908 0.435004C0.152453 0.717459 -0.0062288 1.10055 -0.0062288 1.5C-0.00622881 1.89946 0.152453 2.28255 0.434908 2.565L9.88491 12L0.434908 21.435C0.294316 21.5744 0.182725 21.7403 0.106572 21.9231C0.0304187 22.1059 -0.00878906 22.302 -0.00878906 22.5C-0.00878906 22.698 0.0304187 22.8941 0.106572 23.0769C0.182725 23.2597 0.294316 23.4256 0.434908 23.565C0.574353 23.7056 0.740254 23.8172 0.923043 23.8933C1.10583 23.9695 1.30189 24.0087 1.49991 24.0087C1.69793 24.0087 1.89398 23.9695 2.07677 23.8933C2.25956 23.8172 2.42546 23.7056 2.56491 23.565L11.9999 14.115L21.4349 23.565C21.5744 23.7056 21.7403 23.8172 21.923 23.8933C22.1058 23.9695 22.3019 24.0087 22.4999 24.0087C22.6979 24.0087 22.894 23.9695 23.0768 23.8933C23.2596 23.8172 23.4255 23.7056 23.5649 23.565C23.7055 23.4256 23.8171 23.2597 23.8932 23.0769C23.9694 22.8941 24.0086 22.698 24.0086 22.5C24.0086 22.302 23.9694 22.1059 23.8932 21.9231C23.8171 21.7403 23.7055 21.5744 23.5649 21.435L14.1149 12Z' />
               </svg>
            </button>
         </div>
         <p className={styles.descr}>
            To submit an application for a tour reservation, you need to fill in your information
            and select the number of people for the reservation
         </p>

         <label className={styles.tel}>
            <span>Phone number</span>
            <PhoneInput
               // mask={getMask()}
               value={phoneNumber}
               onChange={handlePhoneNumberChange}
               defaultCountry='KG'
               countries={['KG', 'RU', 'KZ']}
               flagComponent={myFlagComponent}
               international
            />
         </label>

         <label className={styles.commentInput}>
            <span>Commentaries to trip</span>
            <input
               value={comment}
               onChange={(e) => setComment(e.target.value)}
               placeholder='Write your wishes to trip...'
            />
         </label>

         <div className={styles.counting}>
            <span>Count of people to trip</span>
            <div className={styles.count}>
               <div className={styles.btns}>
                  <button
                     type='button'
                     disabled={peopleCount === 1}
                     onClick={() => peopleCount > 1 && setPeopleCount(peopleCount - 1)}>
                     <svg>
                        <path
                           d='M4.1665 10H15.8332'
                           strokeWidth='2'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        />
                     </svg>
                  </button>
                  <span>{peopleCount}</span>
                  <button
                     type='button'
                     disabled={peopleCount === 6}
                     onClick={() => peopleCount < 6 && setPeopleCount(peopleCount + 1)}>
                     <svg>
                        <path d='M15.8335 9.16666H10.8335V4.16666C10.8335 3.94565 10.7457 3.73369 10.5894 3.57741C10.4331 3.42113 10.2212 3.33333 10.0002 3.33333C9.77915 3.33333 9.56719 3.42113 9.41091 3.57741C9.25463 3.73369 9.16683 3.94565 9.16683 4.16666V9.16666H4.16683C3.94582 9.16666 3.73385 9.25446 3.57757 9.41074C3.42129 9.56702 3.3335 9.77898 3.3335 9.99999C3.3335 10.221 3.42129 10.433 3.57757 10.5893C3.73385 10.7455 3.94582 10.8333 4.16683 10.8333H9.16683V15.8333C9.16683 16.0543 9.25463 16.2663 9.41091 16.4226C9.56719 16.5789 9.77915 16.6667 10.0002 16.6667C10.2212 16.6667 10.4331 16.5789 10.5894 16.4226C10.7457 16.2663 10.8335 16.0543 10.8335 15.8333V10.8333H15.8335C16.0545 10.8333 16.2665 10.7455 16.4227 10.5893C16.579 10.433 16.6668 10.221 16.6668 9.99999C16.6668 9.77898 16.579 9.56702 16.4227 9.41074C16.2665 9.25446 16.0545 9.16666 15.8335 9.16666Z' />
                     </svg>
                  </button>
               </div>
               <p className={styles.people}>
                  <svg>
                     <path d='M13.71 10.71C14.6904 9.93866 15.406 8.88092 15.7572 7.68394C16.1085 6.48697 16.0779 5.21027 15.6698 4.03147C15.2617 2.85267 14.4963 1.83039 13.4801 1.10686C12.4639 0.383322 11.2474 -0.00549316 10 -0.00549316C8.75255 -0.00549316 7.53611 0.383322 6.51993 1.10686C5.50374 1.83039 4.73834 2.85267 4.33021 4.03147C3.92208 5.21027 3.89151 6.48697 4.24276 7.68394C4.59401 8.88092 5.3096 9.93866 6.29 10.71C4.61007 11.383 3.14428 12.4994 2.04889 13.9399C0.953495 15.3805 0.26956 17.0913 0.0699967 18.89C0.0555513 19.0213 0.0671132 19.1542 0.104022 19.2811C0.140931 19.4079 0.202464 19.5263 0.285108 19.6293C0.452016 19.8375 0.69478 19.9708 0.959997 20C1.22521 20.0292 1.49116 19.9518 1.69932 19.7849C1.90749 19.618 2.04082 19.3752 2.07 19.11C2.28958 17.1552 3.22168 15.3498 4.68822 14.0388C6.15475 12.7278 8.0529 12.003 10.02 12.003C11.9871 12.003 13.8852 12.7278 15.3518 14.0388C16.8183 15.3498 17.7504 17.1552 17.97 19.11C17.9972 19.3557 18.1144 19.5827 18.2991 19.747C18.4838 19.9114 18.7228 20.0015 18.97 20H19.08C19.3421 19.9698 19.5817 19.8373 19.7466 19.6313C19.9114 19.4252 19.9881 19.1624 19.96 18.9C19.7595 17.0962 19.0719 15.381 17.9708 13.9382C16.8698 12.4954 15.3969 11.3795 13.71 10.71ZM10 10C9.20887 10 8.43551 9.76541 7.77772 9.32588C7.11992 8.88636 6.60723 8.26164 6.30448 7.53074C6.00173 6.79983 5.92251 5.99557 6.07686 5.21964C6.2312 4.44372 6.61216 3.73099 7.17157 3.17158C7.73098 2.61217 8.44371 2.2312 9.21964 2.07686C9.99556 1.92252 10.7998 2.00173 11.5307 2.30448C12.2616 2.60724 12.8863 3.11993 13.3259 3.77772C13.7654 4.43552 14 5.20888 14 6C14 7.06087 13.5786 8.07828 12.8284 8.82843C12.0783 9.57858 11.0609 10 10 10Z' />
                  </svg>
                  <span>{peopleCount} People</span>
               </p>
            </div>
         </div>

         <button className='btn' disabled={!isFormValid}>
            <span>Submit</span>
         </button>
      </form>
   );
};

export default BookForm;
