const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_KEY
);

const table = base('coffee-stores');

const createCoffeeStore = (req, res) => {
    res.json({message: 'Hello, folks!'})
}

export default createCoffeeStore;
