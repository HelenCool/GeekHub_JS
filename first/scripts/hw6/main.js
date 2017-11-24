import Mouse from "./mouse";
import Deer from "./deer";
import Eagle from "./eagle";
import Hunter from "./hunter";
import Aborigine from "./aborigine";

new Mouse("Mikkey", 20, "victim");
new Deer("Bamby", 80, "victim");
new Eagle("Jack the Eagle", 50, "predator");
new Hunter("Rob Cruz", 100, "predator", true);
new Aborigine("Friday", 100, "predator", false);

console.log("Hunter made a shot with " + Hunter.points + " points");
Hunter.makeShot(Mouse);
Hunter.makeShot(Eagle);
Hunter.makeShot(Deer);

console.log("Aborigine made a shot with " + Aborigine.points + " points");
Aborigine.makeShot(Mouse);
Aborigine.makeShot(Eagle);
Aborigine.makeShot(Deer);