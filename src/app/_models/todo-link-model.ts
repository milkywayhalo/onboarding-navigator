import { Task } from './task';

export interface TodoLinkModel {
  main: Task[],
  select_Anwendungsentwickler?: Task[],
  select_Systemintegration?: Task[]
}
