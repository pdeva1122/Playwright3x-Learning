let age=17;
let is_prashanth_go_to_goa= age >= 18 ? "Yes, Prashanth can go to Goa." : "No, Prashanth cannot go to Goa.";
console.log(is_prashanth_go_to_goa);
// condition ? value_if_true : value_if_false

//Interview question
let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "Test Passed" : "Test Failed";
console.log(testResult);

//Interview question 2
let environment = "staging";
let apiUrl = environment === "production" ? "https://api.production.com" : "https://api.staging.com";
console.log(apiUrl);

//Interview question 3
let responseTime = 1500;
let sla=1000;
let slaStatus = responseTime <= sla ? "SLA Met" : "SLA Not Met";
console.log(`Response Time: ${responseTime}ms - ${slaStatus}`);

