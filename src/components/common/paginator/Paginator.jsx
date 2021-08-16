import css from './Paginator.module.css'
import React from "react";


const Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let minPage
    let maxPage


    if (props.currentPage >= 6) {
        minPage = props.currentPage - 5
    } else minPage = 1

    if (props.currentPage < 6) {
        maxPage = 9
    } else if (props.currentPage === pagesCount) {
        maxPage = pagesCount - 1
        minPage = pagesCount - 10
    } else if (props.currentPage > pagesCount - 6) {
        maxPage = pagesCount - 1
        minPage = pagesCount - 10
    } else if (props.currentPage < pagesCount) {
        maxPage = props.currentPage + 4
    }


    return <div>

        <button className={props.currentPage === 1 ? css.theLeastPage : css.theLeastPage_nonSelected}
                onClick={() => {
                    props.onPageChanged(1)
                }}>
            {pages[0]}
        </button>

        {
            pages.slice(minPage, maxPage).map(p => {
                return <button
                    key={p}
                    className={props.currentPage === p ? css.selectedPage : css.nonSelected}
                    onClick={() => {
                        props.onPageChanged(p)
                    }}>{p} </button>
            })
        }

        <button className={props.currentPage === pagesCount ? css.theMaxPage : css.theMaxPage_nonSelected}
                onClick={() => {
                    props.onPageChanged(pagesCount)
                }}>
            {pagesCount}
        </button>

    </div>

}
export default Paginator


/*if (props.currentPage >= 3) {
    minPage = props.currentPage - 2
} else minPage = 1

if (props.currentPage < 3) {
    maxPage = 4
} else if (props.currentPage === pagesCount) {
    maxPage = pagesCount - 1
    minPage = pagesCount - 3
} else if (props.currentPage > pagesCount - 2) {
    maxPage = pagesCount - 1
    minPage = pagesCount - 3
} else if (props.currentPage < pagesCount) {
    maxPage = props.currentPage + 1
}*/
