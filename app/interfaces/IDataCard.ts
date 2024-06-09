export interface IDataCard {
  descr1: string;
  descr2: string;
  descr3: string;
  descr4: string;
  imageCard: string | undefined;
  titleCard: string;
  selectTypeCard?: string;
  id?: string;
  isFavorite?: boolean;
}