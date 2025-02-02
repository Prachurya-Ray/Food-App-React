export function filterData(searchItem, searchRestaurant) {
  const datas = searchRestaurant.filter((Restaurant) =>
    Restaurant.info.name.toLowerCase().includes(searchItem.toLowerCase())
  );
  return datas;
}
