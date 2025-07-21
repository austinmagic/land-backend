const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/search', (req, res) => {
  const { district, mouza } = req.query;
  res.json({
    district: district || 'নমুনা জেলা',
    mouza: mouza || 'নমুনা মৌজা',
    owner: 'রহিম উদ্দিন',
    plot: '১৩৪/১',
    area: '১.৩ বিঘা',
    usage: 'আবাসিক'
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
