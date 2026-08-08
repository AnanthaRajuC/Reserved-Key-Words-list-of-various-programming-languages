const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;
  const lang = query.q || query.lang || '';
  const dir = path.join(__dirname, 'language-files');

  let targetFile = null;
  try {
    const files = fs.readdirSync(dir);
    targetFile = files.find(f => f.toLowerCase().includes(lang.toLowerCase()));
  } catch (e) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Directory not found' }));
  }

  if (!targetFile) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Language not found' }));
  }

  const content = fs.readFileSync(path.join(dir, targetFile), 'utf-8');
  const keywords = [];
  const lines = content.split('\n');
  for (const line of lines) {
    const match = line.match(/^\s*-\s*([a-zA-Z_][a-zA-Z0-9_]*)/);
    if (match) {
      keywords.push(match[1]);
    }
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(keywords));
});

server.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});
