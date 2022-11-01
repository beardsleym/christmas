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

const moviesList: string[] = [
  "Miracle on 34th Street",
  "White Christmas",
  "How the Grinch Stole Christmas",
  "Charlie Brown’s Christmas",
  "It’s a Wonderful Life",
  "The Nativity Story",
  "Elf",
  "Home Alone",
  "The Muppet Christmas Carol",
  "The Nutcracker Ballet",
  "The Polar Express",
  "Mickey’s Christmas Carol",
  "National Lampoons Christmas Vacation",
  "The Christmas Story",
  "A Christmas Carol",
  "The Snowman",
  "Rudolph the Red-Nosed Reindeer",
];
const craftList: string[] = [
  "Write (or color on) Christmas cards.",
  "Decorate a Christmas card for your teacher, Sunday School teacher, or favorite babysitter.",
  "Make a handmade Christmas ornament for someone else in the family.",
  "Color a Christmas picture or make a Christmas craft.",
  "Make paper snowflakes to hang from the kids’ bedroom ceiling.",
  "Write letters to Santa.",
  "Make and mail a Christmas card to a family member or friend who lives in another state or country.",
  "Make a silly Christmas video to email to friends (or post on facebook) on Christmas day.",
  "Make (or draw inside) thank you cards that are ready to be filled out after Christmas.",
  "Make thumbprint snowmen.",
  "Make homemade play dough in red and green.",
  "Make play dough snowmen.",
  "Make a video of each family member singing their favorite Christmas song.",
  "Make glitter snow globes out of baby food jars. (Secure the lids with a hot glue gun!)",
  "Paint pinecones to make a centerpiece for the table or to display in a clear vase or string on a bunting.",
  "Make a bouquet of poinsettias out of felt or construction paper and pipe cleaners.",
  "Make a pinecone bird feeder and attach a little note that says, “Merry Christmas birdies!",
];

export const categories: string[] = [
  // display on preferences page and use for logic
  "Craft & Create",
  // "Serving others",
  "Kitchen",
  "Decorating",
  "Outings",
  // "Fun at home",
  "Christmas Movies",
  // "Winter activities",
  // "Summer activities",
];

type itemProps = {
  text: string;
  category: string;
};

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
    const container: itemProps = { text: "", category: "" };
    container.text = i;
    container.category = "kitchen";
    return container;
  });
};
export const decorating = () => {
  return decoratingList.map((i) => {
    const container: itemProps = { text: "", category: "" };
    container.text = i;
    container.category = "decorating";
    return container;
  });
};
export const movies = () => {
  return moviesList.map((i) => {
    const container: itemProps = { text: "", category: "" };
    container.text = i;
    container.category = "movies";
    return container;
  });
};
export const crafting = () => {
  return craftList.map((i) => {
    const container: itemProps = { text: "", category: "" };
    container.text = i;
    container.category = "craft";
    return container;
  });
};
