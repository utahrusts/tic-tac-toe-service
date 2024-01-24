# Tic Tac Toe Service

This is a service that acesses a simple Postgress database hosted in Vercel to insert and read log entries for the Tic Tac Toe Game.  These
database entries are used to generate statistics about the game.  The service is hosted in Vercel and it uses the
@vercel/postgress library to read and write to the Database

---
## Requirements

This application requires both NodeJS and the Vercel CLI.  To install the Vercel CLI run:

$ npm i -g vercel@latest

## Install

    $ git clone https://github.com/utahrusts/tic-tac-toe-service.git
    $ cd tic-tac-toe-service
    $ npm install

## Configure app

The vercel.json file contains the end point configuration information.  

Postgress configuration information can be found at .env.development.local(I know you are not supposed to check in .env files to the repo!!  But this
is just a practice project)


## Running the project locally

To run the project locally 

    $ vercel dev

This GitHub repository is linked to the Vercel project.  When changes are checked into the main branch it will trigger an 
automatic build and deployment of the project.  

## End Points Avaialble through the service

The service can be accessed on Vercel using the following URL

https://tic-tac-toe-service.vercel.app/api/

### End Points

**add-logs**

Adds a new entry to the game_log table

**Query Parameters**

symbol1:  The name of the symbol picked by player 1
symbol2:  The name of the sumbol picked by player 2
rounds:   Number of rounds picked by the players

**Sample Response Body**

``` json
{
    "result": {
        "command": "INSERT",
        "fields": [
            {
                "columnID": 1,
                "dataTypeID": 23,
                "dataTypeModifier": -1,
                "dataTypeSize": 4,
                "format": "text",
                "name": "game_id",
                "tableID": 32769
            }
        ],
        "rowAsArray": false,
        "rowCount": 1,
        "rows": [
            {
                "game_id": 27
            }
        ],
        "viaNeonFetch": true
    }
}
```

**get-logs**

Returns all the entries in game_log

**Sample Response Body**

``` json
{
    "gameLog": {
        "command": "SELECT",
        "fields": [
            {
                "columnID": 1,
                "dataTypeID": 23,
                "dataTypeModifier": -1,
                "dataTypeSize": 4,
                "format": "text",
                "name": "game_id",
                "tableID": 32769
            },
            {
                "columnID": 2,
                "dataTypeID": 1043,
                "dataTypeModifier": 259,
                "dataTypeSize": -1,
                "format": "text",
                "name": "symbol1",
                "tableID": 32769
            },
            {
                "columnID": 3,
                "dataTypeID": 1043,
                "dataTypeModifier": 259,
                "dataTypeSize": -1,
                "format": "text",
                "name": "symbol2",
                "tableID": 32769
            },
            {
                "columnID": 4,
                "dataTypeID": 23,
                "dataTypeModifier": -1,
                "dataTypeSize": 4,
                "format": "text",
                "name": "rounds",
                "tableID": 32769
            },
            {
                "columnID": 5,
                "dataTypeID": 1184,
                "dataTypeModifier": -1,
                "dataTypeSize": 8,
                "format": "text",
                "name": "start_time",
                "tableID": 32769
            },
            {
                "columnID": 6,
                "dataTypeID": 1184,
                "dataTypeModifier": -1,
                "dataTypeSize": 8,
                "format": "text",
                "name": "end_time",
                "tableID": 32769
            }
        ],
        "rowAsArray": false,
        "rowCount": 20,
        "rows": [
            {
                "game_id": 1,
                "symbol1": "flower",
                "symbol2": "diamond",
                "rounds": 3,
                "start_time": "2024-01-23T16:30:03.248Z",
                "end_time": "2024-01-23T17:23:22.232Z"
            },
            {
                "game_id": 2,
                "symbol1": "flower",
                "symbol2": "diamond",
                "rounds": 3,
                "start_time": "2024-01-23T16:33:47.635Z",
                "end_time": null
            },
            {
                "game_id": 3,
                "symbol1": "flower",
                "symbol2": "diamond",
                "rounds": 3,
                "start_time": "2024-01-23T16:33:55.617Z",
                "end_time": "2024-01-23T16:38:38.675Z"
            },
          
           
        ],
        "viaNeonFetch": true
    }
}


```

**update-endtime**

Updates the end_time for the given game_log entry

**Sample Response Body**

``` json
{
    "result": {
        "command": "UPDATE",
        "fields": [],
        "rowAsArray": false,
        "rowCount": 1,
        "rows": [],
        "viaNeonFetch": true
    }
}

```

**Query Parameter**

gameId:  The id for the game_log entry to be updated

