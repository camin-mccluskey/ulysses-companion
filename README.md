# Ulysses Companion

[Ulysses Companion](https://camin.xyz/ulysses-companion) is an interactive ebook, with reading notes for James Joyce's modern classic Ulysses. This site is a port of www.joyceproject.com that improves on the UX by allowing users to open annotations while reading the text and tracks which notes have already been read (as the notes are often repeated where relevant in the text).

PRs are welcome to extend the notes - a contribution guide is coming soon.

## Developing the Project

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Future Features
- [x] Migrate the annotation visit logic to Redux
- [ ] Store opened note history in browser storage to allow users to close tab and return later
- [ ] Add user generated content - voting on notes, adding new notes
- [ ] Allow users to persist their reading history between browser data deletion with accounts
- [ ] Reduce the page load time by dynamically loading content from server
