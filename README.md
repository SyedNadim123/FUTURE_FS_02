# Mini CRM

This project is the second task of the Future Interns Full Stack Web Development
internship. It is a simple client lead management system, built to demonstrate
backend and frontend integration using Node.js, Express, and plain JavaScript.

## What the application does

The application keeps a list of client leads, each with a name, an email address,
a source, and a status. A lead can be added through a form on the homepage. Once
added, the status of any lead can be changed between new, contacted, and converted
using a dropdown menu next to that lead. Each lead also has its own notes section,
where short follow up notes can be typed and saved against that specific lead.

## How it was built

The backend is written in Node.js using the Express framework. It exposes a small
set of routes that allow leads to be listed, created, updated, and have notes
attached to them. The frontend is a single HTML page with plain JavaScript, served
directly by the Express server. There is no separate frontend framework involved.
Data is currently held in the server's memory rather than in a database, which
means the list of leads resets whenever the server restarts. This was a deliberate
decision made to focus the available time on getting the core features working
correctly rather than introducing a database connection.

## Running the project

After cloning the repository, install the dependencies and start the server with
the following commands.

npm install
node index.js

Once the server is running, the application can be viewed by opening
http://localhost:3000 in a web browser.

## Available routes

The server responds to a small number of routes. A request to /leads using GET
returns the full list of current leads as JSON. A request to the same address
using POST creates a new lead from the submitted name, email, and source, and
assigns it a starting status of new. A request to /leads followed by a lead's id
using PATCH updates that lead's status. A request to /leads followed by a lead's
id and then notes, using POST, adds a new note to that lead.

## Notes on scope

This project was built as a learning exercise and represents the first backend
application written from scratch during the internship. The secure admin access
feature mentioned as optional in the task brief was not implemented, and the
storage layer remains in memory rather than a proper database such as MongoDB or
MySQL. Both would be reasonable next steps if this project were taken further.
