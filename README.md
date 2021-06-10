TAL Monthly Premium Calculator
-------------------------------
Technologies :
--------------
ASP.NET MVC

AngularJS

Calculation Formula :
---------------------
Death Premium = (Death Cover amount * Occupation Rating Factor * Age) / 1000 * 12

Validations:
------------
1. Required fields validation is applied on all the fields
2. Numbers only validation is applied to "Death - Sum Insured" field which means it can accept only numbers
3. Datepicker is used for DOB field and validation is implemented to 
4. Age field is disabled and is calculated based on the DOB provided
5. Reset button is used to clear the form

Instructions to run the application:
------------------------------------
1. Download the files and copy to new folder
2. Open IIS and create new web application with a port number that's not already in use
3. Point the web application to new folder
4. Use browser to run the application, preferbaly IE or Chrome 

Steps:
------
1. Enter Name, DOB, Occupation & Death - Sum Insured and click on Submit
2. Monthly premium is dispalyed in the bottom of the screen
3. Click Reset to clear the form and bring form to pristine 

