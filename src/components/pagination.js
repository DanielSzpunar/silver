import React from 'react'
import { Link } from 'gatsby';
import '../styles/index.scss'

import paginationStyles from './pagination.module.scss'

const Pagination = ({ numPages, currentPage }) => {
	if(numPages === 0) return ""

	const pagesArray = Array.from(Array(numPages).keys()).map( (_, index) => index + 1);
	const previousPage = currentPage - 1 <= 1 ? "" : currentPage - 1;
	const nextPage = currentPage === numPages ? currentPage : currentPage + 1;

	const previousStyles = `${paginationStyles.navigate} ${paginationStyles.previous} ` 
							+ (previousPage === "" ? paginationStyles.disabled : "")
	
	const nextStyles = `${paginationStyles.navigate} ${paginationStyles.next} ` 
						+ (nextPage === currentPage ? paginationStyles.disabled : "")

	return(
		<div className={paginationStyles.pagination}>
			<Link 
				className={previousStyles} 
				to={`/${previousPage}`}
			>
				{"<"}
			</Link>
			{
				pagesArray.map( num => {
					return(
						<Page key={num} num={num} current={num === currentPage} />
					)
				})
			}
			<Link 
				className={nextStyles} 
				to={`/${nextPage}`}>
					{">"}
			</Link>
		</div>
	)
}

const Page = ({ num, current }) => {
	const toPage = num === 1 ? "" : num;
	const className = current 
		? `${paginationStyles.pageNumCurrent} ${paginationStyles.pageNum}` 
		: paginationStyles.pageNum

	return(
		<Link className={className} to={`/${toPage}`}>{num}</Link>
	)
}

export default Pagination