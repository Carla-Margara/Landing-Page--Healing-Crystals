function buy() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");
  let zodiac = prompt("What is your zodiac sign?");

  if (zodiac === "Capricorn") {
    alert(
      "Thank you" +
        " " +
        name +
        "!" +
        " " +
        "We'll be in touch. Capricorn's birthstone is Garnet."
    );
  }
  if (zodiac === "Aquarius") {
    alert(
      "Thank you" +
        " " +
        name +
        "!" +
        " " +
        "We'll be in touch. Aquarius's birthstone is Amethyst."
    );
  }
  if (zodiac === "Pisces") {
    alert(
      "Thank you" +
        " " +
        name +
        "!" +
        " " +
        "We'll be in touch. Pisces' birthstone is Aquamarine."
    );
  }
  if (zodiac === "Aries") {
    alert(
      "Thank you" +
        " " +
        name +
        "!" +
        " " +
        "We'll be in touch. Aries' birthstone is Diamond."
    );
  }
  if (zodiac === "Taurus") {
    alert(
      "Thank you" +
        " " +
        name +
        "!" +
        " " +
        "We'll be in touch. Taurus's birthstone is Emerald."
    );
  }
  if (zodiac === "Gemini") {
    alert(
      "Thank you" +
        " " +
        name +
        "!" +
        " " +
        "We'll be in touch. Gemini's birthstone is Moonstone."
    );
  }
  if (zodiac === "Cancer") {
    alert(
      "Thank you" +
        " " +
        name +
        "!" +
        " " +
        "We'll be in touch. Cancer's birthstone is Ruby."
    );
  }
  if (zodiac === "Leo") {
    alert(
      "Thank you" +
        " " +
        name +
        "!" +
        " " +
        "We'll be in touch. Leo's birthstone is Peridot."
    );
  }
  if (zodiac === "Virgo") {
    alert(
      "Thank you" +
        " " +
        name +
        "!" +
        " " +
        "We'll be in touch. Virgo's birthstone is Blue Sapphire."
    );
  }
  if (zodiac === "Libra") {
    alert(
      "Thank you" +
        " " +
        name +
        "!" +
        " " +
        "We'll be in touch. Libra's birthstone is Opal."
    );
  }
  if (zodiac === "Scorpio") {
    alert(
      "Thank you" +
        " " +
        name +
        "!" +
        " " +
        "We'll be in touch. Scorpio's birthstone is Topaz."
    );
  }
  if (zodiac === "Sagittarius") {
    alert(
      "Thank you" +
        " " +
        name +
        "!" +
        " " +
        "We'll be in touch. Sagittarius's birthstone is Tanzanite."
    );
  } else {
    alert("Click on 'Learn More' to discover the power of crystals.");
  }
}
let buyButton = document.querySelector(".buy-button");
buyButton.addEventListener("click", buy);
