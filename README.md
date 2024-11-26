# URL Shortener

A simple and efficient URL shortener application built using Node.js, Express, and MongoDB. This application allows users to shorten long URLs and redirect to the original URLs using the shortened links.


## Features

- Generate shortened URLs.

- Redirect from a shortened URL to the original URL.

- Store visit history (timestamps) for analytics.

  

## 🚀 How to Run Locally


Follow these steps to run the application on your local machine:


##1. Clone the Repository
```bash

git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```


## 2. Install Dependencies

Make sure you have Node.js installed. Then, run:

```bash
npm install
```


## 3. Set Up MongoDB

Use a local MongoDB server or a cloud service like MongoDB Atlas.
Replace the MongoDB connection string in index.js with your own URI. Example:

```bash
const mongoURI = "your-mongodb-uri";
```


## 4. Start the Server

Run the app in development mode using:

```bash
npm start
```




# 📋 API Endpoints

## 1. Generate Short URL
   
POST /short-url
```bash
Request Body:

{
  "url": "https://example.com"
}


Response:

{
  "id": "shortid123"
}

```
## 2. Redirect to Original URL

GET /short-url/:shortId

Example: Visiting http://localhost:3000/short-url/shortid123 redirects to the original URL



#Testing with Postman

## Step 1: Install Postman

Download and install Postman from Postman's official website.


## Step 2: Test the API

### a. Generate a Short URL

Open Postman and create a POST request.

Set the endpoint to: http://localhost:3000/short-url.

Go to the Body tab, select raw, and set the format to JSON.

Add the following JSON:
``` bash
Copy code
{
  "url": "https://example.com"
}
```
Click Send to receive a response like:
```bash
Copy code
{
  "id": "shortId123"
}
```
### b. Test the Redirect

Create a GET request in Postman.

Set the endpoint to: http://localhost:3000/shortId123 (replace shortId123 with the ID from the previous step).

Click Send to observe the redirection or see the response.

## Sample Request and Responses 

## POST  /short-url

![image](https://github.com/user-attachments/assets/ea178405-9b97-4634-915a-87281502ac2d)


## GET  / https://www.facebook.com/

![image](https://github.com/user-attachments/assets/9da71848-c2b3-414b-9b37-3fec3e0ca5ad)


## Database samples in MongoDBCompass

MongoDb Collection Schema example


```bash

id
6745f785e74cf91a156a84e4
shortid
"hQ7eys4Q"
redirectURL
"https://www.facebook.com/"

visitHistory
Array (2)
createdAt
2024-11-26T16:29:57.598+00:00
updatedAt
2024-11-26T16:32:18.689+00:00
__v
2

```

![image](https://github.com/user-attachments/assets/f36edb47-382f-4f16-a250-cf54b9acce62)

## 🌐 Deploying the Application

Short_url is deployed on Railway

- Sign Up for Railway: Visit Railway.app and create an account if you don’t have one.

- Create a New Project: Click on "New Project."
 Select "Deploy from GitHub Repo."
 Link your GitHub account and choose this repository.
 Add Environment Variables:

- Go to the project settings.
 Add an environment variable:
 Key: MONGO_URI
 Value: Your MongoDB URI.
 Start the Deployment:

- Railway will automatically detect the package.json file and install dependencies.
 It will run npm start by default to start the application.
 Access Your App:
 Once deployed, Railway will provide a live URL for your app, e.g., https://your-app-name.up.railway.app.














