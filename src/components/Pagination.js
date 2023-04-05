import React, { useContext, useEffect, useState } from "react";
import "../styles/index.css";
import useGlobalContext from "../context";

const Pagination = ({ totalResults }) => {
	const [page, setPage] = useState(1);
	// const offset = 0;
	const dataOnPage = 20;

	const { setOffset } = useContext(useGlobalContext);

	let totalPage = Math.ceil(totalResults / dataOnPage);

	const getPrevPage = () => {
		setPage((page) => page - 1);
		setOffset((offset) => offset - dataOnPage);
	};

	const getNextPage = () => {
		setPage((page) => page + 1);
		setOffset((offset) => offset + dataOnPage);
	};

	const numPage = 1;
	if (page <= 0 || page === totalPage + 1) {
		setPage(numPage);
		setOffset(0);
	}

	return (
		<article className='pagination'>
			<button className='PREV btn' onClick={getPrevPage}>
				PREV
			</button>
			<p>
				{page} of {totalPage}
			</p>
			<button className='NEXT btn' onClick={getNextPage}>
				NEXT
			</button>
		</article>
	);
};

export default Pagination;
