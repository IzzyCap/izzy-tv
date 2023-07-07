# Izzy TV

Izzy TV is a lite version of the web page [rakute.tv](https://www.rakuten.tv/es?content_type=movies&content_id=misterios-del-titanic). It has a main page with a slider for each category:

- Best Movies.
- Store Movies.
- Original Movies.
- Action Movies.
- Drama Movies.
- Suspense Movies.
- Family Movies.

Each Slider have n Movie items. When you click a item a detail page of the movie will apear with the plot and a button to watch the trailer.

## Dependencies

- React.
- Redux: Predictable state container.
- Vite: Bundler.
- Vitest: Vite-native unit test framework.
- Styled Components: Library that allows you to write CSS in JS while building custom components in Reactjs.

## How to start?

Install all dependencies:

```
yarn
```

Start development mode:

```
yarn dev
```

Open a browser and navigate to [127.0.0.1:3000/](http://127.0.0.1:3000/)

## How to build packages?

Install all dependencies:

```
yarn
```

Create build (on dist folder):

```
yarn build
```

## How to pass unit tests?

Install all dependencies:

```
yarn
```

Start passing unit tests:

```
yarn test
```

## TODO
- Add more unit test.
- Create loading and error page.
- Implement Loopable sliders.
- Improve docs.
