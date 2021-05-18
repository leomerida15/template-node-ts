// interfaces
export interface errCodes {
	100: string;
	101: string;
	102: string;
	200: string;
	201: string;
	202: string;
	203: string;
	204: string;
	205: string;
	206: string;
	207: string;
	300: string;
	301: string;
	302: string;
	303: string;
	304: string;
	305: string;
	307: string;
	400: string;
	401: string;
	402: string;
	403: string;
	404: string;
	405: string;
	406: string;
	407: string;
	408: string;
	409: string;
	410: string;
	411: string;
	412: string;
	413: string;
	414: string;
	415: string;
	416: string;
	417: string;
	418: string;
	422: string;
	423: string;
	424: string;
	425: string;
	426: string;
	428: string;
	429: string;
	431: string;
	500: string;
	501: string;
	502: string;
	503: string;
	504: string;
	505: string;
	506: string;
	507: string;
	509: string;
	510: string;
	511: string;
}

// obj with codes
const code: errCodes = {
	100: 'CONTINUE',
	101: 'SWITCHING_PROTOCOLS',
	102: 'PROCESSING',
	200: 'OK',
	201: 'CREATED',
	202: 'ACCEPTED',
	203: 'NON_AUTHORITATIVE_INFORMATION',
	204: 'NO_CONTENT',
	205: 'RESET_CONTENT',
	206: 'PARTIAL_CONTENT',
	207: 'MULTI_STATUS',
	300: 'MULTIPLE_CHOICES',
	301: 'MOVED_PERMANENTLY',
	302: 'MOVED_TEMPORARILY',
	303: 'SEE_OTHER',
	304: 'NOT_MODIFIED',
	305: 'USE_PROXY',
	307: 'TEMPORARY_REDIRECT',
	400: 'BAD_REQUEST',
	401: 'UNAUTHORIZED',
	402: 'PAYMENT_REQUIRED',
	403: 'FORBIDDEN',
	404: 'NOT_FOUND',
	405: 'METHOD_NOT_ALLOWED',
	406: 'NOT_ACCEPTABLE',
	407: 'PROXY_AUTHENTICATION_REQUIRED',
	408: 'REQUEST_TIME_OUT',
	409: 'CONFLICT',
	410: 'GONE',
	411: 'LENGTH_REQUIRED',
	412: 'PRECONDITION_FAILED',
	413: 'REQUEST_ENTITY_TOO_LARGE',
	414: 'REQUEST_URI_TOO_LARGE',
	415: 'UNSUPPORTED_MEDIA_TYPE',
	416: 'REQUESTED_RANGE_NOT_SATISFIABLE',
	417: 'EXPECTATION_FAILED',
	418: 'IM_A_TEAPOT',
	422: 'UNPROCESSABLE_ENTITY',
	423: 'LOCKED',
	424: 'FAILED_DEPENDENCY',
	425: 'UNORDERED_COLLECTION',
	426: 'UPGRADE_REQUIRED',
	428: 'PRECONDITION_REQUIRED',
	429: 'TOO_MANY_REQUESTS',
	431: 'REQUEST_HEADER_FIELDS_TOO_LARGE',
	500: 'INTERNAL_SERVER_ERROR',
	501: 'NOT_IMPLEMENTED',
	502: 'BAD_GATEWAY',
	503: 'SERVICE_UNAVAILABLE',
	504: 'GATEWAY_TIME_OUT',
	505: 'HTTP_VERSION_NOT_SUPPORTED',
	506: 'VARIANT_ALSO_NEGOTIATES',
	507: 'INSUFFICIENT_STORAGE',
	509: 'BANDWIDTH_LIMIT_EXCEEDED',
	510: 'NOT_EXTENDED',
	511: 'NETWORK_AUTHENTICATION_REQUIRED',
};

export default code;
