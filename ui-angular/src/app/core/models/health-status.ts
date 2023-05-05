// export class HealthStatus {
//   constructor(public status: string) {
//   }
//
//   public static UP = 'UP';
//   public static DOWN = 'DOWN';
//   public static NOT_STARTED = 'NOT_STARTED';
//   public static LOADING = 'LOADING';
//
//
//   get isUp(): boolean {
//     return HealthStatus.UP === this.status;
//   }
//
//   static get loading(): HealthStatus {
//     return new HealthStatus(this.LOADING);
//   }
//
//   static get notStarted(): HealthStatus {
//     return new HealthStatus(this.NOT_STARTED);
//   }
// }

// Not sure if this static class is necessary
// I think regular type will do

export type HealthStatus = 'UP' | 'DOWN' | 'NOT_STARTED' | 'LOADING';

// HealthStatus.UP = 'sga';
