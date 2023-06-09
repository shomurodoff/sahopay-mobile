import React from "react";
import { useQuery } from "@tanstack/react-query";
import { request } from "../../services/api";

const fetchRequest = (url, params) => request.get(url, params);

const useGetOneQuery = ({
  id = null,
  key = "get-one",
  url = "test",
  enabled = true,
  params = {},
  showSuccessMsg = false,
  showErrorMsg = true,
  refetchOnMount = true,
}) => {
  const { isLoading, isError, data, error, isFetching } = useQuery(
    [key, id],
    () => fetchRequest(`${url}/${id}`, params),
    {
      onSuccess: () => {},
      onError: (data) => {
        if (showErrorMsg) {
        }
      },
      enabled,
      refetchOnMount,
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

export default useGetOneQuery;
