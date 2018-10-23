import io from 'socket.io-client'

export interface QUOTE {
  marketPercent: number
  lastSalePrice: number
  lastSaleSize: number
}

export class SocketClient {
  public subscriber: string = ''
  public socketIO: SocketIOClient.Socket

  constructor(url: string) {
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
      const newData: QUOTE = {
        marketPercent: jsonData.marketPercent,
        lastSalePrice: jsonData.lastSalePrice,
        lastSaleSize: jsonData.lastSaleSize
      }
      handleLiveQuoteData(newData)
    })
  }

  public onError = (handleError: () => void) => {
    this.socketIO.on('error', () => {
      handleError()
    })
  }
}

export default SocketClient
