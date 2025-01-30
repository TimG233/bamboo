export interface Credentials {
  TOKEN: string
  APPLICATION_ID: string
  DEV_GUILD: string
  OWNER_ID: string
  DEV_CHANNEL_ID?: string
  REAL_IP?: string
}

export type DeployScope = "dev" | "global"

export interface QRKeyResponse {
  code: number
  unikey: string
}

export interface QRCodeResponse {
  qrurl: string
  qrimg: string
}

export interface QRCheckResponse {
  code: number
  cookie: string
}
