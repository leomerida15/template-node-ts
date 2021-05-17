// modules
import { Request, Response, NextFunction } from 'express';
import list from './list';
import jwt from 'jsonwebtoken';
const key = '_secreto';

/**
 *  this middleware is for catch the jwt  in
 * the header of the petition and create the
 * token attribute in object req
 * */
export default (req: Request, res: Response, next: NextFunction) => {
	try {
		// define and valid route
		const route = req.path.split('/');

		const result = list.includes(route[1]);

		if (result) {
			// valid token
			if (req.headers.token) {
				const token: any = req.headers.token;
				jwt.verify(token, key);

				next();
				//
			} else throw { status: false, message: 'the JWT in require', code: 400 };
		} else {
			//

			next();
		}
	} catch (err) {
		next(err);
	}
};
