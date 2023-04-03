1. npm install  (to load node modules)
2. npm start    (to start the development server, localhost:3000, when clicks on a coin title redirects to localhost:3000/coins/nameofthecoin


Extra notes: 

Homepage: Renders a table of cryptocurrency coins with their basic information such as name, symbol, current price, 24h high and low, and 24h price change percentage. It uses styled-components library to apply some basic styling to the table. The component receives an array of coins as a prop and maps over them to generate a row for each coin in the table body. Each row is a link to the corresponding coin details page, which is handled by React Router.

Click action (second page): 
Exports a React component called CoinDetails. This component receives a coin object as a prop and displays various details about the coin, including its name, description, current price, price changes over different time periods, and 24-hour high and low prices.



imports:

styled-components
react-router-dom
axios
express
cors


![cryptoprices](https://user-images.githubusercontent.com/50466054/229404413-ae2177a3-f998-4c6b-8b35-e5f4035d6771.png)
