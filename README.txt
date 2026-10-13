MILESTONES WITH MADDY — WEBSITE GUIDE
=====================================

FILES
  index.html      Home page
  portfolio.html  Full portfolio page (builds itself from photos.js)
  photos.js       <-- the ONE file you edit to add/rearrange photos
  styles.css      Colors, fonts, layout
  site.js         Behavior (menu, gallery, lightbox, form) — no need to touch
  images/         All photos + logo

Keep all of these together in the same folder when you upload to your host.


ADD A NEW PHOTO (2 steps)
  1. Copy the photo into the "images" folder.
  2. Open photos.js, find the category (Senior portraits, Weddings, ...) and add
     one line with the filename:

         "my-new-photo.jpg",

     Save. Upload photos.js and the new image to your host. That's it —
     the portfolio page shows it automatically, and clicking a photo opens
     a full-screen viewer.

  Tips
  - The first photo in a list appears first. Move lines around to reorder.
  - Use simple filenames: lowercase, no spaces (wedding-5.jpg, not "IMG 4032 final.JPG").
  - Keep each file under about 500 KB so the site stays fast. Cameras produce
    5-8 MB files — shrink them first. Easy free options:
        squoosh.app  (in your browser: set width 1600px, JPEG quality ~80)
        Mac Preview: Tools > Adjust Size, then export at 80% quality.
  - Optional description for each photo (helps Google & screen readers):
         { src: "my-new-photo.jpg", alt: "Couple laughing on the beach at sunset" },

CHANGE THE 3 BIG PHOTOS ON THE HOME PAGE
  In photos.js, scroll to "featured" and change the filename after  photo:

ADD A NEW CATEGORY (e.g. Families)
  In photos.js, copy one whole  { id: ..., title: ..., photos: [...] },  block,
  paste it below the others, and change the id (lowercase, no spaces), title,
  and photo list. It appears on the portfolio page with its own jump link.
  (To also let people pick it on the inquiry form, add an <option> in the
  "Session type" list in index.html.)

CHANGE TEXT
  Open index.html in any text editor and edit the words between the tags.
  Email address and form: search for "milestoneswithmaddy@gmail.com" and
  "formspree.io" in index.html.
