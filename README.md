# 🧠 Chat with Mistral (AWS Bedrock)

This is a simple web-based chatbot interface that connects to the [Mistral 7B Instruct v0.2](https://aws.amazon.com/bedrock/) model via Amazon Bedrock using AWS Lambda and API Gateway (HTTP API).

## ✨ Features

- Send user questions to Mistral via Bedrock
- Receive streamed or full responses
- Hosted with Lambda & API Gateway (serverless)
- Minimal and extendable HTML frontend
- Easily customizable

## 🖼 Demo

![screenshot](./screenshot.png) <!-- Add a screenshot of your frontend here -->

## 🧱 Architecture

[ HTML Page ]
|
fetch()
↓
[ API Gateway (HTTP API) ]
↓
[ AWS Lambda Function ]
↓
[ Amazon Bedrock - Mistral 7B ]


## 🚀 How to Deploy

### 1. Clone This Repo

```bash
git clone https://github.com/cloudcaptain9/onyeka_ai_app_bedrock.git
cd onyeka_ai_app_bedrock

2. Set Up AWS Lambda
Create a new Lambda function in AWS Console (Node.js 18+ or Python).

Paste the backend code from lambda/index.js (or your version).

Add permissions:

Attach a role with bedrock:InvokeModel permission on mistral.mistral-7b-instruct-v0:2

3. Set Up API Gateway (HTTP API)
Create a new HTTP API.

Connect your Lambda as an integration.

Add route POST /chat.

Enable CORS: allow all origins (*), methods (POST,OPTIONS), and headers (Content-Type).

4. Update HTML
Edit the frontend HTML file (index.html) and set:

javascript
Copy
Edit
fetch('https://YOUR_API_ID.execute-api.YOUR_REGION.amazonaws.com/prod/chat', { ... })
Replace with your actual deployed API Gateway invoke URL.

5. create S3 bucket and load your index.html script
 enable public access and via through browser

6. Test
Open index.html in any browser and ask a question!

Author
Onyekachi Emmanuel
DevOps Engineer | AWS | Terraform | Docker | CI/CD | Kubernetes
https://www.linkedin.com/in/onyeka-godwin
If you like this project, consider giving it a ⭐ to support!


