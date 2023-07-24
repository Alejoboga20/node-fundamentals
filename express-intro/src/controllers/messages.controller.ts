import { Request, Response } from 'express';

const getMessages = (_: Request, res: Response) => {
	res.send('<h1>Messages</h1>');
};

export default { getMessages };
