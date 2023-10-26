import json
import requests
import sys

def call_api(url, data, method='POST'):
    try:
        if method == 'POST':
            response = requests.post(url, json=data)
        elif method == 'PUT':
            response = requests.put(url, json=data)
        else:
            print("Invalid HTTP method")
            return

        if response.status_code == 200:
            print(f"Successfully executed API. Response: {response.json()}")
        else:
            print(f"Failed to execute API. Status code: {response.status_code}, Response: {response.text}")
    except Exception as e:
        print(f"An error occurred: {e}")

def bulk_insert(file_path):
    with open(file_path, 'r') as f:
        data = json.load(f)
    
    url = "http://localhost:3000/api/createCourse"  # Replace with your API endpoint for insertion
    call_api(url, data, method='POST')

def bulk_update(file_path):
    with open(file_path, 'r') as f:
        data = json.load(f)
        
    url = "http://localhost:3000/api/updateCourse"  # Replace with your API endpoint for updating
    call_api(url, data, method='PUT')

if __name__ == "__main__":
    operation = sys.argv[1]  # 'insert' or 'update'
    file_path = sys.argv[2]  # path to JSON file
    
    if operation == 'insert':
        bulk_insert(file_path)
    elif operation == 'update':
        bulk_update(file_path)
    else:
        print("Invalid operation. Please specify 'insert' or 'update'.")
