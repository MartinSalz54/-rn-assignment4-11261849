## Job Listing App
This is a simple React Native application that displays a list of featured and popular job listings. Users can navigate from the main screen to the home screen, where they will see their name and email displayed along with job listings.

 ## Components
## App.js
Description: The main entry point of the application.
Usage: Sets up the navigation stack and routes between the MainScreen and HomeScreen.
MainScreen
##  Description: A screen with a button that navigates to the HomeScreen.
Usage: When the button is pressed, it navigates to the HomeScreen and passes the name and email as route parameters.
## HomeScreen.js
Description: Displays the user's name and email along with lists of featured and popular job listings.
Usage: Receives name and email via route parameters and displays them at the top. It also displays job listings in a FlatList component.
## assets folder
 Description: Contains image assets used in the app.
Usage: Ensure that the images for company logos (facebook.png, google.png) are placed in this folder.
## Screenshots
# Main Screen
./assets\APP.js.jpeg

# Home Screen
./assets\Homescreen.js.jpeg

## Getting Started
# Prerequisites
Node.js
npm or yarn
Expo CLI
## Installation
Clone the repository:https://github.com/MartinSalz54/-rn-assignment4-11261849.git

## Install dependencies:
npm install

## Start the development server:
npm start

## Running on a Device
Ensure you have the Expo Go app installed on your Android or iOS device.
Scan the QR code generated in the terminal after running npm start using the Expo Go app.

## Folder Structure 
job-listing-app
├── assets
│   ├── facebook.png
│   ├── google.png
│   ├── main_screen.png
│   └── home_screen.png
├── App.js
├── HomeScreen.js
├── package.json
└── README.md

