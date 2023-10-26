// import { Config } from "tailwindcss";
// import resolveConfig from "tailwindcss/resolveConfig";
// import tailwindConfig from "../../tailwind.config";
// const getTailwindConfig: Config = resolveConfig(tailwindConfig);

// export default getTailwindConfig;

// React
import { useMemo } from "react";

// Third Party
import resolveConfig from "tailwindcss/resolveConfig";

// Project
import tailwindConfig from "../../tailwind.config.js";

export default function useTailwind() {
  const tailwind = useMemo(
    () => resolveConfig(tailwindConfig),
    [tailwindConfig]
  );

  return tailwind;
}
