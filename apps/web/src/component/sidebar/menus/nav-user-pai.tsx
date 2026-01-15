import { redirect } from "next/navigation";
import React from "react";

//import { NavUser } from "./nav-user-modificado";
import { getSession } from "@repo/authweb/authnext/session";
import { headers } from "next/headers";
import { NavUser } from "./nav-user-modificado";

const NavUserPai = async () => {
  const header = await headers();
  const utilizadorActual = await getSession(header);

  if (!utilizadorActual) return redirect("/");
  //await espera(3);
  return (
    <NavUser
      name={utilizadorActual.user.name}
      apelido={utilizadorActual.user.apelido}
      email={utilizadorActual.user.email}
      avatar={""}
    />
  );
};

export default NavUserPai;
