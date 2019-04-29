# tweets against humanity

### Goals: 
Replicate the card game Cards Against Humanity, where the white card options are tweets by Kanye West (and soon to be other tweets as well)

### Requirements
* PostgresSQL
* Node.js

### Before running the program locally
* Make sure you have databases named "tweetsagainsthumanity" and "tweetsagainsthumanity-test" in order for the code to be able to access the database
* One way to do so:
```
createdb tweetsagainsthumanity

createdb tweetsagainsthumanity-test
```

### Running the program
To run locally:
```
npm install

npm run start-dev
```
### Todo List
* add rooms
* make persistent upon refresh
* while not persistent and only one room, ban new entrants when game is already in progress


