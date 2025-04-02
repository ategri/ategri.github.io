(() => {
  /* The time in milliseconds for the fade in and fade out
   of the hero section images. 
   Both background and plane images use this value */
  const FADE_IN_OUT_DURATION = 500;

  /* The time in milliseconds between hero image changes */
  const HERO_SWITCH_INTERVAL = 7000;

  const IDS = {
    heroPlaneParent: "Hero-Plane-Parent",
    heroPlaneImg: "Hero-Plane",
    heroSection: "Intro-Content",
    heroBackgroundImage: "Hero-Background",
  };

  const getHeroPlaneImgAttributes = (
    params = {
      src: "images/hero/Plane.png",
      alt: "Floatplane",
    }
  ) => {
    return {
      id: IDS.heroPlaneImg,
      class: "cc-airplane",
      src: params.src,
      width: "448",
      alt: params.alt,
      loading: "lazy",
    };
  };

  const getHeroBackgroundImageAttributes = (
    params = {
      src: "images/Hero-Photo.png",
      alt: "Tropical island with radiating lines from the center",
    }
  ) => {
    return {
      id: IDS.heroBackgroundImage,
      class: "u-position-absolute",
      src: params.src,
      width: "1016",
      alt: params.alt,
      loading: "lazy",
    };
  };

  const updateHero = ([bgImgAttributes, planeImgAttributes]) => {
    const heroPlaneImgParent = $("#" + IDS.heroPlaneParent);
    const heroPlaneImg = $("#" + IDS.heroPlaneImg);
    const heroBgImgParent = $("#" + IDS.heroSection);
    const heroBgImg = $("#" + IDS.heroBackgroundImage);

    heroBgImg.fadeOut(FADE_IN_OUT_DURATION, () => {
      const newBgImg = $("<img>")
        .attr(getHeroBackgroundImageAttributes(bgImgAttributes))
        .fadeOut(0);
      heroBgImg.remove();
      heroBgImgParent.append(newBgImg);
      newBgImg.fadeIn(FADE_IN_OUT_DURATION);
    });

    heroPlaneImg.fadeOut(FADE_IN_OUT_DURATION, () => {
      const newPlaneImg = $("<img>")
        .attr(getHeroPlaneImgAttributes(planeImgAttributes))
        .fadeOut(0);

      heroPlaneImg.remove();
      heroPlaneImgParent.append(newPlaneImg);
      newPlaneImg.fadeIn(FADE_IN_OUT_DURATION);
    });
  };

  function initHeroCarousel() {
    const planeImgAttributes = {
      floatplane: {
        src: "images/hero/Plane.png",
        alt: "Floatplane",
      },
      cessna: {
        src: "images/hero/Cessna.png",
        alt: "Cessna",
      },
    };

    const bgImgAttributes = {
      island: {
        src: "images/hero/Hero-Bg-1.jpg",
        alt: "Tropical island with radiating lines from the center",
      },
      desert: {
        src: "images/hero/Hero-Bg-2.jpg",
        alt: "Desert with radiating lines from the center",
      },
      forest: {
        src: "images/hero/Hero-Bg-3.jpg",
        alt: "Forest with radiating lines from the center",
      },
      mountains: {
        src: "images/hero/Hero-Bg-4.jpg",
        alt: "Mountains with radiating lines from the center",
      },
    };

    const heroSets = [
      [bgImgAttributes.island, planeImgAttributes.floatplane],
      [bgImgAttributes.desert, planeImgAttributes.cessna],
      [bgImgAttributes.forest, planeImgAttributes.cessna],
      [bgImgAttributes.mountains, planeImgAttributes.cessna],
    ];

    let currentSetIndex = 0;

    setInterval(() => {
      currentSetIndex = (currentSetIndex + 1) % heroSets.length;
      updateHero(heroSets[currentSetIndex]);
    }, HERO_SWITCH_INTERVAL);
  }

  initHeroCarousel();
})();
