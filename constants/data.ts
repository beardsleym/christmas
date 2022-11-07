import {
  craftList,
  kitchenList,
  decoratingList,
  outingsList,
  homeList,
  moviesList,
} from "./en";

import {
  craftListFR,
  kitchenListFR,
  decoratingListFR,
  outingsListFR,
  homeListFR,
  moviesListFR,
} from "./fr";

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

const getCategoryList = (val: string, locale: string) => {
  if (locale === "fr") {
    switch (val) {
      case "Kitchen":
        return kitchenListFR;
      case "Outings":
        return outingsListFR;
      case "Decorating":
        return decoratingListFR;
      case "Christmas Movies":
        return moviesListFR;
      case "Craft & Create":
        return craftListFR;
      case "Fun at Home":
        return homeListFR;
      default:
        return [];
    }
  } else {
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
  }
};

export const getItemsFromCategory = (category: string, locale: string) => {
  const categoryList = getCategoryList(category, locale);
  if (categoryList?.length) {
    let newCategory: string = category;
    if (locale === "fr") {
      // get french category
      const cat = categories.find((i) => i.en === category);
      newCategory = cat?.fr || "";
    }
    return categoryList.map((i) => {
      const container: itemProps = { text: i, category: newCategory }; // display on :id page
      return container;
    });
  } else {
    return [];
  }
};
