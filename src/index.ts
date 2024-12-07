import express from 'express';
import bodyParser from 'body-parser';
import bot from './bots';
import { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post(`/bot${process.env.BOT_TOKEN}`, async (req: Request, res: Response) => {
  try {
    await bot.handleUpdate(req.body);
    res.status(200).send('OK');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/', (req: Request, res: Response) => {
  res.send('Bot is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
