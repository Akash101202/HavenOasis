import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";

export default function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isLoading } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success("Booking Deleted Succesfully");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => toast.error("There was an Error while deleting"),
  });

  return { deleteBooking, isLoading };
}
