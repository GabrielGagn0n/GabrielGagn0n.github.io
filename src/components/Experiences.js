import React from "react";
import "../components/ExperiencesCard"
import "../components-css/Experiences.css"
import Slider from "react-slick";
import ExperienceCard from "../components/ExperiencesCard";

const Experiences = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true
    };

    return (
        <div className="section">
            <div className="experience-text">
                <h4>Some Experiences will be here...</h4>
            </div>

            <div className="experiences-container">
                <Slider {...settings}>
                    <div>
                        <ExperienceCard
                            title="Lorem ipsum"
                            description="Lorem ipsum odor amet, consectetuer adipiscing elit. Mollis nibh fusce penatibus fames, eu massa quis. Ultricies non elit consectetur curabitur risus et ad augue penatibus. Dictum vehicula inceptos vivamus sem duis placerat risus. Fusce mus tortor nascetur; scelerisque nascetur taciti libero. Sollicitudin interdum nulla nibh convallis fermentum nostra nunc fringilla scelerisque. Neque lacus ac ornare eleifend dapibus iaculis class at. Ac inceptos rutrum cursus arcu aptent lacinia ullamcorper nam."
                        />
                    </div>
                    <div>
                        <ExperienceCard
                            title="Lorem ipsum"
                            description="Sit sagittis vitae varius venenatis etiam egestas. Pulvinar efficitur integer conubia; malesuada netus class ex. Quis primis pharetra pellentesque ridiculus dictum vivamus suscipit. Lacinia nisi eros aliquam imperdiet enim viverra condimentum. Commodo venenatis inceptos, aenean nec curabitur luctus. Malesuada montes est finibus semper fusce morbi. Habitant semper netus aliquam lorem mi porttitor diam imperdiet. Nibh penatibus nam consequat vivamus eleifend porttitor tempus consequat accumsan."
                        />
                    </div>
                    <div>
                        <ExperienceCard
                            title="Lorem ipsum"
                            description="Dolor egestas pulvinar nisl iaculis nisi sem magna pretium id. Vitae congue nascetur egestas montes; luctus primis non bibendum convallis. Rutrum blandit feugiat eget semper proin integer ultricies aliquet. Suspendisse tempor lobortis penatibus quam ornare sociosqu varius. Tortor cubilia risus viverra; dignissim taciti auctor. Torquent nisl faucibus interdum elit malesuada sociosqu. Magnis suspendisse vehicula congue morbi facilisis justo."
                        />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Experiences;
