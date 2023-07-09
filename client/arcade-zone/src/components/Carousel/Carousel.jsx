import React, { useEffect } from 'react';
import style from "./Carousel.module.css";


const Carousel = () => {
    'use strict';

    useEffect(() => {
        /**
         * SLIDER
         */
        const slider = document.querySelector("[data-slider]");
        const sliderContainer = document.querySelector("[data-slider-container]");
        const sliderPrevBtn = document.querySelector("[data-slider-prev]");
        const sliderNextBtn = document.querySelector("[data-slider-next]");

        let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
        let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

        let currentSlidePos = 0;

        const moveSliderItem = function () {
            sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
        };

        /**
         * NEXT SLIDE
         */
        const slideNext = function () {
            const slideEnd = currentSlidePos >= totalSlidableItems;

            if (slideEnd) {
                currentSlidePos = 0;
            } else {
                currentSlidePos++;
            }

            moveSliderItem();
        };

        sliderNextBtn.addEventListener("click", slideNext);

        /**
         * PREVIOUS SLIDE
         */
        const slidePrev = function () {
            if (currentSlidePos <= 0) {
                currentSlidePos = totalSlidableItems;
            } else {
                currentSlidePos--;
            }

            moveSliderItem();
        };

        sliderPrevBtn.addEventListener("click", slidePrev);

        /**
         * RESPONSIVE
         */
        window.addEventListener("resize", function () {
            totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
            totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

            moveSliderItem();
        });
    }, []);

    return (
        <>
        <h1>Test Carousel App</h1>
        <section className={`${style.topics}`} id="topics" aria-labelledby="topic-label">
            <div className={`${style.container} ${style["w-7/12"]}`}>
                <div className={`${style.card} flex p-10 px-0 pr-10`}>
                    <div className={`${style["card-content"]} flex flex-col justify-center px-8`}>
                        <h2 className={`${style.headline} ${style["headline-2"]} ${style["section-title"]} ${style["card-title"]} `} id="topic-label" style={{ fontSize: "20px", fontWeight: "bolder" }}>
                            Contributors
                        </h2>
                        <p className={style["card-text"]} style={{ fontSize: "16px" }}>
                                Meet the team behind our <br />website's creation.<br /> <br />The Brute Force ....
                        </p>
                        <div className={style["btn-group"]} style={{ fontSize: "20px" }}>
                            <button className={style["btn-icon"]} aria-label="previous" data-slider-prev>
                                <ion-icon name="arrow-back" aria-hidden="true"></ion-icon>
                            </button>
                            <button className={style["btn-icon"]} aria-label="next" data-slider-next>
                                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                            </button>
                        </div>
                    </div>
                    <div className={style.slider} data-slider>
                        <ul className={style["slider-list"]} data-slider-container style={{ width: "800px" }}>
                            <li className={style["slider-item"]}>
                                <a href="#" className={style["slider-card"]}>
                                    <figure className={style["slider-banner"]} >
                                        <img src="" width="507" height="618" loading="lazy" alt="Sport" className={style["img-cover"]} />
                                    </figure>
                                    <div className={style["slider-content"]}>
                                        <span className={style["slider-title"]} style={{ fontSize: "18px" }}>Monark Jain</span>
                                        <p className={style["slider-subtitle"]} style={{ fontSize: "14px" }}>50 Commits</p>
                                    </div>
                                </a>
                            </li>
                            <li className={style["slider-item"]}>
                                <a href="#" className={style["slider-card"]}>
                                    <figure className={style["slider-banner"]} >
                                        <img src="" width="507" height="618" loading="lazy" alt="Sport" className={style["img-cover"]} />
                                    </figure>
                                    <div className={style["slider-content"]}>
                                        <span className={style["slider-title"]} style={{ fontSize: "18px" }}>Monark Jain</span>
                                        <p className={style["slider-subtitle"]} style={{ fontSize: "14px" }}>50 Commits</p>
                                    </div>
                                </a>
                            </li>
                            <li className={style["slider-item"]}>
                                <a href="#" className={style["slider-card"]}>
                                    <figure className={style["slider-banner"]} >
                                        <img src="" width="507" height="618" loading="lazy" alt="Sport" className={style["img-cover"]} />
                                    </figure>
                                    <div className={style["slider-content"]}>
                                        <span className={style["slider-title"]} style={{ fontSize: "18px" }}>Monark Jain</span>
                                        <p className={style["slider-subtitle"]} style={{ fontSize: "14px" }}>50 Commits</p>
                                    </div>
                                </a>
                            </li>
                            <li className={style["slider-item"]}>
                                <a href="#" className={style["slider-card"]}>
                                    <figure className={style["slider-banner"]} >
                                        <img src="" width="507" height="618" loading="lazy" alt="Sport" className={style["img-cover"]} />
                                    </figure>
                                    <div className={style["slider-content"]}>
                                        <span className={style["slider-title"]} style={{ fontSize: "18px" }}>Monark Jain</span>
                                        <p className={style["slider-subtitle"]} style={{ fontSize: "14px" }}>50 Commits</p>
                                    </div>
                                </a>
                            </li>
                            <li className={style["slider-item"]}>
                                <a href="#" className={style["slider-card"]}>
                                    <figure className={style["slider-banner"]} >
                                        <img src="" width="507" height="618" loading="lazy" alt="Sport" className={style["img-cover"]} />
                                    </figure>
                                    <div className={style["slider-content"]}>
                                        <span className={style["slider-title"]} style={{ fontSize: "18px" }}>Monark Jain</span>
                                        <p className={style["slider-subtitle"]} style={{ fontSize: "14px" }}>50 Commits</p>
                                    </div>
                                </a>
                            </li>
                            <li className={style["slider-item"]}>
                                <a href="#" className={style["slider-card"]}>
                                    <figure className={style["slider-banner"]} >
                                        <img src="" width="507" height="618" loading="lazy" alt="Sport" className={style["img-cover"]} />
                                    </figure>
                                    <div className={style["slider-content"]}>
                                        <span className={style["slider-title"]} style={{ fontSize: "18px" }}>Monark Jain</span>
                                        <p className={style["slider-subtitle"]} style={{ fontSize: "14px" }}>50 Commits</p>
                                    </div>
                                </a>
                            </li>
                            {/* Rest of the list items */}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>

    );
};

export default Carousel;
