import { OverviewState } from '../types'

export const mockEmptyOverviewData: OverviewState = {
  companyName: '',
  symbol: '',
  website: '',
  description: ''
}

export const mockAaplOverviewData: OverviewState = {
  companyName: 'Apple Inc.',
  symbol: 'AAPL',
  website: 'http://www.apple.com',
  description:
    'Apple Inc is designs, manufactures and markets mobile communication and media devices and personal computers, and sells a variety of related software, services, accessories, networking solutions and third-party digital content and applications.'
}

export const mockFbOverviewData: OverviewState = {
  companyName: 'Facebook Inc.',
  symbol: 'FB',
  website: 'http://www.facebook.com',
  description:
    "Facebook Inc is the world's largest online social network. Its products are Facebook, Instagram, Messenger, WhatsApp, and Oculus. Its products enable people to connect and share through mobile devices and personal computers."
}
