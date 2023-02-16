import React from "react"

// @notus-pro/react
import Blogs8 from "@notus-pro/react/Blogs8"

const props = {
  heading2: {
    color: "pink",
    // subtitle: "About streets",
    title: "What We Offer",
    description:
      " ",
    alignment: "left",
  },
  cards: [
    {
      image: "https://demos.creative-tim.com/notus-pro-react/static/media/castle-1.180e8ed5.jpg",
      title: "System Development",
      description:
        "Hizratech bersedia untuk merancang, menguji dan mengimplementasikan aplikasi perangkat lunak baru atau program sesuai dengan kebutuhan klien.",
    //   user: {
    //     image: "/notus-pro-react/static/media/team-4.639c2559.jpg",
    //     name: "Tania Hanks",
    //   },
    //   icon: "fas fa-heart",
    //   text: "2.3K",
    //   link: { href: "#pablo" },
    },
    {
      image: "https://demos.creative-tim.com/notus-pro-react/static/media/pawel-nolbert.6876e1e9.jpg",
      title: "Layanan Publik",
      description:
        "Hizratech siap untuk melayani klien dalam rangka pemenuhan kebutuhan pelayanan baik di bidang jasa, layanan maupun administratif.",
    //   user: {
    //     image: "/notus-pro-react/static/media/team-1.26905a67.jpg",
    //     name: "Jasmine Tailor",
    //   },
    //   icon: "fas fa-heart",
    //   text: "2.3K",
    //   link: { href: "#pablo" },
    },
    {
      image: "https://demos.creative-tim.com/notus-pro-react/static/media/twk-tt.cff2e507.jpg",
      title: "Jual Beli Perangkat Lunak dan Keras",
      description:
        "Hizratech juga menjual berbagai jenis barang perangkat lunak dan keras.",
    //   user: {
    //     image: "/notus-pro-react/static/media/michael.660d3e04.jpg",
    //     name: "Paul Smith",
    //   },
    //   icon: "fas fa-heart",
    //   text: "2.3K",
    //   link: { href: "#pablo" },
    },
  ],
}

export default function Whatoffer() {
  return (
    <>
      <Blogs8 {...props} />
    </>
  )
}