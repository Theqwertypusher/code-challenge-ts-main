const MoviePriceCodes = {
  P001: {
    price: 2,
    daysIncluded: 2,
    surcharge: 1.5,
  },
  P002: {
    price: 3,
    daysIncluded: 0,
    surcharge: 0,
  },
  P003: {
    price: 1.5,
    daysIncluded: 3,
    surcharge: 1.5,
  },
};

const MoviePointsCodes = {
  R000: {
    minDaysRent: 0,
    pointsFactor: 0,
  },
  R001: {
    minDaysRent: 2,
    pointsFactor: 1,
  },
};

export const MovieRentalCodes = {
  regular: {
    priceCode: MoviePriceCodes.P001,
    pointsCode: MoviePointsCodes.R000,
  },
  new: {
    priceCode: MoviePriceCodes.P002,
    pointsCode: MoviePointsCodes.R001,
  },
  childrens: {
    priceCode: MoviePriceCodes.P003,
    pointsCode: MoviePointsCodes.R000,
  },
};
