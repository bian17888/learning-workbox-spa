import React from 'react';
import { useParams } from 'react-router-dom'

const PostDetail = ()=>{
    const {id} = useParams();
    return (
        <article id="post">

            <section>

            <div class="img-container left column">
                <img src="/images/articles/solar.jpg" alt="Solar panels in a field" />
            </div>

            <div class="right column">
                <h2 class="headline">Archived Post {id}</h2>
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

export default PostDetail;