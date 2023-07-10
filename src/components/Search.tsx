import { ReactComponent as IconSearch } from '~/assets/images/svg/ico-search-grey.svg';

interface SearchPropsType {
	placeholder?: string;
}

function Search({ placeholder }: SearchPropsType) {
	return (
		<div className="search">
			<form className="search__form">
				<input
					type="text"
					className="search__input"
					placeholder={placeholder}
				/>
				<button
					type="submit"
					className="search__submit"
					aria-label="search"
					onClick={(e) => {
						e.preventDefault();
					}}
				>
					<IconSearch />
				</button>
			</form>
		</div>
	);
}

export default Search;
