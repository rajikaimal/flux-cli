# flux-cli

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
#### flux init <projectname>
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
alias: k (k was derived to reflect the constant signature usually used mathematics)  
Creates a new constant flie within the provided module.

- When creating individual files flux-cli expects you to be in the root of the create project

--------
### Todos

 - Create new module option.
 - Create individual files without the need of an existing module.

### Contributing guide
 - Use guildelines provided in [CONTRUBUTING.md]()

License
----

MIT
