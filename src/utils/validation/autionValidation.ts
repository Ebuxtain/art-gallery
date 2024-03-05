import Joi from "joi";

export const AuctionSchema = Joi.object({
    startingPrice: Joi.number().required().messages({
        "number.empty":"Staring Price is required"
    }),
    currentPrice: Joi.number().required().messages({
        "number.empty":"Current Price is required"
    }),
    startDate: Joi.date().required().messages({
        "date.empty":"startDate is required"
    }),
    endDate: Joi.date().required().messages({
        "date.empty":"endDate is required"
    }),
})