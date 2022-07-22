import { fetchCoffeeStores } from "../../lib/coffee-stores";

const getCoffeeStoreByLocation = async (req, res) => {
  try {
    const { latLong, limit } = req.query;
    const response = await fetchCoffeeStores(latLong, limit);
    res.status(200);
    res.json(response);
  } catch (err) {
    console.error('There is an error', err);
    res.status(500);
    res.json({ message: 'Somthing went wrong' });
  }
};

export default getCoffeeStoreByLocation;