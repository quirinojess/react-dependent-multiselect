import { useState } from "react";
import { Multiselect } from "../../components/Multiselect";
import styles from "./index.module.css";

export function Home() {
 const [filter, setFilter] = useState({
  carsBrands: [],
  carsModels: [],
  carsColors: [],
 });
 function handleSubmitOptions(id: string, values: string[], idClear?: string) {
  if (values.length > 0) {
   setFilter({
    ...filter,
    [id]: values,
   });
  }

  if (idClear) {
   setFilter({
    ...filter,
    [id]: values,
    [idClear]: [],
   });
  }
 }

 return (
  <div className={styles.content}>
   <h2>React Dependent Select</h2>

   <p>
    A multi-select component that has a dependency on previous field values.
    Select the initial values and see the next select load according the result.
   </p>
   <Multiselect
    typeOption="brands_api"
    label="Brands"
    id="carsBrands"
    idClear="carsModels"
    handleSubmitOptions={handleSubmitOptions}
    required
    value={filter.carsBrands}
   />

   <Multiselect
    typeOption="models_api"
    label="Models"
    id="carsModels"
    idClear="carsColors"
    idDependentOption={filter.carsBrands}
    handleSubmitOptions={handleSubmitOptions}
    required
    value={filter.carsModels}
   />

   <Multiselect
    typeOption="colors_api"
    label="Colors"
    id="carsColors"
    idDependentOption={filter.carsModels}
    handleSubmitOptions={handleSubmitOptions}
    required
    value={filter.carsColors}
   />
  </div>
 );
}
