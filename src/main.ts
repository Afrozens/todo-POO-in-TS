import "./styles/style.css";
import FullList from "./model/FullList";
import ListItem from "./model/ListItem";
import ListTemplate from "./templates/ListTemplate";

const initApp = (): void => {
  //access indirectly with your instances
  const fullList = FullList.instace;
  const template = ListTemplate.instance;
  //select formulary
  const itemEntryForm = document.querySelector(
    "#itemEntryForm"
  ) as HTMLFormElement;

  itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault();
    
    const input = document.querySelector("#newItem") as HTMLInputElement;
    //Avoid blank spaces in submit
    const newEntryText: string = input.value.trim();
    if (!newEntryText.length) return;
    //We avoid ID collision, change the type to number and add one to make them different.
    const itemId: number = fullList.list.length
      ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
      : 1;

    const newItem = new ListItem(itemId.toString(), newEntryText)

    fullList.addItem(newItem)

    template.render(fullList)

    input.value = ""
  });

  const clearItems = document.querySelector(
    "#clearItemsButton"
  ) as HTMLButtonElement;

  clearItems.addEventListener("click", (): void => {
    fullList.clearList();
    template.clear();
  });

  fullList.load();
  template.render(fullList);
};

document.addEventListener("DOMContentLoaded", initApp);
