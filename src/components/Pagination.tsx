import classnames from 'classnames';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as IconPrev } from '~/assets/images/svg/ico-prev.svg';
import { ReactComponent as IconNext } from '~/assets/images/svg/ico-next.svg';

interface PaginationProps {
	totalItem: number;
	upperPageBound: number;
	currentPage: number;
	changePage: ({ page }: { page: number }) => void;
}
function Pagination(props: PaginationProps) {
	const location = useLocation();
	const { totalItem, upperPageBound, changePage, currentPage } = props;

	const [current, setCurrent] = useState<number>(currentPage);

	const totalPages = Math.ceil(totalItem / upperPageBound);
	const handlePrev = () => {
		setCurrent(current - 1);
	};
	const handleNext = () => {
		setCurrent(current + 1);
	};

	const handleSelectPage = (page: number) => {
		setCurrent(page);
		changePage({ page });
	};

	useEffect(() => {
		if (location.search === '') {
			setCurrent(1);
		} else {
			changePage({ page: current });
		}
	}, [current]);

	return (
		<div className="pagination">
			{totalPages > 0 ? (
				<ul className="pagination__list">
					<li className="pagination__item">
						<button
							type="button"
							className="pagination__btn pagination__btn--prev"
							onClick={currentPage > 1 ? handlePrev : undefined}
							disabled={currentPage === 1 && true}
						>
							<IconPrev />
						</button>
					</li>
					<li
						className={classnames(
							'pagination__item',
							currentPage === 1 && 'pagination__item--current'
						)}
					>
						<button
							type="button"
							className="pagination__btn"
							onClick={() => handleSelectPage(1)}
						>
							{1}
						</button>
					</li>
					{currentPage >= 4 && totalPages > 6 && (
						<li className="pagination_separator">...</li>
					)}

					{currentPage < 7 && totalPages < 7 && totalPages > 2 && (
						<li
							className={classnames(
								'pagination__item',
								currentPage === 2 && 'pagination__item--current'
							)}
						>
							<button
								type="button"
								className="pagination__btn"
								onClick={() => handleSelectPage(2)}
							>
								2
							</button>
						</li>
					)}

					{currentPage < 7 && totalPages < 7 && totalPages > 3 && (
						<li
							className={classnames(
								'pagination__item',
								currentPage === 3 && 'pagination__item--current'
							)}
						>
							<button
								type="button"
								className="pagination__btn"
								onClick={() => handleSelectPage(3)}
							>
								3
							</button>
						</li>
					)}

					{currentPage < 7 && totalPages < 7 && totalPages > 4 && (
						<li
							className={classnames(
								'pagination__item',
								currentPage === 4 && 'pagination__item--current'
							)}
						>
							<button
								type="button"
								className="pagination__btn"
								onClick={() => handleSelectPage(4)}
							>
								4
							</button>
						</li>
					)}

					{currentPage < 7 && totalPages < 7 && totalPages > 5 && (
						<li
							className={classnames(
								'pagination__item',
								currentPage === 5 && 'pagination__item--current'
							)}
						>
							<button
								type="button"
								className="pagination__btn"
								onClick={() => handleSelectPage(5)}
							>
								5
							</button>
						</li>
					)}

					{currentPage < 3 && totalPages > 6 && (
						<>
							<li
								className={classnames(
									'pagination__item',
									currentPage === 2 && 'pagination__item--current'
								)}
							>
								<button
									type="button"
									className="pagination__btn"
									onClick={() => handleSelectPage(2)}
								>
									2
								</button>
							</li>
							<li className={classnames('pagination__item')}>
								<button
									type="button"
									className="pagination__btn"
									onClick={() => handleSelectPage(3)}
								>
									3
								</button>
							</li>
							<li className={classnames('pagination__item')}>
								<button
									type="button"
									className="pagination__btn"
									onClick={() => handleSelectPage(4)}
								>
									4
								</button>
							</li>
						</>
					)}

					{currentPage >= 3 && currentPage < totalPages - 3 && (
						<>
							<li className={classnames('pagination__item')}>
								<button
									type="button"
									className="pagination__btn"
									onClick={() => handleSelectPage(currentPage - 1)}
								>
									{currentPage - 1}
								</button>
							</li>
							<li
								className={classnames(
									'pagination__item',
									'pagination__item--current'
								)}
							>
								<button type="button" className="pagination__btn">
									{currentPage}
								</button>
							</li>
							<li className={classnames('pagination__item')}>
								<button
									type="button"
									className="pagination__btn"
									onClick={() => handleSelectPage(currentPage + 1)}
								>
									{currentPage + 1}
								</button>
							</li>
						</>
					)}

					{currentPage > totalPages - 4 &&
						currentPage < totalPages - 2 &&
						totalPages > 6 && (
							<li
								className={classnames(
									'pagination__item',
									currentPage === totalPages - 4 && 'pagination__item--current'
								)}
							>
								<button
									type="button"
									className="pagination__btn"
									onClick={() => handleSelectPage(totalPages - 4)}
								>
									{totalPages - 4}
								</button>
							</li>
						)}

					{currentPage > totalPages - 4 && totalPages > 6 && (
						<li
							className={classnames(
								'pagination__item',
								currentPage === totalPages - 3 && 'pagination__item--current'
							)}
						>
							<button
								type="button"
								className="pagination__btn"
								onClick={() => handleSelectPage(totalPages - 3)}
							>
								{totalPages - 3}
							</button>
						</li>
					)}

					{currentPage > totalPages - 4 && totalPages > 6 && (
						<li
							className={classnames(
								'pagination__item',
								currentPage === totalPages - 2 && 'pagination__item--current'
							)}
						>
							<button
								type="button"
								className="pagination__btn"
								onClick={() => handleSelectPage(totalPages - 2)}
							>
								{totalPages - 2}
							</button>
						</li>
					)}

					{currentPage > totalPages - 3 && totalPages > 6 && (
						<li
							className={classnames(
								'pagination__item',
								currentPage === totalPages - 1 && 'pagination__item--current'
							)}
						>
							<button
								type="button"
								className="pagination__btn"
								onClick={() => handleSelectPage(totalPages - 1)}
							>
								{totalPages - 1}
							</button>
						</li>
					)}

					{currentPage < totalPages - 2 && totalPages > 6 && (
						<li className="pagination_separator">...</li>
					)}

					{totalPages > 1 && (
						<li
							className={classnames(
								'pagination__item',
								currentPage === totalPages && 'pagination__item--current'
							)}
						>
							<button
								type="button"
								className={classnames('pagination__btn')}
								onClick={() => handleSelectPage(totalPages)}
							>
								{totalPages}
							</button>
						</li>
					)}

					<li className="pagination__item">
						<button
							type="button"
							className="pagination__btn pagination__btn--next"
							onClick={currentPage < totalPages ? handleNext : undefined}
							disabled={currentPage === totalPages && true}
						>
							<IconNext />
						</button>
					</li>
				</ul>
			) : (
				<span className="pagination__text">No Item</span>
			)}
		</div>
	);
}

export default Pagination;
