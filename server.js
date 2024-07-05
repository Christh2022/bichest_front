import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const CMC_API_KEY = process.env.CMC_API_KEY;

app.use(cors());
app.get('/api/data', async (req, res) => {
    try {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
            headers: {
                'X-CMC_PRO_API_KEY': CMC_API_KEY
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    }
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});

