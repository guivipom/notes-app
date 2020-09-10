# Notes App

The Notes App allows the user to create, delete, read and list notes from a json file. It's the first and most basic Node.js application from my portfolio and it showcases the use of the filesystem, command line arguments and how to use JSON files to store user data.

## Installation

As a prerequisite you will need to download and install [git](https://git-scm.com/downloads) and [Node.js](https://git-scm.com/downloads) if you don't have them already. After that you can clone the repository, go into the notes-app folder and execute the next command to install all the necessary dependencies. 

```bash
npm install
```

## Usage

To add a note:

```bash
node app.js add --title=title --body=='Body of the note'
```
To remove a note:
```bash
node app.js remove --title=title
```

To list notes:
```bash
node app.js list
```

To read a specific note:
```bash
node app.js read --title=title
```


## License
[MIT](https://choosealicense.com/licenses/mit/)

