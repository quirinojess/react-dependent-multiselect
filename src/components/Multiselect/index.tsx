/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import { filterService } from "../../services/filters";

type Props = {
 typeOption: string;
 idDependentOption?: string[];
 label: string;
 id: string;
 handleSubmitOptions: (
  id: string,
  selectedOptions: string[],
  idClear?: string
 ) => void;

 idClear?: string;
 required: boolean;
 value: string[];
};

export function Multiselect({
 typeOption,
 idDependentOption,
 label,
 id,
 handleSubmitOptions,
 idClear,
 required,
 value,
}: Props) {
 const selectRef = useRef<HTMLInputElement>(null);
 const optionsRef = useRef<HTMLInputElement>(null);
 const [showOptions, setShowOptions] = useState(false);
 const [selectedItems, setSelectedItems] = useState<boolean[]>([]);
 const [listOptions, setListOptions] = useState<
  Array<{ label: string; value: string }>
 >([]);
 const [namesSelecteds, setNamesSelecteds] = useState<string[]>([]);

 async function loadOptions(type: string, idDependent: string[]) {
  const result = await filterService.getForMultiSelect(type, idDependent);
  if (result) {
   setListOptions([{ label: "Select All", value: "" }, ...result]);
  }
 }

 if (selectedItems.length === 0) {
  listOptions.forEach(() => {
   selectedItems.push(false);
  });
 }

 function clickShowOptions(type: string, idDependent?: string[]) {
  if (idDependent) {
   loadOptions(type, idDependent);
  } else if (!idDependent) {
   loadOptions(type, []);
  }

  setShowOptions(true);
 }

 function clickCheckbox(item: number, name: string) {
  const verifyItem = [...selectedItems];
  const verifyNames = [...namesSelecteds];
  if (verifyItem[item] === false) {
   if (name !== "Select All") {
    verifyItem[item] = true;
    verifyNames.push(name);
    setNamesSelecteds(verifyNames);
   } else {
    verifyNames.splice(0, verifyNames.length);
    listOptions.forEach((itens: { label: string; value: string }) =>
     verifyNames.push(itens.label)
    );
    verifyNames.splice(0, 1);
    setNamesSelecteds(verifyNames);
    verifyItem.splice(0, verifyItem.length);
    selectedItems.forEach((status: boolean, index: number) => {
     if (!status) {
      verifyItem[index] = true;
     }
    });
   }
  } else if (verifyItem[item] === true) {
   if (name !== "Select All") {
    verifyItem[0] = false;
    verifyItem[item] = false;

    setNamesSelecteds(verifyNames);
    const validateIndex = verifyNames.indexOf(name);
    verifyNames.splice(validateIndex, 1);
   } else {
    setNamesSelecteds([]);
    selectedItems.forEach((status: boolean, index: number) => {
     verifyItem[index] = !status;
    });
   }
  }

  setSelectedItems(verifyItem);
 }

 function handleSubmit() {
  const itensTrue: number[] = [];
  const selectedOptions: string[] = [];
  selectedItems.forEach((item, index) => {
   if (item === true) {
    itensTrue.push(index);
   }
  });
  listOptions.forEach((item, index) => {
   if (itensTrue.includes(index)) {
    selectedOptions.push(item.value);
   }
   handleSubmitOptions(id, selectedOptions, idClear);
  });
 }

 function handleClear() {
  setSelectedItems([]);
  setNamesSelecteds([]);
  setShowOptions(false);
  handleSubmitOptions(id, [], idClear);
 }

 useEffect(() => {
  if (value.length === 0) {
   ("setou tudo");
   setSelectedItems([]);
   setNamesSelecteds([]);
  }
 }, [value]);

 useEffect(() => {
  handleSubmit();
 }, [showOptions]);

 const pageClickEvent = (event: any) => {
  if (event.type === "click") {
   if (
    showOptions &&
    selectRef.current !== null &&
    !selectRef.current.innerHTML.includes(event.target.innerHTML)
   ) {
    setShowOptions(false);
   }
  }
 };

 useEffect(() => {
  window.addEventListener("click", pageClickEvent);
  return () => window.addEventListener("click", pageClickEvent);
 });

 return (
  <div className={styles.selectContainer}>
   <div className={styles.label}>
    {label} {required ? "*" : ""}
   </div>
   <div className={styles.selectClick} ref={selectRef}>
    <div
     className={styles.select}
     onClick={() => clickShowOptions(typeOption, idDependentOption)}
     onKeyDown={() => clickShowOptions(typeOption, idDependentOption)}
     role="button"
     tabIndex={0}>
     <div
      className={styles.selectPlaceholder}
      onClick={() => clickShowOptions(typeOption, idDependentOption)}
      onKeyDown={() => clickShowOptions(typeOption, idDependentOption)}
      role="button"
      tabIndex={0}>
      {namesSelecteds.length <= 0 ? (
       "Select options"
      ) : (
       <ul>
        {namesSelecteds.map(item => (
         <li key={item}>{item}</li>
        ))}
       </ul>
      )}
     </div>
     {namesSelecteds.length > 0 ? (
      <div
       onClick={() => handleClear()}
       onKeyDown={() => handleClear()}
       role="button"
       tabIndex={0}
       className={styles.selectClear}>
       <span className="material-symbols-outlined">close</span>
      </div>
     ) : null}
     <div className={styles.selectOpen}>
      {!showOptions ? (
       <span className="material-symbols-outlined">expand_more</span>
      ) : (
       <span className="material-symbols-outlined">expand_less</span>
      )}
     </div>{" "}
    </div>
    {showOptions ? (
     <div className={styles.selectOptions} ref={optionsRef}>
      <ul>
       {listOptions.map((item: { value: string; label: string }) => (
        <li key={item.value}>
         {listOptions.length > 1 ? (
          <input
           type="checkbox"
           checked={selectedItems[listOptions.indexOf(item)]}
           onChange={() => clickCheckbox(listOptions.indexOf(item), item.label)}
          />
         ) : null}
         {item.label}
        </li>
       ))}
      </ul>
     </div>
    ) : (
     ""
    )}
   </div>
  </div>
 );
}
