# FoundationHealthQaTask

This is the task was given by Foundation Health to me as a QA Engineer. 
In this project, I'll be writing test scripts in  Sauce Demo website.

**Getting Started**

I will be building a Playwright framework with Typescript. 

My framework is based on Page Object Model. So, while locators and methods are stored in **Page** files, test cases can be found under the **tests** field as spec files.

The additional test cases will be found under end of this file. Further responses will be discussed in the interview.

**Installation**

If you want to run this on your local machine, clone the repository using git clone. Then, navigate to the main directory and run the following commands to install Playwright and its dependencies:

npm install

npx playwright install

**Running the automated checks**

npx playwright test
npx playwright show-report  => run test and show the html report right after that

**Running the Tests in VS Code**

The Playwright team has released a VS Code Extension that allows you to debug tests easily with the click or right click of a button.

**Notes**

This framework is organised with Page Object Model. 
All related methods and locators are stored in Page files. 
Main test cases can be found in tests/tests/ as ".spec" files.

**To Do**

* If I would have more time, I would automate these scenarios:

  * Negative and edge scenarios of several flows (login, ordering ect.)
  * Check if the sorter works as expected
  * Validate each missing fields give an error in checkout customer information page
  * Check if price total is correct based on the added items.
  * Check if price total is correct after removing an item from checkout page
  
* I would also reduce the hard coded data. 
