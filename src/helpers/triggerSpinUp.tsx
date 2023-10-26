import { useLayoutEffect } from "react";
import { projects } from "@/data";
const triggerSpinUp = () => {
  const runServers = () => {
    console.log(
      "----- Sent requests to trigger Render.com server spin-up behavior ----- "
    );
    projects.forEach((p) => {
      if (p.serverUrl) {
        console.log(`      Sending request to ${p.name}`);
        fetch(p.serverUrl, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((response) =>
            console.log(`RESOLVED for ${p.name}. RES: ${response}`)
          )
          .catch((e) => console.log(e.message));
      }
    });
  };

  useLayoutEffect(() => {
    setTimeout(runServers, 1000);
  }, []);

  return null;
};

export default triggerSpinUp;
