import mqtt from "precompiled-mqtt";

const MQTT_SERVER_HOST = ''; // ADD YOUR MQTT BROKER ADDRESS HERE

const mqttInstance = mqtt.connect(MQTT_SERVER_HOST);

mqttInstance?.on('connect', function () {
  console.log("Connected to ", MQTT_SERVER_HOST);  
})


export default mqttInstance;