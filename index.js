import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const port = process.env.PORT;
export const Data = [
  {
    id: 1,
    year: 2016,
    GainPopulation: 80000,
    LostPopulation: 823,
  },
  {
    id: 2,
    year: 2017,
    GainPopulation: 45677,
    LostPopulation: 345,
  },
  {
    id: 3,
    year: 2018,
    GainPopulation: 78888,
    LostPopulation: 555,
  },
  {
    id: 4,
    year: 2019,
    GainPopulation: 90000,
    LostPopulation: 4555,
  },
  {
    id: 5,
    year: 2020,
    GainPopulation: 15300,
    LostPopulation: 234,
  },
  {
    id: 6,
    year: 2021,
    GainPopulation: 7300,
    LostPopulation: 334,
  },
];

app.use(cors());
app.get("/population", (req, res) => {
  res.json(Data);
});

app.listen(port, () => {
  console.log(`Server Starts On Port ${port}`);
});
