import { useEffect, RefObject } from 'react';

function useClickOutSide(
	ref: RefObject<HTMLDivElement>,
	handleEvent: () => void
) {
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			const target = event.target as HTMLElement;

			if (ref.current && !ref.current.contains(target)) {
				handleEvent();
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref]);
}

export default useClickOutSide;
