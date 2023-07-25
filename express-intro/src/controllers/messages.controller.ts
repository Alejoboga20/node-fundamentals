import path from 'path';
import { Request, Response } from 'express';

const getMessages = (_: Request, res: Response) => {
	res.send('<h1>Messages</h1>');
};

const sendFile = (_: Request, res: Response) => {
	const pathName = path.join(__dirname, '../..', 'public', 'images', 'image.png');

	res.sendFile(pathName);
};

export default { getMessages, sendFile };
