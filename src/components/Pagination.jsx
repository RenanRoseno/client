import React, { useEffect } from "react";
import { PaginationItem, Pagination } from "@material-ui/lab";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/posts";

const Paginate = ({ page }) => {
  const { numberOfPages } = useSelector((state) => state.posts);
  useSelector((state) =>  console.log(state.posts))
  console.log(numberOfPages, page)
  const dispatch = useDispatch();
  const classes = useStyles();
 

  useEffect(() => {
    if (page) dispatch(getPosts(page));
  }, [dispatch, page]);

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/posts?page=${item.page}`}
        />
      )}
    />
  );
};

export default Paginate;
