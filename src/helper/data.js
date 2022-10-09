const data = [
  {
    photographer: "Cadillac",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic id eaque possimus, aliquid eius nam architecto voluptate itaque ducimus.",

    src: {
      large:
        "https://www.extraspace.com/blog/wp-content/uploads/2020/07/classic-car-types-vintage-cars.jpg.webp ",
    },
  },
  {
    photographer: "1921 Hudson Super Six phaeton",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic id eaque possimus, aliquid eius nam architecto voluptate itaque ducimus.",
    src: {
      large:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/1921_Hudson_Phaeton_AACA_Iowa_2012_fr.jpg/800px-1921_Hudson_Phaeton_AACA_Iowa_2012_fr.jpg",
    },
  },
  {
    photographer: "Chevrolet Corvette ",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic id eaque possimus, aliquid eius nam architecto voluptate itaque ducimus.",
    src: {
      large:
        "https://www.extraspace.com/blog/wp-content/uploads/2020/07/classic-car-types-muscle-cars.jpg",
    },
  },
  {
    photographer: "Ford Country Squire",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic id eaque possimus, aliquid eius nam architecto voluptate itaque ducimus.",
    src: {
      large:
        "https://www.extraspace.com/blog/wp-content/uploads/2020/07/classic-car-types-station-wagons-1024x614.jpg",
    },
  },
  {
    photographer: "Volkswagen Beetle",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic id eaque possimus, aliquid eius nam architecto voluptate itaque ducimus.",
    src: {
      large:
        "https://www.extraspace.com/blog/wp-content/uploads/2020/07/classic-car-types-classic-cars.jpg",
    },
  },
  {
    photographer: "Porsche 911",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic id eaque possimus, aliquid eius nam architecto voluptate itaque ducimus.",
    src: {
      large:
        "https://www.extraspace.com/blog/wp-content/uploads/2020/07/classic-car-types-sports-cars-1024x767.jpg",
    },
  },
  {
    photographer: "Ford Ranchero",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic id eaque possimus, aliquid eius nam architecto voluptate itaque ducimus.",
    src: {
      large:
        "https://www.extraspace.com/blog/wp-content/uploads/2020/07/classic-car-types-coupe-utility-vehicles.jpg",
    },
  },
  {
    photographer: "1951 Cadillac ",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic id eaque possimus, aliquid eius nam architecto voluptate itaque ducimus.",
    src: {
      large:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/The_1951_Cadillac_Classic.jpg",
    },
  },
  {
    photographer: "1974 Rolls Royce Silver",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic id eaque possimus, aliquid eius nam architecto voluptate itaque ducimus.",
    src: {
      large: "http://sainthelenaisland.info/classiccarsstevebiggsandroller.jpg",
    },
  },
  {
    photographer: "1971 Bugatti",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic id eaque possimus, aliquid eius nam architecto voluptate itaque ducimus.",
    src: {
      large:
        "https://car-from-uk.com/ebay/carphotos/full/ebay149823624010076.jpg",
    },
  },
  {
    photographer: "1936 Packard",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic id eaque possimus, aliquid eius nam architecto voluptate itaque ducimus.",
    src: {
      large:
        "https://cdn.dealeraccelerate.com/rkm/1/7904/535523/790x1024/1936-packard-120",
    },
  },
  {
    photographer: "1933 Ford",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic id eaque possimus, aliquid eius nam architecto voluptate itaque ducimus.",
    src: {
      large:
        "https://cdn.dealeraccelerate.com/rkm/1/7979/535625/790x1024/1933-ford-coupe",
    },
  },
  {
    photographer: "1969 Chevrolet",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic id eaque possimus, aliquid eius nam architecto voluptate itaque ducimus.",
    src: {
      large:
        "https://cdn.dealeraccelerate.com/rkm/1/7925/526298/790x1024/1969-chevrolet-camaro",
    },
  },
  {
    photographer: "2014 Ford Mustang",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic id eaque possimus, aliquid eius nam architecto voluptate itaque ducimus.",
    src: {
      large:
        "https://cdn.dealeraccelerate.com/rkm/1/7997/535305/790x1024/2014-ford-mustang-roush-stage-3",
    },
  },
  {
    photographer: "1966 Chevrolet Corvette",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic id eaque possimus, aliquid eius nam architecto voluptate itaque ducimus.",
    src: {
      large:
        "https://cdn.dealeraccelerate.com/rkm/1/7973/535075/790x1024/1966-chevrolet-corvette",
    },
  },
  {
    photographer: "1934 Chevrolet Coupe",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic id eaque possimus, aliquid eius nam architecto voluptate itaque ducimus.",
    src: {
      large:
        "https://cdn.dealeraccelerate.com/rkm/1/7917/526403/790x1024/1934-chevrolet-coupe",
    },
  },
  {
    photographer: "1957 Chevrolet",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic id eaque possimus, aliquid eius nam architecto voluptate itaque ducimus.",
    src: {
      large:
        "https://cdn.dealeraccelerate.com/rkm/1/7975/531848/790x1024/1957-chevrolet-210",
    },
  },
  {
    photographer: "1962 Chevrolet",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic id eaque possimus, aliquid eius nam architecto voluptate itaque ducimus.",
    src: {
      large:
        "https://cdn.dealeraccelerate.com/rkm/1/7929/526995/790x1024/1962-chevrolet-bel-air",
    },
  },
  {
    photographer: "1965 Buick",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic id eaque possimus, aliquid eius nam architecto voluptate itaque ducimus.",
    src: {
      large:
        "https://cdn.dealeraccelerate.com/rkm/1/7820/520706/790x1024/1965-buick-riviera-gs",
    },
  },
  {
    photographer: "1965 Factory Five Racing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic id eaque possimus, aliquid eius nam architecto voluptate itaque ducimus.",
    src: {
      large:
        "https://cdn.dealeraccelerate.com/rkm/1/7985/534257/790x1024/1965-factory-five-racing-cobra",
    },
  },
  {
    photographer: "1966 Chevrolet",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic id eaque possimus, aliquid eius nam architecto voluptate itaque ducimus.",
    src: {
      large:
        "https://cdn.dealeraccelerate.com/rkm/1/7805/523223/790x1024/1966-chevrolet-corvette",
    },
  },
  {
    photographer: "1966 Ford",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic id eaque possimus, aliquid eius nam architecto voluptate itaque ducimus.",
    src: {
      large:
        "https://cdn.dealeraccelerate.com/rkm/1/7807/517580/790x1024/1966-ford-mustang",
    },
  },
  {
    photographer: "1969 Chevrolet",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic id eaque possimus, aliquid eius nam architecto voluptate itaque ducimus.",
    src: {
      large:
        "https://cdn.dealeraccelerate.com/rkm/1/7855/521745/790x1024/1969-chevrolet-c10-pickup-truck",
    },
  },
  {
    photographer: "1988 Ferrari 328 GTS",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic id eaque possimus, aliquid eius nam architecto voluptate itaque ducimus.",
    src: {
      large:
        "https://cdn.dealeraccelerate.com/rkm/1/7804/528657/790x1024/1988-ferrari-328-gts",
    },
  },
  {
    photographer: "1995 Chevrolet",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic id eaque possimus, aliquid eius nam architecto voluptate itaque ducimus.",
    src: {
      large:
        "https://cdn.dealeraccelerate.com/rkm/1/7878/526934/790x1024/1995-chevrolet-tahoe-ls-4x4",
    },
  },
  {
    photographer: "2002 Ford Thunderbird",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic id eaque possimus, aliquid eius nam architecto voluptate itaque ducimus.",
    src: {
      large:
        "https://cdn.dealeraccelerate.com/rkm/1/7984/532738/790x1024/2002-ford-thunderbird",
    },
  },
  {
    photographer: "2021 Dodge",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic id eaque possimus, aliquid eius nam architecto voluptate itaque ducimus.",
    src: {
      large:
        "https://cdn.dealeraccelerate.com/rkm/1/8008/534824/790x1024/2021-dodge-challenger-srt-hellcat-redeye",
    },
  },
];

export default data;
