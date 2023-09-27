// Import necessary dependencies
const axios = require('axios');
const { SlashCommandBuilder } = require('discord.js');
const { APIKey } = require('./config.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('quote')
    .setDescription('Quotes the current price of a Ticker.')
    .addStringOption(option =>
      option
        .setName('ticker')
        .setDescription('The ticker symbol to fetch the quote for.')
        .setRequired(true)
    ),
	
  async execute(interaction) {
    try {
      const ticker = interaction.options.getString('ticker');
      
      // Fetch the quote using Axios and the provided APIKey
      const response = await axios.get(`URL_HERE?symbol=${ticker}&apikey=${APIKey}`);
      
      if (response.status === 200) {
        const quoteValue = response.data[0];
        
        // Reply with the quote data
        await interaction.reply(
          `Here's the quote for ${quoteValue.symbol}:\n` +
          `${quoteValue.name}\n` +
          `${quoteValue.price}`
        );
      } else {
        await interaction.reply('Unable to fetch the quote. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      await interaction.reply('An error occurred while fetching the quote. Please try again later.');
    }
  },
};
