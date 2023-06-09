import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../../services/api";
import { isArray, get, forEach } from "lodash";

const postRequest = (url, attributes, config = {}) =>
  request.post(url, attributes, config);

const usePostQuery = ({ hideSuccessToast = false, listKeyId = null }) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError, error, isFetching } = useMutation(
    [listKeyId],
    ({ url, attributes, config = {} }) => postRequest(url, attributes, config),

    {
      onSuccess: (data) => {
        if (!hideSuccessToast) {
        }

        if (listKeyId) {
          if (isArray(listKeyId)) {
            forEach(listKeyId, (val) => {
              queryClient.invalidateQueries(val);
            });
          } else {
            queryClient.invalidateQueries(listKeyId);
          }
        }
      },
      onError: (data) => {
        if (isArray(get(data, "response.data"))) {
          forEach(get(data, "response.data"), (val) => {});
        } else {
        }
      },
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
export default usePostQuery;
