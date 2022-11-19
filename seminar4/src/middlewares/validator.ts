import express, { Request, Response, NextFunction } from 'express';

const { validationResult } = require('express-validator');

exports.validatorErrorChecker = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ status: 400, message: 'BAD REQUEST' });
  }
  next();
};
