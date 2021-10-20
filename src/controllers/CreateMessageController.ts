import { Request, Response } from 'express';

import { CreateMessageService } from '../services/CreateMessageService';

class CreateMessageController {
  async handle(request: Request, response: Response) {
    const { message } = request.body;

    const { user_id } = request;

    const createMessageService = new CreateMessageService();

    const sentMessageDetails = await createMessageService.execute(
      message,
      user_id
    );

    return response.status(201).json(sentMessageDetails);
  }
}

export { CreateMessageController };
