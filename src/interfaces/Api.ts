export interface resp<info = any | any[]> {
	message: string;
	info?: info;
}

export interface params {
	id: string | number;
}

export interface QueryTime {
	initTime: string | Date;
	endTime: string | Date;
}
