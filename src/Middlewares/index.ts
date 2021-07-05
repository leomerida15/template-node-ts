import Err from './err';
import err_404 from './err/err_404';
import token from './token';
import cors from './secure';
import { file_files_err } from './upload/err_image';
import { upload, uploads } from './upload';
import files from './static';
import { Application } from 'express';

/** Middleware PreRoutes */
export const preRoutes: any = (app: Application): void => {
	app.use(cors);
	app.use(token);
};

/** Middleware PostRoutes */
export const posRoutes: any = (app: Application): void => {
	app.use(files);
	app.use(file_files_err);
	app.use(Err);
	app.use(err_404);
};
