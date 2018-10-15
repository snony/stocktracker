import io from 'socket.io-client';
const url = 'https://ws-api.iextrading.com/1.0/tops'
const socketIO = io(url)



export const connectSocket = (symbol: string) => {
    socketIO.on('connect', () => {
        emitSubscribeSymbol(symbol)
    })
}


export const disconnectSocket = () => {
    socketIO.on('disconnect', () => console.log('Disconnected.'))
}


export const emitSubscribeSymbol = (symbol: string) => {
    socketIO.emit('subscribe', symbol)
}


export const emitUnsubscribe = (symbol: string) => {
    socketIO.emit('unsubscribe', symbol)
}

export interface QUOTE {
    marketPercent: number
    lastSalePrice: number
    lastSaleSize: number
}
export const listenOnMessage = (handleLiveQuoteData: (data: QUOTE) => void) => {
    socketIO.on('message', (data: string) => {
        const jsonData = JSON.parse(data)
        const newData: QUOTE = { marketPercent: jsonData.marketPercent, lastSalePrice: jsonData.lastSalePrice, lastSaleSize: jsonData.lastSaleSize }
        handleLiveQuoteData(newData)
    })
}

export default { connectSocket, disconnectSocket, emitSubscribeSymbol, emitUnsubscribe, listenOnMessage }