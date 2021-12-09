import * as React from "react";
import "./pagination.scss";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationLink({
  count = 10,
  handleChange = () => {},
}) {
  return (
    <Stack spacing={4} className="pagination">
      <Pagination
        count={count}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </Stack>
  );
}
