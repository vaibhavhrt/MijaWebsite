import React, {Component} from "react";
import Paper from '@material-ui/core/Paper';
import "./Ingredients.css";
import tree from "../../resources/tree.jpg";
import corn from "../../resources/corn.jpg";
import wheat from "../../resources/wheat.jpg";
import soy from "../../resources/soy.jpg";
import silk from "../../resources/silk.jpg";
import milk from "../../resources/milk.jpg";
import rice from "../../resources/rice.jpg";
import kale from "../../resources/kale.jpg";
import jojoba from "../../resources/jojoba.png";
import Fade from '@material-ui/core/Fade';

const images = [tree, corn, wheat, soy, silk, milk, rice, kale, jojoba];

const treeinfo = (
    <div className="inner_info_div">
        <h1 className="info_header">Baobab</h1>
        <p className="info_body">From the seeds the upside down tree of Africa, the unique combination of hair loving amino acids, it offers exceptional damage recover, conditioning and nourishment for you hair.</p>
    </div>
);

const corninfo = (
    <div className="inner_info_div">
        <h1 className="info_header">Phytokeratin</h1>
        <p className="info_body">Features hydrolyzed proteins from wheat, corn and soybeans to mimic human hair amino acids.  Enhances moisture and conditioning to increase strength and elasticity.</p>
    </div>
);

const wheatinfo = (
    <div className="inner_info_div">
        <h1 className="info_header">Wheat</h1>
        <p className="info_body">High in cystine, it works to give hair better body and control, increases shine and provides protective qualities.</p>
    </div>
);

const soyinfo = (
    <div className="inner_info_div">
        <h1 className="info_header">Soy</h1>
        <p className="info_body">Enhances hair manageability, improves body and texture of hair and improves combing properties.</p>
    </div>
);

const silkinfo = (
    <div className="inner_info_div">
        <h1 className="info_header">Silk</h1>
        <p className="info_body">Provides a protective barrier that adds luster, body and manageability.</p>
    </div>
);

const milkinfo = (
    <div className="inner_info_div">
        <h1 className="info_header">Milk</h1>
        <p className="info_body">One of the most nutrient rich proteins due to its complete amino acid content, it improves elasticity of hair, easier combing and strength to prevent breakage.</p>
    </div>
);

const riceinfo = (
    <div className="inner_info_div">
        <h1 className="info_header">Rice</h1>
        <p className="info_body">Shown to increase total hair volume by up to 32%, it also adds shine and enhances natural highlights.</p>
    </div>
);

const kaleinfo = (
    <div className="inner_info_div">
        <h1 className="info_header">Kale Blend</h1>
        <p className="info_body">The combination of Kale, Carrot and Lemon proteins is packed with vitamins and antioxidants for added softness, shine while increasing volume.</p>
    </div>
);

const jojobainfo = (
    <div className="inner_info_div">
        <h1 className="info_header">Jojoba</h1>
        <p className="info_body">Highly effective to repair and condition damaged hair.  Ideal for adding shine and luster.</p>
    </div>
);

const Arrow = ({ clickFunction, glyph, direction }) => (
    <div
        className={ `slide-arrow ${direction}` }
        onClick={ clickFunction }>
        { glyph }
    </div>
);

const info = [treeinfo, corninfo, wheatinfo, soyinfo, silkinfo, milkinfo, riceinfo, kaleinfo, jojobainfo];

export default class Ingredients extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            fade: true,
        };

        this.nextIndex = this.nextIndex.bind(this);
        this.prevIndex = this.prevIndex.bind(this);
        this.handleFade = this.handleFade.bind(this);
    }

    componentDidMount() {
        setInterval(
            () => this.nextIndex(),
            8000
        );
    }

    nextIndex(){
        const currindex = this.state.index;
        const newindex = currindex + 1 >= images.length ? 0 : currindex + 1;
        this.handleFade();
        setTimeout(function() {
            this.setState({index: newindex});
        }.bind(this), 500);
    }

    prevIndex(){
        const currindex = this.state.index;
        const newindex = currindex - 1 < 0 ? images.length - 1 : currindex - 1;
        this.handleFade();
        setTimeout(function() {
            this.setState({index: newindex});
        }.bind(this), 500);
    }

    handleFade(){
        this.setState({fade: false});
        setTimeout(function() {
            this.setState({fade: true});
        }.bind(this), 500);
    }

    render() {
        return(
            <div className="main_ing_div">
                <div className="bottom_ing_frame">
                    {/*<div className="main_header">*/}
                        {/*<h1 className="ing_title">Ingredients</h1>*/}
                    {/*</div>*/}
                    <div className="car_frame">
                        <Arrow
                            clickFunction={ this.prevIndex}
                            glyph="&#9664;"
                            direction="left"/>
                        <div className="ing_img_frame">
                            <Fade in={this.state.fade} timeout={{enter: 500, exit: 500}}>
                                <img src={images[this.state.index]} alt="" className="ing_image"/>
                            </Fade>
                        </div>
                        <Arrow
                            clickFunction={ this.nextIndex}
                            glyph="&#9654;"
                            direction="right"/>
                    </div>
                    <Fade in={this.state.fade} timeout={{enter: 500, exit: 500}}>
                        <div className="info_frame">
                            {info[this.state.index]}
                        </div>
                    </Fade>
                </div>
            </div>
        );
    }
}

