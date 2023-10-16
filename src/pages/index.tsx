import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#212121",
        width: "100%",
        height: "100vh",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4">
        Welcome to the Formik Exploration Project
      </Typography>

      <ul>
        <li>
          <Link href={"/forms/basic"}>
            <Typography sx={{ color: "whitesmoke" }}>
              Basic formik form
            </Typography>{" "}
          </Link>
        </li>
        <li>
          <Link href={"/forms/basic-dynamic"}>
            <Typography sx={{ color: "whitesmoke" }}>
              Basic Dynamic formik form
            </Typography>{" "}
          </Link>
        </li>
        <li>
          <Link href={"/forms/multi-level-dynamic-form/two-level-form"}>
            <Typography sx={{ color: "whitesmoke" }}>
              Duo Level Dynamic form
            </Typography>{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}
