# NeoTour

NeoTour - это оптимизированное приложение, разработанное для удобного бронирования туров. Основная цель - предоставление пользователям информации о доступных турах, используя систему категоризации и предоставляя рекомендации.

## Используемые технологии

В проекте использовались следующие технологии:

- React
- Redux-Toolkit
- RTK Query
- TypeScript
- Vite
- Yarn

## Установка

1. **Установите Node.js и Yarn**

   Node.js и Yarn (пакетный менеджер) необходимы для установки и использования Vite, React и других библиотек. Вы можете скачать их с официального сайта Node.js и Yarn.

3. **Установите Vite**

   Vite - это современный сборщик, который вы использовали в своем проекте. Вы можете установить его, используя Yarn:

   ```
   yarn global add create-vite
   ```

5. **Склонируйте проект**

   Используйте git для клонирования вашего проекта на вашу машину.

7. **Установите зависимости**

   Перейдите в каталог проекта и установите необходимые зависимости с помощью Yarn:

   ```
   yarn add @reduxjs/toolkit react react-dom react-input-mask react-phone-number-input react-redux react-router-dom react-toastify sass swiper
   ```

9. **Запустите проект**

   После установки всех зависимостей вы можете запустить проект с помощью команды:

   ```
   yarn dev
   ```

## Использование

После запуска проекта, вас встретит страница логина, если у вас уже есть аккаунт, можете залогиниться. В противном случае
перейдите на страницу авторизации. Там нужно заполнить все поля и зарегистрироваться. Дальше вас перекинет на страницу логина, вам там нужно 
ввести данные которые укзаали при регистрации.

Страница логина.

![image](https://github.com/nurlanov0105/neo-tour/assets/126797112/4b7311e0-d898-4f78-a643-86a2205f53bc)


Страница регистрации.

![image](https://github.com/nurlanov0105/neo-tour/assets/126797112/78c5938c-ab6a-4993-bc9e-6bb768b28324)

Дальше вы попадете на гланую страницу.

![image](https://github.com/nurlanov0105/neo-tour/assets/126797112/75b3ca02-6ddf-4a6b-bded-99f2f9930ad8)

По клику на кнопку **Let`s Go!** вас перенесет вниз к слайдеру с категориями. 

![image](https://github.com/nurlanov0105/neo-tour/assets/126797112/a83f3bfa-d64c-4e1a-a271-145bf56208d1)

Там вы сможете выбрать желаемую категорию туристического места и с помощью слайдера сможете увидеть все возможные места, которые соответсвуют выбранному категорию.

Дальше есть секция **Recommended**. По названию понятно, что данная секция показывает рекомендуемые места.

**Кликнув** на одну из карточек, вы попадете на другую страницу, где будет вся необходимая информация по выбранному месту.

![image](https://github.com/nurlanov0105/neo-tour/assets/126797112/6c50d545-6e3b-400a-9017-46a030f58f4d)

Там вы можете заметить кнопку **Book now**. При клике появиться модальное окно с формой для бронирования желаемого места.
После того как вы заполните форму и отправите его, место которое вы выбрали сохраниться. Дальше если вы попытаетесь заново забронировать то же место, то у вас не получиться т.к.
вы уже забронировали его.

Есть страница профиля со списком туров, там можно выйти с акккаунта и также посмотреть и/или удалить забронированные туры

![image](https://github.com/nurlanov0105/neo-tour/assets/126797112/cc2b98a6-35a4-4f2d-93cb-e92ea28cbd62)



## Вклад

Кто хочет помочь в развитии данного проекта, можете написать мне в телеграм: @nnnNursultan

## Авторы

https://github.com/nurlanov0105/
