import path from 'path';
import { Request, Response } from 'express';
import { friends } from '../models/friend.model';

const getMessages = (_: Request, res: Response) => {
	res.render('messages', { title: 'Messages', friends: JSON.stringify(friends) });
};

const sendFile = (_: Request, res: Response) => {
	const pathName = path.join(__dirname, '../..', 'public', 'images', 'image.png');

	res.sendFile(pathName);
};

export default { getMessages, sendFile };
