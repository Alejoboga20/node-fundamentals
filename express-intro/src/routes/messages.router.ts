import express from 'express';

import MessagesController from '../controllers/messages.controller';

const messagesRouter = express.Router();

messagesRouter.get('/', MessagesController.getMessages);
messagesRouter.get('/image', MessagesController.sendFile);

export default messagesRouter;
