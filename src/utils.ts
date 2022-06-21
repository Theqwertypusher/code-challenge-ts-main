import { MovieCode } from "./Movie";
import { MovieRentalCodes } from "./constants";

export const getCost = (code: MovieCode, daysRented: number) => {
  let cost = MovieRentalCodes[code].priceCode.price;
  const daysIncluded = MovieRentalCodes[code].priceCode.daysIncluded;
  const surcharge = MovieRentalCodes[code].priceCode.surcharge;
  const pastRentalLimit = daysRented > daysIncluded;

  if (pastRentalLimit && !!surcharge) {
    cost += (daysRented - daysIncluded) * surcharge;
  } else if (pastRentalLimit) {
    cost += (daysRented - 1) * cost;
  }
  return cost;
};

export const getPoints = (code: MovieCode, daysRented: number) => {
  let points = 1;
  const minDaysRent = MovieRentalCodes[code].pointsCode.minDaysRent;
  const factor = MovieRentalCodes[code].pointsCode.pointsFactor;

  if (daysRented > minDaysRent) points += factor;

  return points;
};

export const createHTMLRecord = (title: string, cost: number) => {
  return `\t<li>${title}\t${cost}</li>\n`;
};

export const generateHTML = (
  customerName: string,
  totalAmount: number,
  renterPoints: number,
  records: string
) => {
  const header = `<h1>Rental Record for ${customerName}</h1>\n`;
  const recordsList = `<ul>\n${records}</ul>\n`;
  const amountOwed = `<p>Amount owed is ${totalAmount}</p>\n`;
  const totalRenterPoints = `<p>You earned ${renterPoints} frequent renter points</p>\n`;

  return header + recordsList + amountOwed + totalRenterPoints;
};
