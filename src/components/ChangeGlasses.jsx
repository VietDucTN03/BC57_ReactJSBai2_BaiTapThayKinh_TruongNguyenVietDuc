import React, { Component } from "react";
import "../assets/css/ChangeGlasses.css";

let data = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./glassesImage/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

export default class ChangeGlasses extends Component {
    state = {
        imgModel: "./glassesImage/model.jpg",
        selectedGlass: null,
        nameGlasses: "",
        desc: "",
      };
    
      changeGlasses = (id, name, desc) => {
        this.setState({
          selectedGlass: id,
          imgGlasses: `./glassesImage/v${id}.png`,
          nameGlasses: name,
          desc: desc,
        });
      };

      renderSelectedGlass() {
        const { selectedGlass, imgGlasses, nameGlasses, desc } = this.state;
        if (selectedGlass) {
          return (
            <div className="selectedGlass w-25">
              <img className="glassImg" alt="Selected Glass" src={imgGlasses} />
              <div className="glassInfo">
                <h6 className="glassName">{nameGlasses}</h6>
                <p className="glassDesc">{desc}</p>
              </div>
            </div>
          );
        }
        return null;
      }
  render() {
    return (
      <div className="abc">
        <div className="background-container">
          <img className="w-100" src="./glassesImage/background.jpg" alt="" />
          <div className="head">
            <h4 className="text-center">TRY GLASSES APP ONLINE</h4>
          </div>

          <div className="row">
            <div className="glassesChangeImg col-6 text-center">
              <img className="w-50" alt="..." src={this.state.imgModel} />
              {this.renderSelectedGlass()}
            </div>
            <div className="modelImg col-6 text-center">
              <img className="w-50" alt="..." src={this.state.imgModel} />
            </div>
          </div>
          <div className="glassesList bg-white w-50">
            {data.map((glass) => (
              <img key={glass.id} className="w-25 m-1" alt={glass.name} src={glass.url} onClick={() => {
                this.changeGlasses(glass.id, glass.name, glass.desc)
              }}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
