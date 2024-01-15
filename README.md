# Discord Stock Bot🏛️

## Introduction

The Discord Stock Bot is a NodeJS application that utilizes the Discord.js library, Discord API, and the Alpha Vantage API to retrieve real-time stock prices. It allows users in a Discord server to interact with the bot by issuing commands to retrieve information about specific stocks.

## Prerequisites

Before using the Discord Stock Bot, ensure that you have the following prerequisites installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory in your terminal.
3. Run the following command to install the required dependencies:

   ```bash
   > $ npm install
   ```

## Configuration

1. Create a `config.json` file in project root
2. Add your Discord Bot token to  `config.json`
3. Add your Alpha Vantage API token to `config.json`

  ```bash
  {
    "token": 'your-discord-bot-token'
    "API-KEY": 'your-alpha-vantage-api'
  }
  ```

## Usage

1. Run the bot with the following command: 

  ```bash
  > $ node index.js
  ```

2. The bot will now be online and ready to respond to commands in your Discord Server
