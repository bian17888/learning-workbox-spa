import React from 'react';
import {Link} from 'react-router-dom'

const Home = ()=>{
    return (
        <article>
            <h1>News</h1>
            <section>
            <div className="img-container left column">
                <img src="images/home/business.jpg" alt="A person reading the business section of a newspaper" />
            </div>
            <div className="right column">
                <h2 className="headline">Headline</h2>
                <p className="content">
                I love cheese, especially manchego swiss. ☺ Fromage queso jarlsberg cheesy
                feet emmental cottage cheese camembert de normandie bocconcini. Cottage cheese
                everyone loves cauliflower cheese rubber cheese squirty cheese halloumi cow
                fondue. Bocconcini cheese and biscuits everyone loves fondue red leicester
                st. agur blue cheese rubber cheese ricotta. Cheesy grin mozzarella.
                </p>
            </div>
            </section>
            <section>
            <div className="left column">
                <h4 className="list-title">Trending Articles</h4>
                <ul className="vertical-list">
                <li className="list-item"><Link to="/articles/1" className="post-link">Article 1</Link></li>
                <li className="list-item"><Link to="/articles/2" className="post-link">Article 2</Link></li>
                <li className="list-item"><Link to="/articles/3" className="post-link">Article 3</Link></li>
                <li className="list-item"><Link to="/articles/4" className="post-link">Article 4</Link></li>
                <li className="list-item"><Link to="pages/article-missing.html" className="post-link">Non-existent
                    article</Link></li>
                </ul>
            </div>
            <div className="right column">
                <h4 className="list-title">Archived Posts</h4>
                <ul className="vertical-list">
                <li className="list-item"><Link to="/posts/1" className="post-link">Archived Post 1</Link></li>
                <li className="list-item"><Link to="/posts/2" className="post-link">Archived Post 2</Link></li>
                <li className="list-item"><Link to="/posts/3" className="post-link">Archived Post 3</Link></li>
                <li className="list-item"><Link to="pages/post-missing.html" className="post-link">Non-existent Post 4</Link>
                </li>
                </ul>
            </div>
            </section>
        </article>
    );
}

export default Home;