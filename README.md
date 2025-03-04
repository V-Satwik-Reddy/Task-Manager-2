A simple API for doing Task Managment using Express

stores the tasks in MongoData Base

to use it 

1)clone the repo
2)install the dependencies
  npm install
3)chanage the mongoose connection string to your value (use application connection)(Refer MongoDb doc for more details )
4)run the project
 npm run||node index.js

Use postman to send queries and recieve the data

1️⃣ Create a Task (POST)
URL: http://localhost:3000/tasks
Send Data: In Body (raw JSON)
{
  "title": "Buy Groceries",
  "description": "Milk, Eggs, Bread"
}
Where to send? Go to Body → raw → JSON in Postman


2️⃣ Get All Tasks (GET)
URL: http://localhost:3000/tasks
Where to send? Just enter the URL and hit Send (No body needed)

3️⃣ Get a Task by ID (GET)
URL: http://localhost:3000/tasks/{task_id}
(Replace {task_id} with an actual task _id from MongoDB)
Where to send? Enter the URL with the correct _id and hit Send


4️⃣ Update a Task (PUT)
URL: http://localhost:3000/tasks/{task_id}
Send Data: In Body (raw JSON)
json
Copy
Edit
{
  "title": "Buy More Groceries",
  "description": "Milk, Eggs, Bread, Butter"
}
Where to send? Go to Body → raw → JSON, then hit Send


5️⃣ Delete a Task (DELETE)
URL: http://localhost:3000/tasks/{task_id}
Where to send? Enter the URL with the correct _id and hit Send
