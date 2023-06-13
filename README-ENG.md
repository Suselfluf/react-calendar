# interview-calendar

# How to use:

To run app you need to run following comand in terminal of cloned folder: `npm run start`

### Interview events

In this version of calendar, the events with interviews contained with a static array stored in `src/redux/models/reservations/reservationSlice.js` file.

As an alternative, it is possible to add AsynkThunk which will initialize API requests taking values that are stored in the DB.
The Input field takes the value of the YYYY MM DD HH or YYY M D H format if the month/day/hour has 1 digit. As instance - the 5th month or the 4th hour.

# Initial Task description has been taken from https://careers.uchi.ru/:

## Web application with a weekly calendar

You need to implement a static web application (SPA) using create-react-app, React, styled-components and put it on Heroku.

Calendar layouts for mobile browsers:

- [Main Mobile](./1.%20Main%20Mobile@2x.png) - Main view of the calendar.

<img src="https://github.com/Suselfluf/react-calendar/blob/main/design-assets/1.%20Main%20Mobile%402x.png" width="30%" height="30%" />
- [Delete Mobile](./2.%20Delete%20Mobile@2x.png) - Delete After the event has been chosen Delete button should emerge.

<img src="https://github.com/Suselfluf/react-calendar/blob/main/design-assets/2.%20Delete%20Mobile%402x.png" width="30%" height="30%" />
- [Add Mobile](./3.%20Add%20Mobile@2x.png) - As soon as `+` was clicked, the default popup (`prompt` function) should be emerged with an opportunity to add events.

<img src="https://github.com/Suselfluf/react-calendar/blob/main/design-assets/3.%20Add%20Mobile%402x.png" width="30%" height="30%" />

For a page transition `<= 740px` the calendar will stretch soon. For page combination `> 740px` calendar width `= 740px`, the calendar is aligned horizontally to the center of the page.

#### Materials:

React:
https://facebook.github.io/create-react-app/

styled-components:
https://medium.com/styled-components/styled-components-getting-started-c9818acbcbbd

Heroku:
https://blog.heroku.com/deploying-react-with-zero-configuration
