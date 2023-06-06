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

# Creating a Docker Container

## Setting up with macos and ionic
Ensure you have the latest version of docker and docker-buildx
```
brew install docker
brew install docker-buildx
```

A Docker build file was already added to this repo so there's nothing else to do there.

Ensure you have a docker desktop app running. Then run:
```
docker build -t kitt -f Dockerfile .
```

Then run locally by using:
```
docker run -p 8100:8100 kitt
```

To export the image run: 
```
docker save -o kitt.tar kitt
```

NOTE: This method uses heavy resources: RAM, CPU and DISK

## Setting up an nginx server
Create a Dockerfile with the following code (1st line is for when compiling for mac):

```
 # FROM nginx:1.10.1-alpine 
 FROM arm64v8/nginx:latest
 COPY ./build/. /usr/share/nginx/html
 EXPOSE 8080
 CMD ["nginx", "-g", "daemon off;"]
```

Then make the build:
```
RPI: docker build  --platform linux/arm64v8  -t kitt .
MACOS: docker build  -t kitt .

```

Don't forget to export:
```
docker save -o kitt.tar kitt
```

Run locally:
```
docker run -d --name kitt-container -p 8080:80 kitt
```
NOTE: This method uses low ram

## Installing docker on the RPI :
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

## Running on the RPI :

Load the docker image
```
docker load -i ./kitt.tar
```

List the existing docker images to verify if it was correctly loaded
```
docker images
```

Run the Docker image
```
docker run kitt
```
