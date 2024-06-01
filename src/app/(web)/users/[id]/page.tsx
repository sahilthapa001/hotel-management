"user client ";

import axios from "axios";
import useSWR from "swr";

import { getUserBookings } from "@/libs/apis";
import { User } from "@/models/user";

const UserDetails = (props: { params: { id: string } }) => {
  const {
    params: { id: userId },
  } = props;
  const fetchUserBooking = async () => getUserBookings(userId);
  const fetchUserData = async () => {
    const { data } = await axios.get<User>("api/users");
    return data;
  };
  const {
    data: userBookings,
    error,
    isLoading,
  } = useSWR("/api/userbooking", fetchUserBooking);

  const {
    data: userData,
    isLoading: loadingUserData,
    error: errorGettingUserData,
  } = useSWR("/api/users", fetchUserData);

  if (error || errorGettingUserData) throw new Error("Cannot fetch data");
  if (typeof userBookings === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");

  if (typeof userData === "undefined" && !loadingUserData)
    throw new Error("Cannot fetch data");

  console.log("user data ", userData);

  return <div>UserDetails </div>;
};

export default UserDetails;
