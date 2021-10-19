import { Request, Response } from 'express';

import { AuthenticateUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { code } = request.body;

    const authenticateUserService = new AuthenticateUserService();

    const data = await authenticateUserService.execute(code);

    return response.json(data);
  }
}

export { AuthenticateUserController };
