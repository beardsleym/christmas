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
const homeList: string[] = [
  "Have a living room dance party to a fun Christmas album.",
  "Let everyone in the family choose a country and then google to see how they celebrate Christmas there.",
  "Unwrap and read a new Christmas book.",
  "Wrap grandma and grandpa’s gifts.",
  "Pull out mattresses and have a family slumber party under the tree.",
  "Have a family story night and read all your Christmas storybooks while enjoying a plate of cookies and milk.",
  "Snuggle up in mom and dad’s bed and read The Night Before Christmas.",
  "Have a funny Christmas photo shoot (80’s Christmas sweaters?!).",
  "Make popcorn and watch home movies from the year.",
  "Choose your favorite photos for a family yearbook.",
  "Make some personal and family New Years goals.",
  "Wrap daddy’s gift with mommy (or mommy’s gift with daddy).",
  "Wrap up your holiday books for the kids to open and read together as a family (include one new book for the year).",
  "Read Elf on the Shelf (and let the fun begin!).",
  "Make a “pillow bed” on the living room floor and watch some classic Christmas cartoons (Rudolf, Frosty, etc.) together.",
  "Send a small Christmas care package to a missionary or foreign exchange student.",
  "Give each family member a shoe box and tell them to collect and fill it with red and green things from around the house or yard.",
  "YouTube funny Christmas caroling videos together.",
  "Use only Christmas mugs for all of your drinks for an entire day.",
  "Draw the kids a bubble bath by candlelight with Christmas tunes playing on the stereo.",
  "Interview each family member on video asking a short list of questions (favorite memory from the year, etc.).",
  "Celebrate Saint Nicolas Day (December 6th) by doing a secret act of kindness.",
  "Let each child choose a friend to invite over for a Christmas-themed morning tea.",
  "Draw names and write a love note for a family member. Leave them out on Christmas Eve for Santa to distribute into their stocking.",
  "Have a “fancy dress” code for dinner one night.",
  "Check your shoes on Saint Nicolas Day – December 6th. [Leave the kids a few pieces of candy.]",
  "'Help' dad put up the outdoor Christmas lights.",
  "Write a “new” Christmas carol, personalizing (re-writing) the words to one of your favorites.",
  "Invite another family to come over in their jammies to watch a favorite Christmas movie and share a favorite Christmas treat.",
  "Get out a Christmas songbook and sing a few carols before nap time and bed time. (We actually do this for the entire month, but thought I’d include it for families who are a bit less gung-ho about the all-month caroling. Ha!)",
];

export type categoryProps = {
  en: string;
  fr: string;
  [key: string]: string;
};

export const categories: categoryProps[] = [
  // display on preferences page and use for logic
  { en: "Craft & Create", fr: "Travaux Manuels" },
  { en: "Kitchen", fr: "Dans la cuisine" },
  { en: "Decorating", fr: "Décorations" },
  { en: "Outings", fr: "Sorties" },
  { en: "Fun at Home", fr: "S'amuser à la maison" },
  { en: "Christmas Movies", fr: "Films de Noël" },
  // "Serving others",
  // "Kitchen",
  // "Decorating",
  // "Outings",
  // "Fun at Home",
  // "Christmas Movies",
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
    container.category = "crafting";
    return container;
  });
};
export const home = () => {
  return homeList.map((i) => {
    const container: itemProps = { text: "", category: "" };
    container.text = i;
    container.category = "home";
    return container;
  });
};
