import React, { useState } from 'react';
import classes from './Showmore.module.css';
import ShowmoreCategory from './ShowmoreCategory';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function ShowMore() {
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <div className={classes.showmore}>
      <div className={classes.showmorebtn}>
        <button
          className={classes['showmore--btn']}
          onClick={() => setIsShowMore(!isShowMore)}
        >
          {isShowMore ? (
            <div className={classes['showmore--btn__layout']}>
              <span>Show Less</span> <FaChevronUp />
            </div>
          ) : (
            <div>
              Show More <FaChevronDown />
            </div>
          )}
        </button>
      </div>
      {isShowMore && <ShowmoreCategory />}
    </div>
  );
}

export default ShowMore;
