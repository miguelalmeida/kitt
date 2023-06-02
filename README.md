# KITT - IONIC for RPI Touch Experiment
Experimenting with ionic to develop a simple frontend to be used with a Raspberry Pi along side  WEB and Mobile APPs.

# Webapp Setup 

## Configuring the environment
Install ionic:
```
npm install -g @ionic/cli
```

Install all dependencies:
```
npm install
```

Run a local server (run in development mode):
```
npm serve -p 8001
```

## Building
To create a development build just run:
```
ionic build --prod
```
This will create production ready files that will be available in the build folder. 

Just copy the contents of the build folder to the location where the http server is configured to serve.

If some capacitor plugins (added/removed/updated) have changed then run:
```
ionic build && npx cap copy (or cap sync)
```
This will update the dependencies as well.

# Rasbperry pi
How to make things work on the raspberry pi.

## Running as KIOSK in RPI
Install a http-server:
```
sudo npm install -g http-serve
```

Create a kiosk folder to serve the contents of your webap:
```
mkdir kiosk
```

Let's configure the services to run on boot. Open a terminal on the RPI and create or edit the autostart config file:
```
nano ~/.config/lxsession/LXDE-pi/autostart
```

If the file already exists, add the following lines to the end of the file:
```
@xset s off
@xset -dpms
@xset s noblank
@chromium-browser --noerrdialogs --disable-infobars --kiosk http://localhost:8080
```

If the file is empty, enter the following content:
```
@lxpanel --profile LXDE-pi
@pcmanfm --desktop --profile LXDE-pi
@xset s off
@xset -dpms
@xset s noblank
@chromium-browser --noerrdialogs --disable-infobars --kiosk http://localhost:8080
```

Reboot and sit back.


# Styling

## General information
Both Dark and Light styles are available and can be changed in the variables file. Just add "light", "dark", or both ("light dark") to the preferences to pick a favorite or allow the system to pick.

There is a custom.css file to include custom css global settings. Use with caution.

## Raspberry Pi Touch Screen
There is a file named rpi.css. This file is included under the APP.tsx file. When included it will add styling optimizations for the RPI specifically. It should take into account the @media.


# Electron APP setup

## Installation into an existing Capacitor application.

1. Build your webapp in your capacitor initiated project: npm run build.
2. Run npm i @capacitor-community/electron in your webapp project directory. This will install the platform for use with the @capacitor/cli.
3. Run npx cap add @capacitor-community/electron to initiate the platform, this will create the electron folder in your webapp project.
4. Run npx cap open @capacitor-community/electron to start your app in electron.

Note: You can use other npx cap commands with the platform by: npx cap <command> @capacitor-community/electron

## Packaging

### Setting up Packaging
1. Go to the electron folder 
2. npm install --save-dev @electron-forge/cli
3. npx electron-forge import
4. brew install fakeroot dpkg rpm (required to be able to create a linux package in macos )

### Actual packaging

Everytime you want to package a new app just make sure you build it first under ionic and then go to the electron folder to run:

1. ionic build
2. cd electron
3. cp -r ../build/* ./app/
4. MAKE:
 * Macos: npm run make
 * Linux: npm run make -- --platform=linux

After that go to the the "out" directory and into the "make" folder. In there you should have the installer .deb file that needs to be transfered into the RPI for installation.

