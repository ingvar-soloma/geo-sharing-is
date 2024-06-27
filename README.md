# GeoSharing.is
Welcome to GeoSharing.is! This is a [Ionic](https://ionicframework.com/) project built with [Vue](https://vuejs.org/) framework.

## Getting Started

To get started with this project, follow the instructions below.

Prerequisites
Before running the app, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- Ionic CLI (npm install -g @ionic/cli)

### TODO

1. extract toaster to a separate component
   - catch errors and display them in a toaster
2. add a loading spinner
3. add a map to the home page
4. add update on scroll down to the home page
5. ~~add update on scroll down to the history page~~
6. ~~add a map to the history page~~
7. add export location to gpx file
8. add define places location by coordinates
9. update location in telegram instead resending the message
10. ~~ask notification permissions~~
11. offer user to insert tg bot token
12. tell to user to disable power settings

- Pause app activity
- no restrictions for background activity

13. do not send location if it is the same address as the previous one
14. inactive gps optimisation
15. inactivity gps prescription optimisation

### Features

### Bugs

1. restarting foreground service after app opening
2. ~~foreground service status not updating in component~~

### Roadmap

1. use server to store locations and get friend's locations
2. add friend's locations to the map
3. add restricted area for sharing location
4. add trigger area for sending notification
5. add trigger radius for sending notification
6. add power saving modes/optimisations

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/my-ionic-app.git
```

2. Navigate to the project directory:

```bash
cd my-ionic-app
```

3. Install dependencies:
```bash
npm install

```

### Running the App

#### Android
1. Ensure you have Android Studio installed.
2. Connect your Android device or start an Android emulator.
3. Run the app:
```bash
ionic capacitor run android
```
#### iOS
1. Ensure you have Xcode installed.
2. Open the ios folder in Xcode.
3. Connect your iOS device or start an iOS simulator.
4. Run the app from Xcode.

### To build the app for production:

#### Android

```bash
ionic capacitor build android --prod
```

#### iOS
```bash
ionic capacitor build ios --prod
```
