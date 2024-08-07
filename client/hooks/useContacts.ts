import { getUsersContacts } from "@/actions";
import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";

export const useContact = (InputSearch: string, socket?: Socket) => {
  const [contacts, setContacts] = useState<any[]>([]);

  useEffect(() => {
    getUsersContacts(InputSearch)
      .then((res) => {
        setContacts(res);
      })
      .catch((err) => console.log(err));
  }, [InputSearch]);

  useEffect(() => {
    const handleData = (data: any) => {

      setContacts((old) =>
        old?.map((user) => (user._id == data._id ? data : user))
      );
    };

    socket?.on("user-connected", handleData);
    return () => {
      socket?.off("user-connected", handleData);
    };
  }, [socket]);

  useEffect(() => {
    const handleData = (data: any) => {
      setContacts((old) =>
        old?.map((user) => (user._id == data._id ? data : user))
      );
    };

    socket?.on("user-disconnected", handleData);

    return () => {
      socket?.off("user-disconnected", handleData);
    };
  }, [socket]);

  useEffect(() => {
    const handleData = (data: any) => {
      setContacts((old) => [data, ...old]);
    };

    socket?.on("newUserConnected:server", handleData);

    return () => {
      socket?.off("newUserConnected:server", handleData);
    };
  }, [socket]);

  return {
    contacts,
  };
};
