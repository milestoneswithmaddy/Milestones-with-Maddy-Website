/* =====================================================================
   PHOTOS.JS  —  the ONLY file you need to edit to add or change photos.

   HOW TO ADD A PHOTO
   1. Put the image file in the "images" folder (JPG, ~1600px wide is plenty;
      see README.txt for a quick way to shrink big photos).
   2. Add its filename to the list of the category it belongs in, below.
      Example:   "wedding-5.jpg",
      (Keep the quotes and the comma at the end.)
   3. Save, and re-upload photos.js + the new image to your host. Done!

   The first photo in each list shows first on the portfolio page.

   OPTIONAL: describe a photo for screen readers / Google by using braces:
      { src: "wedding-5.jpg", alt: "Bride and groom sharing a first dance" },

   HOW TO ADD A NEW CATEGORY (e.g. Families)
   Copy one whole { ... } block in "categories", give it a new id, title,
   and list of photos. It will appear on the portfolio page automatically
   and in the "Session type" dropdown if you add it there in index.html.
   ===================================================================== */

window.PORTFOLIO = {

  categories: [
    {
      id: "seniors",
      title: "Senior portraits",
      alt: "Senior portrait session by Milestones with Maddy",
      photos: [
        "senior1.jpg",
        "senior2.jpg",
        "senior3.jpg",
        "senior4.jpg",
        "senior5.jpg",
        "senior6.jpg",
      ],
    },
    {
      id: "proposals",
      title: "Proposals & couples",
      alt: "Proposal and couples photography by Milestones with Maddy",
      photos: [
        "proposal1.jpg",
        "proposal2.jpg",
        "proposal3.jpg",
        "proposal4.jpg",
        "proposal5.jpg",
        "proposal6.jpg",
      ],
    },
    {
      id: "weddings",
      title: "Weddings",
      alt: "Wedding photography by Milestones with Maddy",
      photos: [
        "wedding1.jpg",
        "wedding2.jpg",
        "wedding3.jpg",
        "wedding4.jpg",
        "wedding5.jpg",
        "wedding6.jpg",
      ],
    },
    {
      id: "scenic",
      title: "Nature & scenic",
      alt: "Scenic South Coast photography by Milestones with Maddy",
      photos: [
        "scenic1.jpg",
        "scenic2.jpg",
        "scenic3.jpg",
        "scenic4.jpg",
        "scenic5.jpg",
        "scenic6.jpg",
      ],
    },
  ],

  /* The three big cards on the home page. Each links to its category on the
     portfolio page. Change "photo" to any filename in the images folder. */
  featured: [
    { category: "seniors",   photo: "senior2.jpg", title: "Senior portraits", tag: "Portraits" },
    { category: "scenic",    photo: "scenic4.jpg",        title: "Places & light",   tag: "Scenic"    },
    { category: "proposals", photo: "proposal4.jpg",      title: "Love stories",     tag: "Couples"   },
  ],
};
