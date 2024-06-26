import { Request, Response } from "express";
import * as service from "../services/clubs-service";
import { ClubModel } from "../models/club-model";

export const getClubs = async (req: Request, res: Response) => {
  const response = await service.getClubService();
  res.status(response.statusCode).json(response.body);
};

export const getClubsById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await service.getClubByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postClubs = async (req: Request, res: Response) => {
  const bodyValue = req.body;
  const httpResponse = await service.createClubService(bodyValue);

  if (httpResponse) {
    res.status(httpResponse.statusCode).json(httpResponse.body);
  }
};

export const deleteClubs = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await service.deleteClubService(id);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};


export const updateClubs = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  if (typeof name !== 'string') {
    return res.status(400).json({ error: 'Invalid name' });
  }

  const httpResponse = await service.updateClubService(id, name);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};