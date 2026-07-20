//Multiple conditions can be checked using nested ternary operators. The syntax is as follows:
// condition1 ? expression1 : condition2 ? expression2 : expression3;   
let age =24;
let is_prashanth_enjoy=age >=18 ? age>= 26 ? "Drinks Alcohol" : "No Drinks Alchohol" : false;
console.log(is_prashanth_enjoy);

// Nested Ternary interview question
let statusCode = 404;
let category =
statusCode <300 ? "Success" :
statusCode <400 ? "Redirect" :
statusCode <500 ? "Client Error" : "Server Error";
console.log(`Status Code: ${statusCode} - Category: ${category}`);

//Nested Ternary interview question 2
let temp =35;
let feel = ((temp >= 40) ? "Very Hot" : 
(temp >= 35 ? "Hot" : 
    (temp >= 10) ? "Cool" : "Cold"));
console.log(`Temperature: ${temp}°C - Feel: ${feel}`);
