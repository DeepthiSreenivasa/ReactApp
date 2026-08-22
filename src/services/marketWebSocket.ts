import { env } from '../config/env';

export const connectMarketWebSocket = () => {
  const WS_URL = `wss://ws.twelvedata.com/v1/quotes/price?apikey=${env.VITE_TWELVE_DATA_API_KEY}`;

  const socket = new WebSocket(WS_URL);

  socket.onopen = () => {
    console.log('WebSocket connected');

    //     socket.send(
    //       JSON.stringify({
    //         action: 'subscribe',
    //         params: {
    //           symbols: 'AAPL',
    //         },
    //       })
    //     );
    //      const heartbeat = setInterval(() => {
    //       if (socket.readyState === WebSocket.OPEN) {
    //         socket.send(
    //           JSON.stringify({
    //             action: 'heartbeat', //Not to remove the connection, every 10sec tell Im waiting for any response u send
    //           })
    //         );
    //       }
    //     }, 10_000);

    //     socket.addEventListener('close', () => {
    //     clearInterval(heartbeat);
    //   });
  };

  socket.onmessage = (event) => {
    console.log('Websocker message::', event.data);
  };

  socket.onerror = (error) => {
    console.log('WebSocket Error::', error);
  };

  socket.onclose = () => {
    console.log('WebSocket closed');
  };

  return socket;
};
