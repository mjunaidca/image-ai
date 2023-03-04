// "use client";
// import React from "react";
// import axios from "axios";

// const mongokey = process.env.MONGO_API;

// async function createAccount() {
//   const username = document.querySelector("[name=user]").value.toString();
//   const email = document.querySelector("[name=email]").value.toString();
//   axios
//     .post(
//       "https://eu-central-1.aws.data.mongodb-api.com/app/data-tvbbl/endpoint/data/v1/action/insertOne",
//       {
//         collection: "testBeta",
//         database: "test-beta",
//         dataSource: "Cluster0",
//         document: {
//           user: username,
//           email: email,
//           //   name: "Earth",
//           //   type: "planet",
//           //   info: {
//           //     atmosphere: "thin",
//           //     satellites: 1,
//           //     distanceFromSun: 92960000,
//           //   },
//         },
//       },
//       {
//         "Content-Type": "application/json",
//         "api-key": mongokey,
//       }
//     )
//     .catch((err) => {
//       console.log("call failed:", err);
//     });

//   let displaysuccess = "Account Created Successfully";

//   document.getElementById("displayresult1").innerHTML = displaysuccess;
// }

// export default function page() {
//   return (
//     <main>
//       <div className=" bg-black  flex max-w-screen-2xl  w-full mx-auto flex-col items-center justify-center py-2 min-h-fit  ">
//         <main className="flex min-h-screen text-white flex-1 w-screen flex-col items-center justify-center text-center px-4 mt-6 sm:mt-10">
//           <div>
//             <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-9">
//               Create Your Account{" "}
//             </h1>
//           </div>
//           <form onSubmit={handleSubmit}
//           <h5>Create your username</h5>
//           <input name="user"></input>
//           <h5>Create your password</h5>
//           <input name="email"></input>
//           <button onClick={createAccount} className="my-3 p-2 bg-slate-500">
//             Create Account
//           </button>
//           <h2 id="displayresult1"></h2>
//         </main>
//       </div>
//     </main>
//   );
// }

import React from "react";

export default function page() {
  return <div>page</div>;
}
