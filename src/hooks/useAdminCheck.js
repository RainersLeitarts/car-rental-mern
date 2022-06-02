import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import useAxiosPrivate from "./useAxiosPrivate";

const useAdminCheck = () => {
  const axiosPrivate = useAxiosPrivate()
  const [isAdmin, setIsAdmin] = useState()

  useEffect(async () => {
    const response = await axiosPrivate.get('/users/isAdmin')
    setIsAdmin(response.status === 200)
  })
  
  return isAdmin
};

export default useAdminCheck;