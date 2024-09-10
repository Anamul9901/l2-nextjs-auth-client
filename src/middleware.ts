export { default } from "next-auth/middleware";

//* matcher e je je route debo oigulu privet hoye jabe.
//only user access korte prbe
export const config = { matcher: ["/dashboard", "/dashboard/users"] };
