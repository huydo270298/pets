import { useState, useEffect } from 'react';

export default function useScroll() {
	const [scroll, setScroll] = useState(false);
	const onScroll = () => {
		if (window.scrollY > 0) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	});
	return scroll;
}
