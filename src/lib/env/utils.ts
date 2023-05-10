import * as _ from 'lodash';

export function getOsEnvBoolean(key: string, defaultValue?: string): boolean {
  return toBool(_.get(process.env, key, defaultValue));
}
export function getOsEnv(key: string, defaultValue?: string): string {
  return _.get(process.env, key, defaultValue);
}
export function getOsEnvArray(key: string, delimiter: string = ','): string[] {
  return _.get(process.env, key, []).split(delimiter);
}
export function getOsEnvNumber(key: string, defaultValue?: number): number {
  return toNumber(_.get(process.env, key), defaultValue);
}
export function toNumber(value: string, defaultValue: number = 10): number {
  return parseInt(value, defaultValue);
}
export function toBool(value: string): boolean {
  return /true/i.test(value);
}
