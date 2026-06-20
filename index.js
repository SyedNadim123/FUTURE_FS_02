const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));
let leads = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', source: 'Website', status: 'new', notes: [] },
  { id: 2, name: 'Brian Lee', email: 'brian@example.com', source: 'Referral', status: 'contacted', notes: [] }
];

app.get('/leads', (req, res) => {
  res.json(leads);
});
app.post('/leads', (req, res) => {
  const newLead = {
  id: leads.length + 1,
  name: req.body.name,
  email: req.body.email,
  source: req.body.source,
  status: 'new',
  notes: []
};
  leads.push(newLead);
  res.json(newLead);
});
app.patch('/leads/:id', (req, res) => {
  const lead = leads.find(l => l.id === parseInt(req.params.id));
  if (!lead) {
    return res.status(404).json({ error: 'Lead not found' });
  }
  lead.status = req.body.status;
  res.json(lead);
});
app.post('/leads/:id/notes', (req, res) => {
  const lead = leads.find(l => l.id === parseInt(req.params.id));
  if (!lead) {
    return res.status(404).json({ error: 'Lead not found' });
  }
  lead.notes.push(req.body.note);
  res.json(lead);
});
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});