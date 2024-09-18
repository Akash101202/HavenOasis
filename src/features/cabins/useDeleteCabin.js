import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { deleteCabins } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: deleteCabins,
    onSuccess: () => {
      toast.success("Cabin Deleted Succesfully");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error("There was an Error while deleting"),
  });

  return { mutate, isLoading };
}
