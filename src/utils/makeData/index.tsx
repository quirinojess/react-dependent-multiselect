function carsBrands() {
 return [
  { label: "Volkswagen", value: "Volkswagen" },
  { label: "Fiat", value: "Fiat" },
  { label: "Volvo", value: "Volvo" },
  { label: "Renault", value: "Renault" },
 ];
}

function carsModels(brands: string[]) {
 const optionsModels: Array<{ label: string; value: string }> = [];

 if (brands.includes("Volkswagen")) {
  optionsModels.push(
   { label: "Fusca", value: "Fusca" },
   { label: "Polo", value: "Polo" },
   { label: "Nivus", value: "Nivus" },
   { label: "Tcross", value: "TCross" }
  );
 }

 if (brands.includes("Fiat")) {
  optionsModels.push(
   { label: "Onix", value: "Onix" },
   { label: "Mobi", value: "Mobi" },
   { label: "Toro", value: "Toro" },
   { label: "Pulse", value: "Pulse" }
  );
 }

 if (brands.includes("Volvo")) {
  optionsModels.push(
   { label: "C40", value: "C40" },
   { label: "XC40", value: "XC40" },
   { label: "XC60", value: "XC60" },
   { label: "S60", value: "S60" }
  );
 }

 if (brands.includes("Renault")) {
  optionsModels.push(
   { label: "Kwid", value: "Kwid" },
   { label: "Clio", value: "Clio" },
   { label: "Sandero", value: "Sandero" },
   { label: "Duster", value: "Duster" }
  );
 }

 return optionsModels;
}

function carsColors(models: string[]) {
 const optionsColors: Array<{ label: string; value: string }> = [];

 if (models.includes("Fusca")) {
  optionsColors.push(
   { label: "Blue", value: "Blue" },
   { label: "Red", value: "Red" }
  );
 }

 if (models.includes("Polo")) {
  optionsColors.push({ label: "Satin", value: "Satin" });

  if (models.includes("Nivus")) {
   optionsColors.push({ label: "Blue dark", value: "Blue dark" });
  }
 }

 if (models.includes("TCross")) {
  optionsColors.push({ label: "Sunset", value: "Sunset" });
 }

 if (models.includes("Onix")) {
  optionsColors.push(
   { label: "Blue satin", value: "Blue satin" },
   { label: "Green", value: "Green" }
  );
 }

 if (models.includes("Toro")) {
  optionsColors.push({ label: "Dark", value: "Dark" });
 }
 if (models.includes("Mobi")) {
  optionsColors.push({ label: "Purple Deep", value: "Purple Deep" });
 }

 if (models.includes("Pulse")) {
  optionsColors.push({ label: "Pink", value: "Pink" });
 }

 if (models.includes("C40")) {
  optionsColors.push({ label: "Yellow", value: "Yellow" });
 }

 if (models.includes("XC40")) {
  optionsColors.push({ label: "grey", value: "Grey" });
 }

 if (models.includes("XC60")) {
  optionsColors.push({ label: "purple", value: "Purple" });
 }

 if (models.includes("S60")) {
  optionsColors.push({ label: "Mint", value: "Mint" });
 }

 if (models.includes("Kwid")) {
  optionsColors.push({ label: "White", value: "White" });
 }

 if (models.includes("Clio")) {
  optionsColors.push({ label: "Silver", value: "Silver" });
 }

 if (models.includes("Sandero")) {
  optionsColors.push({ label: "Black", value: "Black" });
  optionsColors.push({ label: "Silver", value: "Silver" });
 }
 if (models.includes("Duster")) {
  optionsColors.push({ label: "Deep Grey", value: "Deep Grey" });
 }

 return optionsColors;
}

export const makeData = {
 carsBrands,
 carsModels,
 carsColors,
};
