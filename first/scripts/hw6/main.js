import Mouse from "./mouse.js";
import Deer from "./deer.js";
import Eagle from "./eagle.js";
import Hunter from "./hunter.js";
import Aborigine from "./aborigine.js";

let mouse = new Mouse("Mikkey", 20, "victim");
let deer = new Deer("Bamby", 80, "victim");
let eagle = new Eagle("Jack the Eagle", 50, "predator");
let hunter = new Hunter("Rob Cruz", 100, "predator", true);
let aborigine = new Aborigine("Friday", 100, "predator", false);

console.log("Hunter made a shot with " + hunter.points + " points");
hunter.makeShot(mouse);
hunter.makeShot(eagle);
hunter.makeShot(deer);

console.log("Aborigine made a shot with " + aborigine.points + " points");
aborigine.makeShot(mouse);
aborigine.makeShot(eagle);
aborigine.makeShot(deer);