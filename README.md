# flux-cli [![npm version](https://badge.fury.io/js/flux-cli.svg)](https://badge.fury.io/js/flux-cli) [![Build Status](https://travis-ci.org/rajikaimal/flux-cli.svg?branch=master)](https://travis-ci.org/rajikaimal/flux-cli) [![npm dependencies](https://david-dm.org/rajikaimal/flux-cli.svg)](https://david-dm.org/rajikaimal/flux-cli.svg) [![Greenkeeper badge](https://badges.greenkeeper.io/rajikaimal/flux-cli.svg)](https://greenkeeper.io/) 

## What's flux-cli
flux-cli is a CLI (command line interface) for pure implementation of [flux](https://facebook.github.io/flux/) architecture.

## Installation
```
npm install -g flux-cli
```
## Documentation

### Options

* init
* action
* component
* store
* constant

--------
### flux init [projectname]
alias: i  
Generates a fresh project in current directory.

### flux action [module]:[filename]
alias: a  
Creates a new action flie within the provided module.

### flux component [module]:[filename]
alias: c  
Creates a new component flie within the provided module.

### flux store [module]:[filename]
alias: s  
Creates a new store flie within the provided module.

### flux constant [module]:[filename]
alias: k (k was derived to reflect the constant signature usually used in mathematics)  
Creates a new constant flie within the provided module.

- When creating individual files flux-cli expects you to be in the root of the created project

--------
### Todos

 - Create new module option.
 - Create individual files without the need of an existing module.

### Contributing guide
 - Use guidelines provided in [CONTRUBUTING.md](https://github.com/rajikaimal/flux-cli/blob/master/CONTRIBUTING.md)

License
----

MIT
