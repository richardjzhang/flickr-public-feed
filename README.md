This project is built with [React](https://github.com/facebook/create-react-app) and [Express](https://github.com/expressjs/express).

## Architecture
The project is split into two parts - a client side and a server side. All the React client side files and dependencies are contained within the `client` folder. The Express app (`server.js`) and respective dependencies are contained within the root. The `server.js` file serves the React build on production.

```
├── client                  # React App
    ├── public
    ├── src
    ├── .babelrc
    ├── .eslintignore
    ├── .flowconfig
    ├── .prettierignore
    ├── jsconfig.json
    ├── package.json
    ├── yarn.lock
├── server.js               # Express
├── package.json
├── README.md
├── .env.example
├── .gitignore
```

### Why?
Calling the [Flickr Public Feed API](https://www.flickr.com/services/feeds/photos_public.gne) means that we would need special headers to satisfy the CORs policy. I considered using online proxies, like [cors-anywhere](https://github.com/Rob--W/cors-anywhere), but ultimately opted to attach a server with CORS enabled to make the requests for me.

## To run the app locally
You will need to run both the client and server simultaneously:

### Client
```
cd client
yarn install
yarn start
```

### Server
```
yarn install
yarn start
```

Then open [http://localhost:3000](http://localhost:3000) to view it in the browser. Hot reloading is only available on the client side at this stage.

## How the application works
On the client side, the application calls a route in the server that fetches from the Flickr Public Feed API. Tags are passed into the search (with stop words removed in certain scenarios), and results are returned from the Flickr Public Feed API asynchronously. Once the results have been returned, the client updates the `PublicFeed` to display the following attributes of the results in a `Card` component:

- Author
- Date Taken
- Thumbnail of image
- Title
- Tags (can be toggled off or on)
- Link (clicking on the card takes you to the full size version of the image)

The results are updated as the user types, but only displays the result once the user has finished typing.

## Tests
I opted to use the Create React App's in-built testing library to perform jest tests. Unit tests on functions and snapshot tests of components have been written across the app.

## Available Scripts in the Client
In the `client` folder, you can run

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn lint`

Runs eslint on all files in the `client` folder to check if formatting matches the rules set in `.eslintrc.json`.

### `yarn flow`

Runs flow on all files marked with `// flow` or `// flow strict` at the top of the file to ensure typing has been done on props, state etc.

## Deployment

The application has been deployed on Heroku, which watches for changes to the branch `production`. This ensures deployments are intentional and that bugs cannot as easily make its way to production. Of course with more time, CI/CD could be implemented to make this more effective.

## Things I would have liked to do if given more time
* E2E tests with something like Cypress to stub the Flickr API call and mock the application
* Storybook demos of components and primitives to showcase how the components should look and interact presentationally (and with state)
* Add some transitions for when cards are loaded onto the screen after search
* Add a suggestions section for potential searches below the search bar if the user hasn’t started searching yet
* Add a CORS whitelist so that fetches are only allowed for the Flickr Public Feed API
* Debug why the Flickr favicon does not show up on production