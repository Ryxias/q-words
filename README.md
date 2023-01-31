# q-words
A totally cool and good project for me to learn typescript for... reasons.

Make sure to delete this repo after it's finished so the source code doesn't
leak everywhere.

## Prerequisites
Assumes a Darwin machine.

You will need node & typescript.

```
brew install npm
npm install -g typescript
```

Use `npm` to install any dependencies that are necessary for development:

```
npm install --include=dev
```

## Usage
Here we provide bare bones way of running the given test case in the question prompt email:

```
npm run build
npm run start
```

## Tests
Here is how you run unit tests.

```
npm run build
mpm run test
```

## General Development
You can lint your code using `tslint`:

```
npm run lint
```

Or attempt auto-fixing via:

```
npm run fmt
```
