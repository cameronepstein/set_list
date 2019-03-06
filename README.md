# set_list

This project renders my favourite Boiler Room sets.

## Set up

To set up project locally, run the following commands:

- Clone this repo `git clone https://github.com/cameronepstein/set_list.git`
- Change directory into project `cd set_list`
- Run `nvm use 10.15.3`
- Run `npm install`
- Run `npm run dev` to view project in the browser


## Project Outline

Build a simple node server + React web app that displays information about your three favourite Boiler Room sets.

You don't need to use a database (just use plain objects in your server side code), but you should make a network request to your node server to fetch information about the sets (including but not limited to title, artist, and location), and then display them in a simple list.

You can use any server/client setup you choose, but please keep it simple.

## Packages worth noting...

#### express-pino-logger and pino-colada
High quality logs from server

#### nodemon
Automatically restarts the server when an update occurs.

#### npm-run-all
Allows multiple npm scripts to run concurrently.
