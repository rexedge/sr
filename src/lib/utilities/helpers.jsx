export const displayDate = (d) => {
	const date = new Date(d);
	if (!date) return null;
	return date.toDateString();
};

export const changeTabColor = (c) => {
	document
		.querySelector('meta[name="theme-color"]')
		.setAttribute('content', c);
};

export const displayTime = (d) => {
	const date = new Date(d);
	const [, time] = date.toLocaleString()?.split(',');
	return time?.trim();
};

export const imageAvatar = (name) => {
	const TestImg =
		'https://firebasestorage.googleapis.com/v0/b/iscecard.appspot.com/o/profile-icon.png?alt=media&token=68ffd48c-66df-44c8-98c8-8655af4a2057';
	if (!name) return TestImg;
	const image_name = name?.split(' ').join('-');
	return `https://avatars.dicebear.com/api/initials/${image_name}.svg`;
};

export const firstname = (fn) => {
	const result = fn.split(' ');
	return result[0];
};

export const truncate = (text, lenght) =>
	text.length > lenght ? `${text.substring(0, lenght)}...` : text;

export const checkDate = (d) => {
	const today = new Date().getTime();
	const currentTime = new Date(d).getTime();
	let result = 0;
	if (currentTime > today) {
		result = 1;
	} else if (currentTime < today) {
		result = -1;
	} else {
		result = 0;
	}
	return result;
};
export const isPortrait = () => {
	let result = false;
	window.innerHeight > window.innerWidth
		? (result = true)
		: (result = false);
	return result;
};

export const deviceType = () => {
	const ua = navigator.userAgent;
	if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
		return 'tablet';
	} else if (
		/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
			ua
		)
	) {
		return 'mobile';
	}
	return 'desktop';
};
