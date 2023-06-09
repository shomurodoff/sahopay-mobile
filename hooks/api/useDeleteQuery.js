import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../../services/api";

const deleteRequest = (url) => request.delete(url);

const useDeleteQuery = ({ listKeyId = null }) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError, error, isFetching } = useMutation(
    ({ url }) => deleteRequest(url),
    {
      onSuccess: (data) => {
        if (listKeyId) {
          queryClient.invalidateQueries(listKeyId);
        }
      },
      onError: (data) => {},
    }
  );

  return {
    mutate,
    isLoading,
    isError,
    error,
    isFetching,
  };
};
export default useDeleteQuery;
