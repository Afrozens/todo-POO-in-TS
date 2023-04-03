import ListItem from "./ListItem";

interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(itemObj: ListItem): void;
  removeItem(id: string): void;
}

export default class FullList implements List {
  //instance for indirectly manipulate methods and read
  static instace: FullList = new FullList();

  private constructor(private _list: ListItem[] = []) {}
  //all methods for manipulate item and list item
  get list(): ListItem[] {
    return this._list;
  }

  load(): void {
    const storedList: string | null = localStorage.getItem("myList");
    if (typeof storedList !== "string") return;
    //get array of tasks
    const parsedList: { _id: string; _item: string; _isChecked: boolean }[] =
      JSON.parse(storedList);
    //asign that array of tasks
    parsedList.forEach((itemObj) => {
      const newListItem = new ListItem(
        itemObj._id,
        itemObj._item,
        itemObj._isChecked
      );
      FullList.instace.addItem(newListItem);
    });
  }

  save(): void {
    //save in localstorage
    localStorage.setItem("myList", JSON.stringify(this._list));
  }

  clearList(): void {
    //remove all tasks and also in localstorage
    this._list = [];
    this.save();
  }

  addItem(itemObj: ListItem): void {
    this._list.push(itemObj);
    this.save();
  }

  removeItem(id: string): void {
    this._list = this._list.filter((item) => item.id !== id);
    this.save();
  }
}
