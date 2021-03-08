import MotorCortex from '@kissmybutton/motorcortex';
import MCAnimeDefinition from "@kissmybutton/motorcortex-anime";
import * as DefaultStyle from '../../shared/colorPalette';
import buildCSS from './pieChartStylesheet';
import { fadeOutOpacityControl } from '../../shared/opacityControl';

const MCAnime = MotorCortex.loadPlugin(MCAnimeDefinition);

/**
 * The purpose of extending the HTMLClip is to full, parametric 
 * HTMLClips with both context and Incidents.
 * 
 * HTMLClip allows you to set your html, css, fonts and audioSources
 * upfront by the corresponding getter methods. You can use the this.attrs
 * reference on these methods so you can generate dynamic content.
 * Overwrite ONLY the ones you are interested in, ignore the rest.
 * The buildTree method allows developers to define Incidents (of any plugin)
 * dynamically and position them on the Clip.
 */
export default class PieChart extends MotorCortex.HTMLClip{

    get html() {     
        this.data = this.attrs.data.data;
        
        return <div class="container-pieChart">
            <h1 class="title">{this.buildTitle()}</h1> 
            <div class='columns'>
                <div class="col-1">
                    <div class="piechart">
                    </div> 
                </div>
            <div class="col-2">
                <div class="legend">{this.buildLegend()}</div>
            </div>
            </div>
        </div>
    }

    get css(){
        let cssArgs = {
            data: this.attrs.data,
            palette: this.attrs.palette ? this.attrs.palette : {},
            font: this.attrs.font ? this.attrs.font : {},
            radiusString: this.createRadiusString()
        }
        return buildCSS(cssArgs);
    }

    get fonts(){
        return [{
            type: 'google-font',
            src: this.attrs.font?.url? this.attrs.font.url : 'https://fonts.googleapis.com/css2?family=Staatliches&display=swap'
        }];
    }

    buildTree(){
        fadeOutOpacityControl(this, `.container-pieChart`);
        if (this.attrs.timings.static === 0) {
            this.static = 0;
        } else {
            this.static = this.attrs.timings.static ?
                this.attrs.timings.static : 1000;
        }
        this.intro = this.attrs.timings.intro ? this.attrs.timings.intro : 0;
        this.outro = this.attrs.timings.outro ? this.attrs.timings.outro : 0;

        if (this.intro) {
            const rotateDuration = Math.round(this.intro * 0.8);
            const titleInDuration = Math.round(this.intro * 0.4);

            if (this.attrs.data.title) {
                [...this.attrs.data.title].forEach((char, index) => {
                    const titleIn = new MCAnime.Anime({
                        animatedAttrs: {
                            right: '0%',
                            opacity: 1
                            
                        },
                        initialValues: {
                            right: '-102%',
                            opacity: 0,
                            position: 'relative'
                        }
                        },
                        {
                        duration: Math.round(titleInDuration/this.attrs.data.title.length),
                        selector: `.char-${index}`,
                        easing: 'easeOutCubic'
                        });
                    this.addIncident(titleIn, Math.round(titleInDuration/this.attrs.data.title.length) * index);
                })
            }

            const rotateIn = new MCAnime.Anime({
                animatedAttrs: {
                    "background-image": `conic-gradient(${this.createRadiusString()})` 
                },
                initialValues: {
                    "background-image": `conic-gradient(${this.createNullRadiusString()})` 
                }
            },
            {
                duration: rotateDuration,
                selector: `.piechart`,
                easing: 'easeInOutCubic'
            }
            );
            this.addIncident(rotateIn, titleInDuration - this.intro * 0.2);

            const legendIn = new MCAnime.Anime({
                animatedAttrs: {
                    'width': '75%',
                    'min-width': '50%',
                    opacity: 1
                },
                initialValues: {
                    width: '0%',
                    'min-width': '0%',
                    opacity: 0,
                }
            },{
                    duration: rotateDuration,
                    selector: '.legend',
                    easing: 'easeInOutCubic'
                }
            );

            this.addIncident(legendIn, titleInDuration - this.intro * 0.2);
        }

        const staticPie = new MCAnime.Anime({
            animatedAttrs: {},
        },
        {
            duration: this.static,
            selector: ".container-pieChart"
        });

        this.addIncident(staticPie, this.intro);


        if (this.attrs.timings?.outro) {
            const outroDuration = Math.round(this.attrs.timings?.outro);

            const titleOut = new MCAnime.Anime({
                animatedAttrs: {
                    'top': '-10%'
                },
                initialValues: {
                    'top': '0%'
                }
            },{
                    duration: outroDuration * 0.5,
                    selector: '.title',
                    easing: 'easeInQuart'
                }
            );
            this.addIncident(titleOut, this.intro + this.static + this.outro * 0.2);

            const legendOut = new MCAnime.Anime({
                animatedAttrs: {
                    width: '0%',
                    'min-width': '0%',
                    opacity: 0,
                },
            },{
                    duration: outroDuration,
                    selector: '.legend',
                    easing: 'easeInOutCirc'
                }
            );
            this.addIncident(legendOut, this.intro + this.static);

            const pieOut = new MCAnime.Anime({
                animatedAttrs: {
                    "background-image": `conic-gradient(${this.createNullRadiusString()})` 
                },
                initialValues: {
                    "background-image": `conic-gradient(${this.createRadiusString()})` 
                }
            },
            {
                duration: outroDuration,
                selector: `.piechart`,
                easing: 'easeInOutCubic'
            }
            );
            this.addIncident(pieOut, this.intro + this.static);
        }
    }

    createRadiusString() {
        let gradientString = '';
        let turnCount = 0;
        for (let datum in this.data) {
            if (datum === "0") {
                gradientString += `
                    ${this.data[datum].color ? this.data[datum].color : this.generateColor(datum)}
                    ${this.data[datum].value / 100}turn,
                `;
            } else {
                gradientString += `
                    ${this.data[datum - 1].color ? this.data[datum].color : this.generateColor(datum)}
                    ${this.data[datum - 1].value / 100}turn,
                    ${this.data[datum].color ? this.data[datum].color : this.generateColor(datum)}
                    ${turnCount + this.data[datum].value / 100}turn,
                `;
            }
            turnCount += this.data[datum].value / 100;
        }
        gradientString = gradientString + 'rgba(0,0,0,0) 0 360deg';

        return gradientString;
    }

    createNullRadiusString() {
        let gradientString = '';
        let turnCount = 0;
        for (let datum in this.data) {
            if (datum === "0") {
                    gradientString += `
                    ${this.data[datum].color ? this.data[datum].color : this.generateColor(datum)}
                    ${0}turn,
                `;
            } else {
                gradientString += `
                    ${this.data[datum - 1].color ? this.data[datum].color : this.generateColor(datum)}
                    ${0}turn,
                    ${this.data[datum].color ? this.data[datum].color : this.generateColor(datum)}
                    ${0}turn,
                `;
            }
            turnCount += this.data[datum].value / 100;
        }
        gradientString = gradientString + 'rgba(0,0,0,0) 0 360deg';

        return gradientString;
    }

    generateColor(index) {
        if (index > DefaultStyle.colorPalette.dataColors.length - 1) {
            return DefaultStyle.colorPalette.dataColors[Math.floor(Math.random() * Math.floor(DefaultStyle.colorPalette.dataColors.length))];
        }
        return DefaultStyle.colorPalette.dataColors[index];
    }


    buildTitle() {
        return [...this.attrs.data.title].map((char, index) => {
            return <div class="char"><div class={'char-' + index + (char === ' '? ' space' : '')}>{char}</div></div>
        })
    }

    buildLegend() {
        return this.attrs.data.data.map((elem, index) => {
            if (elem.name.length > 24) {
                elem.name = elem.name.substring(0, 21);
                elem.name += "...";
            }
            let legendRow = 
                <div class="legend-row" >
                    <div class={'meter-'+index}></div>
                    <div class="legend-text">{elem.name}</div>
                </div>
            return legendRow;
        })
    }
}