const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  //Simulating the STM sending data
  const interval = setInterval(() => {
    const mockData = {
      speed: (Math.random() * 100).toFixed(2),  //Speed between 0-100 randomly
      rpm: (Math.random() * 8000).toFixed(0),
      engineLoad: (Math.random() * 100).toFixed(0),
    };
    ws.send(JSON.stringify(mockData));
  }, 1000); //sends every second

  ws.on('close', () => {
    clearInterval(interval);
    console.log('Client disconnected');
  });
});
