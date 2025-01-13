# Señor Sol 🌞  

## Project Overview  

**Señor Sol** is an application designed for people who appreciate the beauty of sunrises and sunsets. With our app, users can:  
- Input a ZIP code, date, and time zone to get the corresponding sunrise and sunset times.  
- Use a "Feeling Lucky" feature to receive sunrise and sunset times for a randomly generated ZIP code.  

## Features  
- **Custom Search**: Enter a ZIP code and date to receive detailed sunrise and sunset data.  
- **Feeling Lucky**: Randomly generates a ZIP code to surprise you with sunrise and sunset details.  

## APIs  

We utilized the following APIs to power **Señor Sol**:  

### [Zippopotam API](https://api.zippopotam.us)  
Endpoint: `https://api.zippopotam.us/us/${zipCode}`  
This API provides geographic details for a given ZIP code. We extract:  
- **Latitude**  
- **Longitude**  
- **City**  
- **State**  

### [Sunrise-Sunset API](https://sunrise-sunset.org/api)  
Endpoint: `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=${date}&formatted=0`  
This API provides sunrise and sunset data for specific coordinates and dates. We extract:  
- **Sunrise time**  
- **Sunset time**  
- Twilight times (optional)  

Inputs include:  
- Latitude  
- Longitude  
- Date  
- Time zone  

## Demo  

Watch a walkthrough video of **Señor Sol** in action:  
[🎥 Demo Video](https://drive.google.com/file/d/1gsElHyw9wpyxlAql7VPqxsXKN66m7aPE/view?usp=sharing)  
