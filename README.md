# Orator
Orator is web application that allows you to browse, subscribe, and listen to your favorite podcasts. Users can create profile to subscribe to their favorite podcasts to stay up to date with the latest episodes.

## How it works
Orator uses `iTunes API` to search for available podcasts. The rss feed for that podcast is recheived and converted to json using `rss2json`. The rss feed allows Orator to bring you the latest epsiodes for your favorite podcast.

Users can experience their personal favorite podcasts by creating account backed by `Okta` authentication. [Okta sends user id to database to ping subscribed podcasts].

## Wireframes

### Home Page
<img src ="Wireframe_Images/Podcast-Wireframe.png" width="400">

### Login Page
<img src="Wireframe_Images/Podcast-Wireframe3.png" width="400">

### Favorites
<img src= "Wireframe_Images/Podcast-Wireframe4.png" width="400">

### Subscribed
<img src= "Wireframe_Images/Podcast-Wireframe5.png" width="400">

## Built with
* React
* React-Router-Dom
* Express
* Axios
* MongoDB
* Mongoose
* Okta
* iTunes search API
* rss2json
* TailwindCSS

## Built by
* Andrew Zoka
* Mathew Simon
* [Michael Bychkowski](https://github.com/mbychkowski)

# Developer Notes

## Create React Express App 

### About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

### Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following commands:

```
yarn install
cd client
yarn install
cd ..
```

After both installations complete, run the following command in your terminal:

```
yarn start
```

That's it, your app should be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

After confirming that you have an up to date git repository and a Heroku app created, complete the following:

1. Build the React app for production by running the following command:

```
yarn build
```
> Note: A yarn build will be required to register any new Post requests from any front-end JavaScript to to prevent any proxy server errors.

2. Add and commit all changes to git

3. Delete `package-lock.json` files and `node_modules`

3. Set `.env` configurations

```
heroku config:set REACT_APP_MEMBERSHIP_TOKEN
heroku config:set REACT_APP_ORG_URL
heroku config:set REACT_APP_CLIENT_ID
heroku config:set REACT_APP_ISSUER
heroku config:set REACT_APP_REDIRECT_URI
heroku config:set REACT_APP_ORG_SCOPE
heroku config:set REACT_APP_ORG_URL=
```

4. Push to Heroku

If all previous steps were followed correctly, your application should be deployed to Heroku!
