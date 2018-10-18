import io from 'socket.io-client';
const url = 'https://ws-api.iextrading.com/1.0/tops'

export interface QUOTE {
    marketPercent: number
    lastSalePrice: number
    lastSaleSize: number
}

export class SocketClient {
    public subscriber: string = ''
    public socketIO: SocketIOClient.Socket
    public connected: boolean

    constructor() {
        this.socketIO = io(url)
    }

    public subscribe = (symbol: string) => {
        this.unsubscribe()
        this.subscriber = symbol
        this.socketIO.emit('subscribe', symbol)
    }

    public unsubscribe = () => {
        this.socketIO.emit('unsubscribe', this.subscriber)
    }

    public connect = (symbol: string) => {
        this.socketIO.on('connect', () => {
            this.subscribe(symbol)
        })
    }

    public disconnect = () => {
        this.socketIO.on('disconnect', () => this.unsubscribe())
    }

    public onMessage = (handleLiveQuoteData: (data: QUOTE) => void) => {
        this.socketIO.on('message', (data: string) => {
            const jsonData = JSON.parse(data)
            const newData: QUOTE = { marketPercent: jsonData.marketPercent, lastSalePrice: jsonData.lastSalePrice, lastSaleSize: jsonData.lastSaleSize }
            handleLiveQuoteData(newData)
        })
    }
}


export default SocketClient