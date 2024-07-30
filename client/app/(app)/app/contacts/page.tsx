import { auth } from "@/auth";
import { Search } from "@/components/forms";
import ContactItem from "@/components/pages/contact/ContactItem";
import { pFecth } from "@/lib";
import { User } from "@/types";

import React from "react";

const page = async ({
  searchParams,
}: {
  searchParams: {
    input: string;
  };
}) => {

  let InputSearch = searchParams.input ?? "";

  const session = await auth();
  let users;
  try {
    users = await pFecth(
      `/user/${session?.user.id}${InputSearch ? `/${InputSearch}`: ""}`,
      "GET",
      undefined,
      "no-cache"
    );
    console.log(users);
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="m-auto">
      <Search input={InputSearch} />

      <div className="mt-4">
       {users.map((user:User) => (
        <ContactItem  {...user}/>
       ))}
      </div>
    </div>
  );
};

export default page;
