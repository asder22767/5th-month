import telemetryAVIF from "./assets/telemetry.avif";
import telemetryAVIF2x from "./assets/telemetry.avif";
import telemetryWEBP from "./assets/telemetry.avif";
import telemetryWEBP2x from "./assets/telemetry.avif";
import telemetryJPG from "./assets/telemetry.avif";
import telemetryJPG2x from "./assets/telemetry.avif";

export function Information () {
    return (
        <section class="information">
            <div class="container">
                <ul class="information__list">
                    <li class="information__items">
                        <div class="information__wrapper">
                            <div class="information__wleft">
                                <h3 class="information__heading heading-color--similarities">Easy to use riding telemetry</h3>

                                <p class="information__text text--similarities">The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.</p>

                                <a href="#" class="information__link-button link--button">Learn More</a>
                            </div>

                            <div class="information__wright">
                                <picture>                                    
                                    <source 
                                    type="image/avif"
                                    srcset="./img/telemetry.webp 1x, ./img/telemetry@2x.webp 2x"/>
                                    
                                    <source 
                                    type="image/webp"
                                    srcset="./img/telemetry.webp 1x, ./img/telemetry@2x.webp 2x"/>
                                    
                                    <img src="./img/telemetry.jpg" alt="effectiveness of telemetry" class="information__img" srcset="./img/telemetry.jpg 1x, ./img/telemetry@2x.jpg 2x"/>
                                </picture>
                            </div>
                        </div>
                    </li>

                    <li class="information__items">
                        <div class="information__wrapper">
                            <div class="information__wleft">
                                <h3 class="information__heading heading-color--similarities">Easy to use riding telemetry</h3>

                                <p class="information__text text--similarities">The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.</p>

                                <a href="#" class="information__link-button link--button">Learn More</a>
                            </div>

                            <div class="information__wright">
                                <picture >                                    
                                    <source 
                                    type="image/avif"
                                    srcset="./img/city.avif 1x, ./img/city@2x.avif 2x"/>
                                    
                                    <source 
                                    type="image/webp"
                                    srcset="./img/city.webp 1x, ./img/city@2x.webp 2x"/>
                                    
                                    <img src="./img/city.jpg" alt="accessibility in the city" class="information__img" srcset="./img/city.jpg 1x, ./img/city@2x.jpg 2x"/>
                                </picture>
                            </div>
                        </div>
                    </li>

                    <li class="information__items">
                        <div class="information__wrapper">
                            <div class="information__wleft">
                                <h3 class="information__heading heading-color--similarities">Easy to use riding telemetry</h3>

                                <p class="information__text text--similarities">The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.</p>

                                <a href="#" class="information__link-button link--button">Learn More</a>
                            </div>

                            <div class="information__wright">
                                <picture>                                    
                                    <source 
                                    type="image/avif"
                                    srcset="./img/zero.avif 1x, ./img/zero@2x.avif 2x"/>
                                    
                                    <source 
                                    type="image/webp"
                                    srcset="./img/zero.webp 1x, ./img/zero@2x.webp 2x"/>
                                    
                                    <img src="./img/zero.jpg" alt="extra costs equal to zero" class="information__img" srcset="./img/zero.jpg 1x, ./img/zero@2x.jpg 2x"/>
                                </picture>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}