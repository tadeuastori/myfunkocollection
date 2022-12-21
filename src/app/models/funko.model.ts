import { Image } from './image.model';

export class Funko {
  public Category: string;
  public Collection: string;
  public Number: number;
  public Name: string;
  public Serial: string;
  public Comment: string;
  public Size: number;
  public Features: string[];
  public Exclusive: boolean;
  public Stamps: string[];
  public Images: Image[];

  constructor(data?: Funko) {
    this.Category = '';
    this.Collection = '';
    this.Number = Number.NaN;
    this.Name = '';
    this.Serial = '';
    this.Comment = '';
    this.Size = Number.NaN;
    this.Features = [];
    this.Exclusive = false;
    this.Stamps = [];
    this.Images = [];

    if (!!data) {
      Object.assign(this, data);
    }
  }
}
