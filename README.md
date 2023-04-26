# Ajali-App-Project
https://ajalireports.onrender.com


# AJALI
Ajali! is an online platform that enables any/every citizen to bring any form of accident/emergency alerts to the appropriate authorities and the general public. The platform aims to facilitate the timely delivery of information to first responders, which could be the difference between life and death.

This project is built using Ruby on Rails for the backend, PostgreSQL for the database, and ReactJS with Redux Toolkit for the frontend.

# MVP Features
The following features will be included in the minimum viable product (MVP) for Ajali!:

Users can create an account and log in.
Users can create an incident report.
Users can edit their incident reports.
Users can delete their incident reports.
Users can add geolocation (Lat Long Coordinates) to their incident reports.
Users can change the geolocation (Lat Long Coordinates) attached to their incident reports.
Admin can change the status of a record to either under investigation, rejected (in the event of a false claim), or resolved (in the event that the claim has been investigated and resolved).
Users can add images to their red-flag or intervention records to support their claims.
Users can add videos to their red-flag or intervention records to support their claims.
The application should display a Google Map with Marker showing the incident report location.
Optional Features
The following features may be included in Ajali! as optional enhancements:

The user gets real-time email notification when Admin changes the status of their record.
The user gets real-time SMS notification when Admin changes the status of their record.
Technical Expectations
The following tools and technologies will be used to build Ajali!:

Backend: Ruby on Rails
Database: PostgreSQL
Frontend: ReactJS with Redux Toolkit for state management.
Testing Framework: Jest & Minitests
Wireframes: Figma (Should be mobile-friendly)
Getting Started
To get started with the Ajali! project, clone the repository to your local machine:

#INITIALIZATION
Copy code
git clone https://github.com/MathaiMarvin/ajali.git
Once you have cloned the repository, you can navigate to the project directory and install the dependencies:
cd ajali
bundle install
npm install
You can then start the Rails server and the React app:

rails s
npm start
Visit http://localhost:3000/ to view the Ajali! application in your browser.

Contributing
Contributions to the Ajali! project are welcome. To contribute to the project, please fork the repository, make your changes, and submit a pull request.

License
The Ajali! project is licensed under the MIT License. See the LICENSE file for more information.
