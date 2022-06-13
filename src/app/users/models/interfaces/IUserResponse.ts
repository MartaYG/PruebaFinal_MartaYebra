import { IUser } from "./IUser"

export interface IUserResponse {
  count: number,
  items: IUser[],
}
