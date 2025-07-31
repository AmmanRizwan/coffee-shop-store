import { Request, Response, NextFunction } from 'express';
import { Model, ModelStatic } from 'sequelize';

const validateExistence = (model: ModelStatic<Model>) => {
  return async (_req: Request, res: Response, next: NextFunction, id: string): Promise<void> => {
    if (model.name === "Customer" && id.toLowerCase() === "me") {
      next();
    }

    const record = await model.findByPk(id);

    if (!record) {
      res.status(404).json({
        message: `${model.name} with id ${id} not found`
      })
    return;
    }
    next();
  }
}

export { validateExistence };
