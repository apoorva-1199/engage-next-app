import React from "react";

function Dashboard() {
  return <div>Dashboard</div>;
}

export default React.memo(Dashboard);

// export async function generateStaticParams() {
//   const roles = ["teacher", "student"];

//   return roles.map((role) => ({
//     slug: role,
//   }));
// }
