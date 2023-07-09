import styles from "../../css/About/Cards.module.css";

import React from "react";

function Cards() {
  return (
    <div className={styles["main-container"]}>
      <div className={`${styles["main1"]} flex justify-center items-center`}>
        <div
          className={`${styles["flex1"]} flex flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 max-w-3xl md:flex-row px-8 py-6`}
        >
          <img
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://marketplace.canva.com/EAE93oDu61A/1/0/1600w/canva-purple-blue-neon-gaming-desktop-wallpaper-PWYZmwkPtUg.jpg"
            alt=""
          />
          <div className="flex flex-col justify-start p-6">
            <h5
              className={`${styles["neontext1"]} mb-2 text-xl font-medium `}
            >
              smart work
            </h5>
            <p className={`${styles["neontext1"]} mb-4 text-base `}>
            Through collaboration, teams become more than the sum of their parts.
             They become a unified force, capable of accomplishing remarkable feats. Whether it's in sports, 
             business, or any other endeavor, the power of teamwork is undeniable.
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles["main2"]} flex justify-center items-center`}>
        <div
          className={`${styles["flex2"]} flex flex-col rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 max-w-3xl md:flex-row px-8 py-6`}
        >
          <img
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://img.freepik.com/premium-photo/gaming-desktop-pc-computer-setup-gamer-illustration_691560-5765.jpg"
            alt=""
          />
          <div className="flex flex-col justify-start p-6">
            <h5
              className={`${styles["neontext2"]} mb-2 text-xl font-medium `}
            >
              hard work
            </h5>
            <p className={`${styles["neontext2"]} mb-4 text-base `}>
            emphasizing its transformative power and its ability to turn goals into tangible outcomes. 
            It acknowledges that hard work is the driving force behind success, highlighting its importance 
            in the pursuit of one's dreams
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles["main1"]} flex justify-center items-center`}>
        <div
          className={`${styles["flex3"]} flex flex-col rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 max-w-3xl md:flex-row px-8 py-6`}
        >
          <img
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://img.freepik.com/premium-photo/gaming-desktop-pc-computer-setup-gamer-illustration_691560-5795.jpg?w=2000"
            alt=""
          />
          <div className="flex flex-col justify-start p-6">
            <h5
              className={`${styles["neontext3"]} mb-2 text-xl font-medium `}
            >
              leadership
            </h5>
            <p className={`${styles["neontext3"]} mb-4 text-base `}>
            A true leader leads by example, demonstrating integrity, humility, and empathy in their interactions
             with others.
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles["main2"]} flex justify-center items-center`}>
        <div
          className={`${styles["flex4"]} flex flex-col rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 max-w-3xl md:flex-row px-8 py-6`}
        >
          <img
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://wallpaperaccess.com/full/4161698.jpg"
            alt=""
          />
          <div className="flex flex-col justify-start p-6">
            <h5
              className={`${styles["neontext4"]} mb-2 text-xl font-medium `}
            >
              games
            </h5>
            <p className={`${styles["neontext4"]} mb-4 text-base `}>
            "Games have the remarkable ability to transport us to new worlds, ignite our imagination, and unleash 
            our inner adventurers."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
