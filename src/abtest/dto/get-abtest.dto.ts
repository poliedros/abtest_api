import { ABEventDto } from './abevent.dto';
import { ABSideDto } from './abside.dto';

export class GetABTestDto {
  name: string;
  split_strategy: string;
  running: boolean;
  client: string;
  events: ABEventDto[];
  sides: ABSideDto[];
}
