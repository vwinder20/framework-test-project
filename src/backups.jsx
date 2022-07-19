useEffect(() => {
  const newFilteringData = data.filter((painting) => {
    return painting.name.toLowerCase().includes(searchField);
  });
  console.log(" search field = " + searchField);
  setData(newFilteringData);
  setTotalPages(Math.ceil(data.length / PAINTING_PER_PAGE));
}, [setTotalPages, searchField, data.length]);
