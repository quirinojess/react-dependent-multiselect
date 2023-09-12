function carsBrands() {
 return [
  { label: "Volkswagen", value: "volkswagen" },
  { label: "Fiat", value: "fiat" },
  { label: "Volvo", value: "volvo" },
 ];
}

function carsModels(brands: string[]) {
 const optionsModels: Array<{ label: string; value: string }> = [];

 if (brands.includes("volkswagen")) {
  optionsModels.push({ label: "Fusca", value: "Fusca" });
 }

 if (brands.includes("fiat")) {
  optionsModels.push({ label: "Onix", value: "Onix" });
 }

 if (brands.includes("volvo")) {
  optionsModels.push(
   { label: "c30", value: "c30" },
   { label: "xc60", value: "xc60" }
  );
 }

 return optionsModels;
}

function carsColors(models: string[]) {
 const optionsColors: Array<{ label: string; value: string }> = [];

 if (models.includes("Fusca")) {
  optionsColors.push({ label: "blue", value: "Blue" });
 }

 if (models.includes("Onix")) {
  optionsColors.push(
   { label: "blue", value: "Blue" },
   { label: "green", value: "Green" }
  );
 }

 if (models.includes("c30")) {
  optionsColors.push({ label: "Yellow", value: "Yellow" });
 }

 if (models.includes("xc60")) {
  optionsColors.push(
   { label: "grey", value: "Grey" },
   { label: "purple", value: "Purple" }
  );
 }

 return optionsColors;
}

export const makeData = {
 carsBrands,
 carsModels,
 carsColors,
};
