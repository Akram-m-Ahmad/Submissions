import React from "react";
import Gallery from "react-grid-gallery";

const IMAGES = [
  {
    src: require("../img/1.jpg"),
    thumbnail: require("../img/1.jpg"),
    thumbnailWidth: 320,
    thumbnailHeight: 174,

    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: require("../img/2.jpg"),
    thumbnail: require("../img/2.jpg"),
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" }
    ],
    caption: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src: require("../img/3.jpg"),
    thumbnail: require("../img/3.jpg"),
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: require("../img/4.jpg"),
    thumbnail: require("../img/4.jpg"),
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: require("../img/5.jpg"),
    thumbnail: require("../img/5.jpg"),
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: require("../img/6.jpg"),
    thumbnail: require("../img/6.jpg"),
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: require("../img/7.jpg"),
    thumbnail: require("../img/7.jpg"),
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: require("../img/8.jpg"),
    thumbnail: require("../img/8.jpg"),
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: require("../img/10.jpg"),
    thumbnail: require("../img/10.jpg"),
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: require("../img/11.jpg"),
    thumbnail: require("../img/11.jpg"),
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: require("../img/12.jpg"),
    thumbnail: require("../img/12.jpg"),
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: require("../img/13.jpg"),
    thumbnail: require("../img/13.jpg"),
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: require("../img/14.jpg"),
    thumbnail: require("../img/14.jpg"),
    thumbnailWidth: 320,
    thumbnailHeight: 212
  }
];
export default function gallery(props) {
  return <Gallery images={IMAGES} />;
}
