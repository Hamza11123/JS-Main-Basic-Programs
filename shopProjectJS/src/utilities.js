// utility function to read data from ls
const readLS = localStorage_Name => JSON.parse(localStorage.getItem(localStorage_Name)); // Parsing String And Returning OBject!!

// utility function to [Write or Append] data in ls
function updateLS(localStorage_Name, data) {
    localStorage.setItem(localStorage_Name, JSON.stringify(data));
}
const is_Empty = localStorage_Name => {
    if (localStorage.getItem(localStorage_Name) == null)
        return true;
    return false;
}

export { readLS, updateLS, is_Empty };