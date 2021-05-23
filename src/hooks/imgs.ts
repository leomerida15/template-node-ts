import fs from 'fs/promises';
import path from 'path';
import { host } from './host';
import { svg2png, SVG2PNGOptions } from 'svg-png-converter';

const base: string = path.resolve('static');
//
export const ImgSvgToPng = async (preType: string, type: 'png' | 'jpeg', file: string, folder?: string) => {
	const id: string = ImgID(file);
	const route: string = `${base}/${folder ? folder + '/' : ''}${id}`;
	//
	const input = await fs.readFile(route);
	const config: SVG2PNGOptions<'buffer'> = { input, encoding: 'buffer', format: type };
	const outputBuffer = await svg2png(config);
	//
	await fs.writeFile(id.replace(preType, '.png'), outputBuffer);
	//
	await fs.rename(`${path.resolve()}/${id.replace(preType, '.png')}`, `${base}/${folder}/${id.replace(preType, '.png')}`);
	//
	await ImgDelete(id, folder);
	return `${host}static/${folder ? folder + '/' : ''}${id.replace(preType, '.png')}`;
};
//
export const ImgID = (file: string) => file.split('/')[file.split('/').length - 1];
//
export const ImgIDs = (files: string[]) => files.map((file: string) => file.split('/')[file.split('/').length - 1]);
//
export const ImgMove = async (file: string, folder?: string) => {
	await fs.rename(`${base}/${file}`, `${base}/${folder}/${file}`);
	return `${host}static/${folder ? folder + '/' : ''}${file}`;
};
//
export const ImgMoves = async (files: string[], folder: string) => {
	const resp: any = files.map(async (file: string) => await fs.rename(`${base}/${file}`, `${base}/${folder}/${file}`));
	await Promise.all(resp);

	return files.map((file: any) => `${host}static/${folder}/${file}`);
};
//
export const ImgRoute = (file: any, folder?: string) => {
	return `${host}static/${folder ? folder + '/' : ''}${file.filename}`;
};
//
export const ImgMoveRoute = async (file: any, folder: string) => {
	const resp: string = ImgRoute(file, folder);
	const id = ImgID(resp);
	await ImgMove(id, folder);
	return resp;
};
//
export const ImgRoutes = (files: any, folder?: string) => {
	return files ? files.map((a: any) => `${host}static/${folder ? folder + '/' : ''}${a.filename}`) : [];
};
//
export const ImgDelete = async (file: string, folder?: string) => {
	try {
		const route: string = (() => {
			if (folder) {
				return path.join(base, folder, file);
			} else {
				return path.join(base, file);
			}
		})();

		await fs.unlink(route);

		return true;
	} catch (err) {
		return false;
	}
};
