# ExpressJS + ReactJS(Vite) Template
This template is for using ReactJS in the frontend and ExpressJS in the backend.

Vite ReactJS uses TypeScript. Express uses default JavaScript.

## Inital Setup
```
cd server/
npm init -y
```
Inside server/package.json rename
`"main": "index.js"` to `"main": "server.js"`

```
touch server.js
npm i express
npm i nodemon -D
```

Inside server/package.json inside `"scripts": {`
```
"start": "node server",
"dev": "nodemon server" 
```

```
cd ..
cd client/
npm create vite@latest .
```

## NOTE:
**Client** is for ReactJS and uses Vite + TypeScript.

**Server** is for API and uses ExpressJS + Nodemon + JavaScript.

## Second Setup
Start Vite by going to `cd/client` and typing `npm run dev`.

Start Express by going to `cd/server` and typing `npm run dev` to start up the server with nodemon and go to `http://localhost:4000/api` in the browser.

Go to the client folder and inside package.json add `"proxy": "http://localhost:4000",`.

Go to client in the browser with `http://localhost:5173/`.

Go to server in the browser with `http://localhost:4000/api`.

## Setup CORS (Cross-Origin Resource Sharing)
Since client runs on port 5173 and server runs on port 4000.

Open a third terminal (the other two being Vite and ExpressJS):
```
cd server
npm install cors
```

Go to client/package.json and add
`"proxy": "http://localhost:4000",` below `"name": "client",`.

The setup for CORS can be found in `server/server.js` and `client/vite.config.ts`. Just look at the code and copy paste on other projects if needed.
