import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          // linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          // linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          // linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl:
            "https://c.wallhere.com/photos/8d/e9/women_model_monochrome_hat-29527.jpg!d",
          size: "large",
          id: 4,
          // linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl:
            "https://www.apetogentleman.com/wp-content/uploads/2018/09/lounge-suit-guide-560x420.jpg",
          size: "large",
          id: 5,
          // linkUrl: "shop/mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem title={title} key={id} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
