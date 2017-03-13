# udata-admin

A complete administration tool for [udata](https://github.com/opendatateam/udata).

_We are currently extracting this tool from the main codebase. Work in progress!_

## Develop

### Prerequisites

* [Node.js](https://nodejs.org/en/) >= 6
* [yarn](https://yarnpkg.com)

### Install dependencies

```bash
yarn
```

### Configure

```bash
cp config.example.json config.json
```

Then edit the `config.json` file to add you own settings, especially your `apiKey` and `apiRootUrl`.

### Start the development server

```bash
yarn dev
```

The development server will watch your changes on the frontend codebase, but for now you have to refresh your window yourself.

### Run tests

```bash
yarn test
```

## License

MIT
