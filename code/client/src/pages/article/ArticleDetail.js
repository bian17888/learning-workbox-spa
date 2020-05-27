import React from 'react';
import {useParams} from 'react-router-dom'

const ArticleDetail = ()=>{
    const {id} = useParams();
    return (
        <article>
            <section>
                <div class="img-container left column">
                    <img src="/images/articles/buildings.jpg" alt="Looking up at skyscrapers" />
                </div>

                <div class="right column">
                    <h2 class="headline">Article {id}</h2>
                <p class="content">
                    I love cheese, especially manchego swiss. ☺ Fromage queso jarlsberg cheesy
                    feet emmental cottage cheese camembert de normandie bocconcini. Cottage cheese
                    everyone loves cauliflower cheese rubber cheese squirty cheese halloumi cow
                    fondue. Bocconcini cheese and biscuits everyone loves fondue red leicester
                    st. agur blue cheese rubber cheese ricotta. Cheesy grin mozzarella.
                </p>
                </div>
            </section> 
        </article>
    );
}

export default ArticleDetail;