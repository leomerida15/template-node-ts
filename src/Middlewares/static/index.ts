import express from 'express';
import { fileExistin } from '../../hooks/images';
import path from 'path';
export default async () => {
	const files: string[] = ['', '/products'];

	const valid: any = files.map(async (file: string) => await fileExistin('static' + file));
	await Promise.all(valid);

	return files.map((file: string) => express.static(path.resolve('static/' + file)));
};
