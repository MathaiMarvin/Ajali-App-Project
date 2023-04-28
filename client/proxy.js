const express = require('express');
const request = require('request');

const app = express();

app.use('/tawk-to-script', (req, res) => {
  const url = 'https://embed.tawk.to/644ae5b931ebfa0fe7fad07b/1gv292nh0/default';
  req.pipe(request(url)).pipe(res);
});

app.listen(3001, () => {
  console.log('Proxy server listening on port 3001');
});
