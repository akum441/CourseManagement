Course Management System
Description
This application allows you to perform CRUD operations on course data via a user interface developed in React.js. The backend is built with Node.js and data is stored in a MySQL database. The application also features a Python script for bulk insert and update operations using JSON files.

Technologies
Frontend: React.js
Backend: Node.js
Database: MySQL
Scripting: Python for bulk operations
Containerization: Docker
Orchestration: Kubernetes


1. Setup Instructions
  
	For Node.js Application:
	Clone the repository:https://github.com/akum441/CourseManagement.git
	
	bash
	Copy code
	git clone https://github.com/akum441/CourseManagement.git
	Navigate to the project directory:
	
	bash
	Copy code
	cd <your-project-folder>
	Install dependencies:
	
	bash
	Copy code
	npm install
	Run the application:
	
	bash
	Copy code
	npm start
	For Python Application:
	(Optional) Create a virtual environment:
	
	bash
	Copy code
	python3 -m venv venv
	Activate it:
	
	bash
	Copy code
	source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
	Install dependencies:
	
	bash
	Copy code
	pip install -r requirements.txt
	Run the application:
	
	bash
	Copy code
	python <your-main-file>.py

	Update the Kubernetes secrets for database credentials.
	Use Docker and Kubernetes files present inside frontend and backend folders to deploy the application.




3. Usage Examples
   After Running the Application:
	Course Management:
	
	Upon launching the application, the main page will be pre-loaded with a list of courses.
	The user interface offers intuitive buttons for editing and deleting individual courses. These functions are self-explanatory and straightforward to use.
	Bulk Operations:
	
	The application supports bulk operations for both inserting and updating course data.
	For example, to perform bulk inserts or updates, you can feed a JSON file via the command line as follows:
	bash
	Copy code
	python bulk_operations.py [insert|update] sample.json
	Replace [insert|update] with either insert or update based on the operation you wish to perform.
	
	This makes the application versatile, allowing you to manage course data either through the user interface or programmatically through JSON files.


4. Dependencies
This section provides a comprehensive list of all the dependencies required to run the different parts of the application. The dependencies are categorized based on the part of the stack they belong to.

Python Dependencies:
To run the Python scripts, you'll need to install the following packages:

json: For parsing and manipulating JSON data.
requests: To make HTTP requests.
sys: For accessing command-line arguments.
You can install these packages using pip:

bash
Copy code
pip install json requests
React Dependencies:
The front-end of the application is built using React. Below are the packages you'll need:

@testing-library/jest-dom: For Jest DOM matchers.
@testing-library/react: For React component testing.
@testing-library/user-event: Simulate user events during testing.
axios: To make HTTP requests.
bootstrap: For UI components.
bootstrap-icons: For icons.
react: React library.
react-dom: React DOM library.
react-scripts: Scripts and configurations.
web-vitals: Web metrics library.
Install these packages using npm:

bash
Copy code
npm install
Node.js Dependencies:
For the Node.js backend, you'll need:

Main Dependencies:
cors: For enabling CORS.
express: Web framework.
mysql: MySQL driver.
mysql2: Another MySQL driver with additional features.
sequelize: ORM for Node.js.
Development Dependencies:
@types/express: Type definitions for Express.
@types/node: Type definitions for Node.js.
ts-node: TypeScript execution environment.
typescript: TypeScript compiler.
To install all Node.js dependencies, run:

bash
Copy code
npm install
or for development dependencies,

bash
Copy code
npm install --save-dev
By installing these dependencies, you ensure the application has all the necessary packages to run smoothly.

Database Schema
MySQL database schema:

Field	Type	Null	Key	Default	Extra
id	int	NO	PRI	NULL	auto_increment
name	varchar(255)	NO		NULL	
members	text	YES		NULL	
coach_id	int	YES		NULL	Unique
description	text	YES		NULL	
Note: Both id and coach_id are unique fields.


5.Future Maintenance and Updates
The architecture of this application is designed to be scalable and maintainable. Here are some key points on how the application can be updated or maintained in the future:

Backend:
Database Migrations: As the application scales, you may want to add or modify database tables and columns. Using database migration tools can make this process smoother.
API Versioning: Future versions of the API can be managed without breaking existing client applications by implementing API versioning.
Bulk Operations: The current support for bulk insert and update via Python scripts can be extended for more complex operations.
Security Enhancements: Regularly update packages to protect against vulnerabilities and consider implementing additional authentication layers.
Frontend:
UI/UX Improvements: Regularly update the frontend to meet the latest design standards and enhance user experience.
Performance Optimization: Techniques like lazy loading and asynchronous API calls can further improve application performance.
Feature Additions: New features can be incrementally added with backward compatibility in mind.
Python Scripts:
Modularization: Separate out different functionalities into modules for better maintainability.
Support for New Formats: Add support for different file formats other than JSON for bulk operations.
General:
Testing: Continuously update unit and integration tests to cover new features and edge cases.
Documentation: Keep all documentation up-to-date to reflect any changes in the system.
Version Control: Utilize Git branches effectively for feature development, hotfixes, and staging before merging into the main production branch.
By following these guidelines and best practices, maintaining and updating the application should be a straightforward process.

6.Challanges:
Back-end Challenges:
Database Selection: Consider using MongoDB for handling bulk data, but also evaluate MySQL for its ACID properties, especially when updates require looping.
Bulk Operations API: Design a single API endpoint for bulk insert, update, and delete operations, accepting an array in the request body.
CORS Resolution: Address Cross-Origin Resource Sharing (CORS) issues.
Python Function for Multiple Inputs: Implement a Python function capable of accepting various input types.
Editable Rows: Enable row editing while restricting the "ID" field to numeric input only.
Error Handling: Implement a consistent error-handling mechanism.
Request Body Validation: Add checks to ensure the request body for inserts is valid and complete.
Array Validation: Develop a function to notify users that only arrays are acceptable as input.
Optional Query Parameters: Extend the getCourses function to accept optional query parameters.
Dynamic Database Updates: Update database records based on the fields provided.
SQL Injection Prevention: Implement measures to guard against SQL injection attacks.
Bulk Operations in Python: Decide on a Python file structure that facilitates bulk operations.
MySQL Package Selection: Determine which MySQL package is most suitable for the project.
Duplicate Key Error Handling: Implement user-friendly error messages for duplicate key errors in the front end.
Front-end Challenges:
Edit Button Issue: Resolve the problem where the API's string response is causing the Edit button to malfunction.
ID Field: Make the ID field non-editable.
Button Alignment: Correct the issue causing two buttons to stack vertically instead of aligning side by side.
Modal Pop-up: Ensure the "Add New" button triggers the modal pop-up (possibly due to missing bootstrap.js).
JSON Validation for Members Array: Debug and fix the error saying the "members" array contains invalid JSON while editing.


Contact
Email: arunks78889@gmail.com
LinkedIn: Profile
Location: Munich
