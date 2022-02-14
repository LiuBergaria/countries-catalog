# Countries Catalogue

An react native application example that display a list of all countries (using `https://restcountries.com/v3.1`) with their name and flag.

| iOS | Android |
|-----|---------|
| <img src="https://github.com/LiuBergaria/countries-catalogue/blob/master/docs/preview/ios.png?raw=true" title="iOS" /> | <img src="https://github.com/LiuBergaria/countries-catalogue/blob/master/docs/preview/android.png?raw=true" title="Android" /> |

## Features

- Infinite scroll
- Cached images (using [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image))
- Configured `eslint`, `tests` and `pre commit hook`

## Running the project

You'll need an pre-configured environment for running `react native` with:

- Node
- Yarn (or npm)

After cloning repo, execute this to install all project's dependencies:

```bash
yarn
cd ios && pod install && cd ..
```

And then to run the app on simulator:

```bash
yarn ios
```

Or for android:

```bash
yarn android
```
