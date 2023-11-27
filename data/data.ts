import {
  craftsList,
  kitchenList,
  outingsList,
  hyggeList,
  moviesList,
} from "./en";

import {
  craftsListFR,
  kitchenListFR,
  outingsListFR,
  hyggeListFR,
  moviesListFR,
} from "./fr";

export interface itemProps {
  text: string;
  category: string;
}

export interface categoryProps {
  en: string;
  fr: string;
  emoji: string;
  [key: string]: string;
}

export const categories: categoryProps[] = [
  // display on preferences page and use for logic
  { en: "Craft & Create", fr: "Travaux Manuels", emoji: "🧶" },
  { en: "Kitchen", fr: "Dans la cuisine", emoji: "🍪" },
  { en: "Outings", fr: "Sorties", emoji: "👪" },
  { en: "Hygge", fr: "Hygge", emoji: "🎁" },
  { en: "Christmas Movies", fr: "Films de Noël", emoji: "🍿" },
];

export const getEmoji = (category: string) => {
  const cat = categories.find((i) => i.en === category || i.fr === category);
  return cat?.emoji;
};

const getCategoryList = (val: string, locale: string) => {
  if (locale === "fr") {
    switch (val) {
      case "Kitchen":
        return kitchenListFR;
      case "Outings":
        return outingsListFR;
      case "Christmas Movies":
        return moviesListFR;
      case "Craft & Create":
        return craftsListFR;
      case "Hygge":
        return hyggeListFR;
      default:
        return [];
    }
  } else {
    switch (val) {
      case "Kitchen":
        return kitchenList;
      case "Outings":
        return outingsList;
      case "Christmas Movies":
        return moviesList;
      case "Craft & Create":
        return craftsList;
      case "Hygge":
        return hyggeList;
      default:
        return [];
    }
  }
};

export const getItemsFromCategory = (category: string, locale: string) => {
  const categoryList = getCategoryList(category, locale);
  if (categoryList?.length) {
    let newCategory: string = category;
    const cat = categories.find((i) => i.en === category);
    if (locale === "fr") {
      // get french category
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
