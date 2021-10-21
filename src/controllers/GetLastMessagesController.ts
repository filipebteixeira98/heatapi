import { Request, Response } from 'express';

import { GetLastMessagesService } from '../services/GetLastMessagesService';

class GetLastMessagesController {
  async handle(request: Request, response: Response) {
    const getLastMessagesService = new GetLastMessagesService();

    const lastMessages = await getLastMessagesService.execute();

    return response.json(lastMessages);
  }
}

export { GetLastMessagesController };
