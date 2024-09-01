import React from "react";
import './styles.css';
import Pagination from "@mui/material/Pagination";

const PaginationComponent = ({page, handlePageChange}) => {
  

  return (
    <div className="pagination">
      <Pagination
        count={10}
        page={page}
        onChange={(event, value) => handlePageChange(event, value)}
        sx={{
          color: "var(--white)",
          "& .Mui-selected": {
            backgroundColor: "var(--blue) !important",
            borderColor: "var(--blue) !important",
            color: "var(--white) !important",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--grey) !important",
          },
          "& .MuiPaginationItem-text": {
            color: "var(--white)",
            border: "1px solid var(--grey)",
            display:"flex",
            alignItems: "center",
            justifyContent: "center"
          },
        }}
      />
    </div>
  );
};

export default PaginationComponent;
