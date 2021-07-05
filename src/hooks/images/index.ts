import fs from 'fs/promises';
import path from 'path';
import { host } from '../host';
import { svg2png, SVG2PNGOptions } from 'svg-png-converter';

const base: string = path.resolve('static');

/** this function valid the existing folder  */
export const fileExistin = async (folder: string) => {
	try {
		await fs.lstat(`${base}/${folder}`);
	} catch (err) {
		await fs.mkdir(`${base}/${folder}`);
	}
};
//
export const FileSvgToPng = async (preType: string, type: 'png' | 'jpeg', file: string, folder?: string) => {
	const id: string = FileID(file);
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
	await FileDelete(id, folder);
	return `${host}static/${folder ? folder + '/' : ''}${id.replace(preType, '.png')}`;
};
//
export const FileID = (file: string) => file.split('/')[file.split('/').length - 1];
//
export const FileIDs = (files: string[]) => files.map((file: string) => FileID(file));
//
export const FileMove = async (file: string, folder?: string) => {
	try {
		if (folder) await fileExistin(folder);

		await fs.rename(`${base}/${file}`, `${base}/${folder}/${file}`);

		return `${host}static/${folder ? folder + '/' : ''}${file}`;
	} catch (err) {
		return false;
	}
};
//
export const FileMoves = async (files: string[], folder?: string) => {
	try {
		if (folder) await fileExistin(folder);

		const resp: any = files.map(async (file: string) => await fs.rename(`${base}/${file}`, `${base}/${folder}/${file}`));
		await Promise.all(resp);

		return files.map((file: any) => `${host}static/${folder}/${file}`);
	} catch (err) {
		return false;
	}
};
//
export const FileRoute = (file: any, folder?: string) => `${host}static/${folder ? folder + '/' : ''}${file.filename}`;

//
export const FileMoveRoute = async (file: any, folder: string) => {
	const resp: string = FileRoute(file, folder);
	const id = FileID(resp);
	await FileMove(id, folder);
	return resp;
};
//
export const FileRoutes = (files: any, folder?: string) => {
	return files ? files.map((a: any) => `${host}static/${folder ? folder + '/' : ''}${a.filename}`) : [];
};
//
export const FileDelete = async (file: string, folder?: string) => {
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
//
export const FileDeletes = async (files: string[], folder?: string) => {
	try {
		const stop: any = files.map(async (file: string) => {
			const route: string = (() => {
				if (folder) {
					return path.join(base, folder, file);
				} else {
					return path.join(base, file);
				}
			})();

			await fs.unlink(route);
		});

		await Promise.all(stop);

		return true;
	} catch (err) {
		return false;
	}
};
//
export const FileType = (file: string) => {
	const array: string[] = file.split('.');
	const i: number = array.length;

	const type: string = array[i];

	return type;
};
//
export const FileTypes = (files: string[]) => files.map((file: string) => FileType(file));
