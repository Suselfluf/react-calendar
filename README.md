# interview-calendar

# Как использовать:

Чтобы запустить react приложение:
`npm run start`

## Интерьвю ивенты

В данной версии интервью ивенты являются статичным массивом хранящимся в `src/redux/models/reservations/reservationSlice.js`
Как альтернативу возможно дописать AsynkThunk который будет инницализировать API запросы принимая значения, которые хранятся в DB.

Input поле принимаеет значение формата YYYY MM DD HH или YYY M D H если в месяце/дне/часах 1 цифра например 5й месяц или 4й час.

## Текст задания (был взят с вакансии Front-end разработчиков https://careers.uchi.ru/):

### Веб приложение с недельным календарем

Нужно реализовать статичное веб приложение (SPA) используя create-react-app, React, styled-components и выложить его на Heroku.

Макеты c версткой календаря для мобильных браузеров:

- [Main Mobile](./1.%20Main%20Mobile@2x.png) - Основной вид календаря.

<!-- ![](https://github.com/Suselfluf/react-calendar/blob/main/design-assets/1.%20Main%20Mobile%402x.png) -->
<img src="https://github.com/Suselfluf/react-calendar/blob/main/design-assets/1.%20Main%20Mobile%402x.png" width="30%" height="30%" />
- [Delete Mobile](./2.%20Delete%20Mobile@2x.png) - После выбора события, появляется кнопка Delete.

<!-- ![](https://github.com/Suselfluf/react-calendar/blob/main/design-assets/2.%20Delete%20Mobile%402x.png) -->
<img src="https://github.com/Suselfluf/react-calendar/blob/main/design-assets/2.%20Delete%20Mobile%402x.png" width="30%" height="30%" />
- [Add Mobile](./3.%20Add%20Mobile@2x.png) - После нажатия `+` появляется стандартный попап (функция `prompt`) добавления события.

<!-- ![](https://github.com/Suselfluf/react-calendar/blob/main/design-assets/3.%20Add%20Mobile%402x.png) -->
<img src="https://github.com/Suselfluf/react-calendar/blob/main/design-assets/3.%20Add%20Mobile%402x.png" width="30%" height="30%" />

Для ширины страницы `<= 740px` календарь равномерно растягивается. Для ширины страницы `> 740px` ширина календаря `= 740px`, календарь выравнивантвается по горизонтали по центру страницы.

#### Материалы:

React:
https://facebook.github.io/create-react-app/

styled-components:
https://medium.com/styled-components/styled-components-getting-started-c9818acbcbbd

Heroku:
https://blog.heroku.com/deploying-react-with-zero-configuration
