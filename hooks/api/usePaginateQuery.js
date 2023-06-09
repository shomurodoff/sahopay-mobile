import React from "react";
import { useQuery } from "@tanstack/react-query";
import { request } from "../../services/api";

const usePaginateQuery = ({
  key = "get-all",
  url = "/",
  page = 1,
  params = {},
  showSuccessMsg = false,
  showErrorMsg = false,
}) => {
  const { isLoading, isError, data, error, isFetching } = useQuery(
    [key, page, params],
    () => request.get(`${url}`, params),
    {
      keepPreviousData: true,
      onSuccess: () => {
        if (showSuccessMsg) {
        }
      },
      onError: (data) => {
        if (showErrorMsg) {
        }
      },
    }
  );

  return {
    isLoading,
    isError,
    data,
    error,
    isFetching,
  };
};

export default usePaginateQuery;
