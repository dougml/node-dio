import * as HttpResponse from "../utils/http-helper";
import * as repository from "../repositories/clubs-repository";
import { ClubModel } from "../models/club-model";

export const getClubService = async () => {
  const data = await repository.findAllClubs();
  const response = HttpResponse.ok(data);
  return response;
};
export const getClubByIdService = async (id: number) => {
  //pedir pro repisotório de dados
  const data = await repository.findClubById(id);
  let response = null;

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }

  return response;
};

export const createClubService = async (Club: ClubModel) => {
  let response = null;

  //verifica se está vazio
  if (Object.keys(Club).length !== 0) {
    await repository.insertClub(Club);
    response = await HttpResponse.created();
  } else {
    response = await HttpResponse.badRequest();
  }

  return response;
};

export const deleteClubService = async (id: number) => {
  let response = null;
  const isDeleted = await repository.deleteOneClub(id);

  if (isDeleted) {
    response = await HttpResponse.ok({ message: "deleted" });
  } else {
    response = await HttpResponse.badRequest();
  }

  return response;
};

export const updateClubService = async (
  id: number,
  name: string
) => {
  const data = await repository.findAndModifyClub(id, name);
  console.log(data);
  let response = null;

  if (!data) {
    response = HttpResponse.badRequest();
  } else {
    response = HttpResponse.ok(data);
  }

  return response;
};