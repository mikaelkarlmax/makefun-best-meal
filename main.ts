// The Best Meal You Ever Had — make.fun entry
// Writes one sentence (at most 200 characters) about the best meal
// the entrant ever had to /output/entry.txt and prints it.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My grandmother's rendang in Padang — beef collapsing in coconut gravy, the kitchen thick with lemongrass, so rich I licked the spoon clean and asked for seconds before I'd finished the first plate.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
