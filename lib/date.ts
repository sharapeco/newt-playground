// 表示する時刻の UTC からのオフセット [分]
const TIMEZONE_OFFSET = 540;

export const formatDate = (dateStr: string, format = "DATE_SHORT") => {
	const date = new Date(dateStr);
	date.setMinutes(date.getMinutes() + TIMEZONE_OFFSET);
	return [
		date.getUTCFullYear(),
		'年',
		date.getUTCMonth() + 1,
		'月',
		date.getUTCDate(),
		'日',
	].join('');
};
