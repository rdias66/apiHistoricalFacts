import express from 'express';
import facts from './data_collection.js';
import { searchFact, validateYearInput, findFactPos } from './service.js';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  const year = req.query.ano;
  if (validateYearInput(year)) {
    const result = searchFact(year, facts);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ Error: 'Fact not found for the specified year' });
    }
  } else {
    res.status(400).json({ Error: 'Invalid year provided' });
  }
});

app.post('/', (req, res) => {
  const newFactYear = req.query.ano;
  if (validateYearInput(newFactYear)) {
    const existingFact = searchFact(newFactYear, facts);
    if (!existingFact) {
      const newFact = { Ano: newFactYear, Fato: req.query.fato };
      facts.push(newFact);
      res.status(200).json({ Message: 'Fact added successfully' });
    } else {
      res.status(409).json({ Error: 'Fact already exists for the specified year' });
    }
  } else {
    res.status(400).json({ Error: 'Invalid year provided' });
  }
});

app.delete('/', (req, res) => {
  const yearToDelete = req.query.ano;
  if (validateYearInput(yearToDelete)) {
    const factPos = findFactPos(yearToDelete, facts);
    if (factPos >= 0) {
      facts.splice(factPos, 1);
      res.status(200).json({ Message: `Fact for year ${yearToDelete} deleted` });
    } else {
      res.status(404).json({ Error: 'Fact not found for the specified year' });
    }
  } else {
    res.status(400).json({ Error: 'Invalid year provided' });
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
