import React from "react";
import styles from "../../../css/DashBoard/Dashboard.module.css";
import { Heading } from "@chakra-ui/layout";

function SearchHeading() {
  return (
    <>
      <div className={styles.neonHeadingContainer}>
        <Heading className={styles.neonHeading} fontSize="8vh" p={8}>
          DASHBOARD
        </Heading>
      </div>
      <div className={styles.neonHeading2}>
        <p>
          <strong>This Is Where You can find our Blogs which may be helpful for you in anyway</strong>
        </p>
      </div>
    </>
  );
}

export default SearchHeading;
