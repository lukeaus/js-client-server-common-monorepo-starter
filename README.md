# Client Server Common Monorepo Starter

## About

JavaScript monorepo starter package using:

- lerna
- babel
- jest
- commitlint
- commitizen
- husky

## How To Use

Uses Lerna for package management.

Separate packages stored in `./packages`

Common devDependencies should be installed into the monorepo root package.json

`npm install --save-dev -E`

If you want to run the same script on each packages repository, either

1. use `lerna run <cmd>`; or
2. create a command in monorepo root package.json

## Commands

Get started

`npm install`

This will also run `lerna boostrap`.

All Lerna [commands](https://github.com/lerna/lerna/tree/master/commands)

### Commit changes

Run the command below. It will ask which packages you changed and will automatically create CHANGELOG.md files in modified packages.

`npm run commit`

If the commit fails, run the following to prevent having to redo the commit message

`npm run commit:retry`

#### New package

If publishing a package for first time, run this instead

`npm run publish:initial`

#### Previously published package

Git push and publish changes to git repo and publish to npm for an existing package

`npm run publish`

### Dev dependencies

All dev dependencies should be added to the top level of the project.

`npm install --save-dev -E pkg`

### Install a 3rd party package to a lerna package

`lerna add some-ext-pkg@0.1.0 --scope=my-pkg-name`

where 'my-pkg-name' is the name of your package in 'packages'.

### Install an internal lerna package to another package

Don't require from a different package (in 'pacakages').

Instead require it through the package manager.

`lerna add my-pkg-name-foo my-pkg-name-bar --scope=my-pkg-name-baz`

### Git

View changes to specific repo

`git log packages/foo`

### References

[Monorepos by example](https://codeburst.io/monorepos-by-example-part-1-3a883b49047e)
