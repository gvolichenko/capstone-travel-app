# Weather-Journal App Project

## Overview
This web app will help you plan for the next trip by providing information on weather and how many days are left until your trip.

## Proposed Steps for the Grader
### Initial Setup
1. Fork the [capstone-travel-app](https://github.com/gvolichenko/capstone-travel-app) repository
2. Once inside the directory, install dependencies using `npm install`

### Testing Production Mode
3. To build the necessary directories for production mode, run `npm run build-prod`
4. Start up the server using `npm run start`
5. Access the web app by opening the `index.html` file in the `dist` folder of the project directory
6. Follow the steps in [User Instructions](https://github.com/gvolichenko/capstone-travel-app#user-instructions) 

### Testing Dev Mode
6. In a new terminal window (keep the server running), enter the dev mode using `npm run build-dev`
7. A new browser window will appear with the web app
8. Follow the steps in [User Instructions](https://github.com/gvolichenko/capstone-travel-app#user-instructions) 

### Testing the Jest tests
9. Inside the directory in terminal, run `jest`

## User Instructions 
1. Put in your destination in the following format:
- City, state for US destinations
- City, country for international destinations

2. Put in the date of your anticipated departure
- Weather forecast is supported for today's date and the following 15 days (API limitation)