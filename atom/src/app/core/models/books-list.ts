export class Books {
  kind: string;
  totalItems: number;
  items: [
    {
      id: string,
      volumeInfo: {
        title: string,
        publisher: string,
        publishedDate: Date,
        authors: String[]
      }
    }
  ];
}
