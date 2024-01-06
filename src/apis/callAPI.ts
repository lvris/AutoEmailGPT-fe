import { IConfig, ILog } from "../interfaces/config.interface";
import api from "./api";

export async function getLogList(): Promise<string[]> {
  return api.get('log')
    .then(res => res.data);
}

export async function getLastTime(): Promise<{timestamp: number}> {
  return api.get('run')
    .then(res => res.data);
}

export async function getConfig(): Promise<IConfig> {
  return api.get('config')
    .then(res => res.data);
}

export async function postRun(once: boolean, interval: number = 0) {
  return api.post('run', {once, interval})
    .then(res => res.data);
}

export async function postConfig(config: IConfig) {
  return api.post('config', config)
    .then(res => res.data);
}

export async function postLog(subject: string): Promise<ILog> {
  return api.post('log', {subject})
    .then(res => res.data);
}