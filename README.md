# climate-edge-test

### Test files
All test files are in cypress/integration/bdd-tests folder

### Requirements
  - node.js v12 or hiher

Install dependencies:

```
1: cd into the climate-edge-test folder
2: run npm install from inside climate-edge-test folder
```

##### Running the testing
1:```npm run cy:run``` to run the test in headless mode

2:```npm run cy:open``` to launch cypress test runner , from the test runner , click on any feature file to run test



### Bugs to find
1: Unable to broadcast message due to ```CORS error```

2: Schecduled Broadcats pop-up is not displaying scheduled broadcats

3: From saved series pop-up, Add message tab is not functioning 

4: Clicking "+" button to add more content to a newly created Series is complying the texts in both content text area to one




### How would you automate an input / output system which communicates via SMS?
See simple example scenario below.
Example
INPUT / OUTPUT

User       FORECAST
System  The forecast is x, y, z. For more info reply A
User       A
System  The details of the forecast are….




Given user request forcast from System

    Assert reciepient [System]

    Assert message sent to System contains [Forecast]

    Assert system message to [User] contains [The forecast is x, y, z. For more info reply A]


Given user reply A

    Assert sender [System]

    Assert User message received contains[The forecast is x, y, z. For more info reply A]

    User reply [A] to reciepient [System]


Then System should reply with forecast details

    Assert reciepient [User]

    Assert message body sent to [User] contains [The details of the forecast are….] 


Then user should recieve forecast details

    Assert send from [System]

    Assert message body [The details of the forecast are….]


### Bonus round (optional)
Why does the textarea counter not start from 0? ==> ``` Textarea has a default/hardcoded characters(#GCT*BC) ```

Are there any design inconsistencies? ==> 

   1: ``` Fold-out menu(Hamburger) are not consistent ```

   2: ``` Clicking Your Services from the side menu bar is not function ```






