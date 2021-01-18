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
  ]
  // singleSelection :boolean = false;
  //   idField: string= '';
  //   textField: string = '';
  //   selectAllText: string = 'Select All';
  //   unSelectAllText:string = 'UnSelect All';
  //   itemsShowLimit: number = 3;
  //   allowSearchFilter: boolean = true;
}