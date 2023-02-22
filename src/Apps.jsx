import playStore from "./assets/playstore.svg";
import appStore from "./assets/appstore.svg";

export function Apps () {
    return (
        <section class="apps">
        <div class="container">
            <div class="apps__wrapper dfalc">
                <h3 class="apps__heading">Sign up and Scoot off today</h3>
        
                <ul class="apps__list-apps dfalc">
                    <li class="apps__items-apps">
                        <a href="" class="apps__link-apps dfalc">
                            <img src={playStore} alt="" class="apps__img-appstore"/>
                            
                            <div class="apps__text-wrapper">
                                <p class="apps__text">Available on the</p>

                                <h4 class="apps__items-heading">AppStore</h4>
                            </div>
                        </a>
                    </li>
        
                    <li class="apps__items-apps">
                        <a href="" class="apps__link-apps dfalc">
                            <img src={appStore} alt="" class="apps__img-appstore"/>
                            
                            <div class="apps__text-wrapper">
                                <p class="apps__text">Get it on</p>
                                
                                <h4 class="apps__items-heading">GooglePlay</h4>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    )
}