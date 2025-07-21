
import json
import boto3

bedrock = boto3.client("bedrock-runtime", region_name="us-east-1")
model_id = "mistral.mistral-7b-instruct-v0:2"

def lambda_handler(event, context):
    try:
        body = json.loads(event.get("body", "{}"))
        prompt = body.get("message", "")
        if not prompt:
            raise ValueError("No message provided")

        formatted_prompt = f"<s>[INST] {prompt} [/INST]"

        payload = {
            "prompt": formatted_prompt,
            "max_tokens": 512,
            "temperature": 0.7
        }

        response = bedrock.invoke_model(
            modelId=model_id,
            body=json.dumps(payload),
            contentType="application/json",
            accept="application/json"
        )

        response_body = json.loads(response["body"].read())
        answer = response_body.get("outputs", [{}])[0].get("text", "No response.")

        return {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "OPTIONS,POST"
            },
            "body": json.dumps({ "response": answer })
        }

    except Exception as e:
        return {
            "statusCode": 500,
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "OPTIONS,POST"
            },
            "body": json.dumps({ "error": str(e) })
        }

