const kitchenList: string[] = [
  "Make Christmas cookies",
  "Serve a red and green themed meal",
  "Make homemade caramel corn",
  "Make chocolate-dipped pretzels with red and green sprinkles",
  "Eat “reindeer droppings” for breakfast (donut holes!)",
  "Make gingerbread cookies",
  "Make edible Christmas trees out of upside-down ice cream cones, green frosting, and sprinkles",
  "Make snickerdoodles",
  "Decorate a gingerbread (or graham cracker) house",
  "Invite a few friends over for a cookie decorating party",
  "Melt chocolate into Christmas molds",
];

const outingsList: string[] = [
  "Cut or pick a Christmas tree",
  "Visit a few friends’ houses to sing Christmas carols and hand out candy canes",
  "Hop in the car in your jammies and drive around to look at the Christmas lights",
  "Visit Santa for photos",
  "Attend a Christmas parade (or watch on TV/YouTube)",
  "Watch the Nutcracker Ballet on stage (or on Netflix)",
  "Go to a tree-lighting ceremony",
  "Attend a Christmas concert",
  "Check out books from the library about how people celebrate Christmas in other nations",
  "Attend a holiday craft bazaar with grandma",
];

const decoratingList: string[] = [
  "Decorate the tree",
  "Deck the halls with boughs of holly",
  "String a popcorn garland for the tree",
  "Make origami ornaments for the tree",
  "Decorate a wreath together",
  "Hang some mistletoe and give out kisses",
  "Make a paper garland to hang on the tree, over a door, or in the kids bedroom",
  "Decorate the windows with spray snow",
];

export const categories: string[] = [
  // display on preferences page and use for logic
  // "Craft and create",
  // "Serving others",
  "Kitchen",
  "Decorating",
  "Outings",
  // "Fun at home",
  // "Christmas movies",
  // "Winter activities",
  // "Summer activities",
];

export const outings = () => {
  return outingsList.map((i) => {
    const container: any = {};
    container.text = i;
    container.category = "outings"; //display on :id page
    return container;
  });
};

export const kitchen = () => {
  return kitchenList.map((i) => {
    const container: any = {};
    container.text = i;
    container.category = "kitchen";
    return container;
  });
};
export const decorating = () => {
  return decoratingList.map((i) => {
    const container: any = {};
    container.text = i;
    container.category = "decorating";
    return container;
  });
};
