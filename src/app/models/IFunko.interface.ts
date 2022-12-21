interface IFunko {
  Category: string;
  Collection: string;
  Number: number;
  Name: string;
  Serial: string;
  Comment: string;
  Size: number;
  Features: string[];
  Exclusive: boolean;
  Stamps: string[];
  Images: IImage[];
}
