import { Expose } from "class-transformer";

export class Icondata {
  @Expose()
  icon: string;
  @Expose()
  code: number;
  @Expose()
  description: string;
}
