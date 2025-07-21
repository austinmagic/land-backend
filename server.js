app.get("/search", (req, res) => {
  const { district, mouza, plot } = req.query;

  // Dummy data
  const landData = [
    {
      district: "ঢাকা",
      mouza: "বনানী",
      owner: "রহিম উদ্দিন",
      plot: "১৩৪/১",
      area: "১.৩ বিঘা",
      usage: "আবাসিক",
    },
    {
      district: "নদিয়া",
      mouza: "ধানতলা",
      owner: "রাজেশ পাল",
      plot: "১২৩৪",
      area: "০.১২ একর",
      usage: "বসতবাড়ি",
    },
    // Add more entries as needed
  ];

  const results = landData.filter((item) => {
    const matchDistrict = district ? item.district.includes(district) : true;
    const matchMouza = mouza ? item.mouza.includes(mouza) : true;
    const matchPlot = plot ? item.plot.includes(plot) : true;
    return matchDistrict && matchMouza && matchPlot;
  });

  if (results.length > 0) {
    res.json(results[0]); // Return first match for now
  } else {
    res.status(404).json({ error: "কোনও তথ্য পাওয়া যায়নি।" });
  }
});

