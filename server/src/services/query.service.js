const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_PAGE_LIMIT = 0; //Shows all the data

function getPagination(query) {
  try {
    const page = Math.abs(query.page) || DEFAULT_PAGE_NUMBER;
    const limit = Math.abs(query.limit) || DEFAULT_PAGE_LIMIT;
    const skip = (page - 1) * limit;

    return {
      skip,
      limit,
    };
  } catch (error) {
    return {
      skip: DEFAULT_PAGE_NUMBER,
      limit: DEFAULT_PAGE_LIMIT,
    };
  }
}

module.exports = {
  getPagination,
};
