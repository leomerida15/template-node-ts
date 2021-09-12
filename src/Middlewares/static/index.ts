import express from 'express';
import path from 'path';
import Doc from '../../hooks/docs';
export default async () => {
	const files: string[] = ['', '/products'];

	const valid: any = files.map(async (file: string) => await Doc.Existin('static' + file));
	await Promise.all(valid);

	return files.map((file: string) => express.static(path.resolve('static/' + file)));
};
