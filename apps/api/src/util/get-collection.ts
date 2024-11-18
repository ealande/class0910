import { Application } from "express";
import { Collection, Db } from "mongodb";

export function getCollection<T>(
  app: Application,
  name: string,
): Collection<T> {
  const db: Db = app.locals.db;
  return db.collection(name);
}
