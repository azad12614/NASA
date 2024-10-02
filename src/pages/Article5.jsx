import React from 'react'
import './Article.css'
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import Top from '../components/Top.jsx';

const Article = () => {
    return (
        <>
            <Nav></Nav>
            <div class="articles">
                <article>
                    <div class="article-header">
                        <div class="headline">
                            <p>Introduction to </p>
                            {/* <h1>Climate Change</h1> */}
                            <div class="wrapper">
                                <img src="https://svgshare.com/i/1B4M.svg" alt="class icon" />
                                <h1>Adaptation <span class="mask">Strategies</span></h1>
                            </div>
                            <div class="byline">Preparing for Climate-Related Impacts</div>
                        </div>
                        <div class="image5"></div>
                    </div>
                    <div class="neo-video-player">
                        <iframe
                            src="https://www.youtube.com/embed/fmBDZKOdbkY?si=WWcuzhtPEoE2ebaT">
                        </iframe>
                    </div>
                    <div class="article-text">
                        <h1>
                            <span class="material-symbols-outlined">
                                grade
                            </span>
                            reader5
                        </h1>
                        <p class="first">first</p>

                        <strong>
                            hello
                        </strong>
                        <p>
                            <span class="material-symbols-outlined">
                                arrow_forward_ios
                            </span>
                            <strong>x:</strong> y
                        </p>
                    </div>
                </article>
            </div>
            <Footer></Footer>
            <Top></Top>
        </>
    )
}

export default Article