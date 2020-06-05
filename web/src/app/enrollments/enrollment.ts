import {State} from './state.enum';

export class Enrollment {
  id: number;
  // tslint:disable-next-line:variable-name
  rivalry_id: number;
  // tslint:disable-next-line:variable-name
  user_id: number;
  state: State;
  // tslint:disable-next-line:variable-name
  enrollment_date: string;
}
