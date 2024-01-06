export interface IConfig {
  gpt_apikey: string,
  gpt_server: string,
  password: string,
  pattern: string,
  pop3_server: string,
  smtp_port: number,
  smtp_server: string,
  username: string,
}

export interface ILog {
  name: string,
  content: string,
}