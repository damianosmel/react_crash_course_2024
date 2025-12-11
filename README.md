# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# Steps following the tutorial
- Initial step -> Vite + React working page
Follow video and do the following commands:

```
npm create vite@latest /home/user/where/to/add/react_project/folder

cd /home/user/where/to/add/react_project/folder

npm install //add node_modules

npm run dev //run application on selected port (3000) of the localhost 
```

**Result:** Vite + React webpage with count is button working all fine.

- Add Tailwindcss
Add TailwindCSS using postCSS: https://tailwindcss.com/docs/installation/using-postcss

`npx tailwindcss init -p` -> does not work

therefore I have written myself the tailwind.config.js, postcss.config.js, src/index.css

**Result:** webpage shows the word App with large font (5-xl).

- Add components
For the main parts of the webpage, add components 

**Result:** webpage is built using components for the parts: navbar, hero, cards.

- Add JobListings component

Add JobListings and JobListing (single job) as components

**Result:** webpage renders the jobs, with information got from each job element in jobs.json

- Add button to allow user to see more or less for a job description

**Result:** webpage contains a button on the job listing, pressing the button shows more of its description and pressing again the button shows less

- Add map marker as icon for the location on job listing

`npm install react-icons`

**Result:** webpage shows map-marker on the location of each job

- Use routes to enable usage of main layout and home page

`npm install react-router-dom`

**Result:** webpage shows navbar, hero, job cards and view all jobs

- Add `<Link>` instead of `<a>` tags not to have change in the banner when we click a link

**Result:** webpage links go to their respective page without banner to be refreshed

- Add NotFound page

**Result:** when user requests a non-existing page, we go the not-found page

- Render Jobs tab using JobListings component

**Result:** rendered jobs page with all jobs

 - Add json-server to mock an API just with a json
 Extra: add spinner for the jobs when you await the response from the API

 ```
    npm i -D json-server
    add this key-value pair in scripts dictionary in README.md
    "server": "json-server --watch src/jobs.json --port 5000"
    npm run server
 ```

 ` npm i react-spinners `

 - Limit number of displayed jobs in home using API