export interface Item {
  id: string;
  item: string;
  isChecked: boolean;
}

export default class ListItem implements Item {
  constructor(
    private _id: string = "",
    private _item: string = "",
    private _isChecked: boolean = false
  ) {}
//method for read and modifiqued features of item in List item
  get id(): string {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
  }

  get item(): string {
    return this._item;
  }

  set item(item: string) {
    this._item = item;
  }

  get isChecked(): boolean {
    return this._isChecked;
  }

  set isChecked(isChecked: boolean) {
    this._isChecked = isChecked;
  }
}
