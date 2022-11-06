import {
  craftList,
  kitchenList,
  decoratingList,
  outingsList,
  homeList,
  moviesList,
} from "./en";
interface itemProps {
  text: string;
  category: string;
}

export interface categoryProps {
  en: string;
  fr: string;
  [key: string]: string;
}

export const categories: categoryProps[] = [
  // display on preferences page and use for logic
  { en: "Craft & Create", fr: "Travaux Manuels" },
  { en: "Kitchen", fr: "Dans la cuisine" },
  { en: "Decorating", fr: "Décorations" },
  { en: "Outings", fr: "Sorties" },
  { en: "Fun at Home", fr: "S'amuser à la maison" },
  { en: "Christmas Movies", fr: "Films de Noël" },
];

export const getItemsFromCategory = (category: string) => {
  const categoryList = getCategoryList(category);
  return categoryList.map((i) => {
    console.log(i);
    const container: itemProps = { text: i, category }; // display on :id page
    return container;
  });
};

const getCategoryList = (val: string) => {
  switch (val) {
    case "Kitchen":
      return kitchenList;
    case "Outings":
      return outingsList;
    case "Decorating":
      return decoratingList;
    case "Christmas Movies":
      return moviesList;
    case "Craft & Create":
      return craftList;
    case "Fun at Home":
      return homeList;
    default:
      return [];
  }
};
