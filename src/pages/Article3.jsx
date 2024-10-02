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
                            <p>Impacts of</p>
                            {/* <h1>Climate Change</h1> */}
                            <div class="wrapper">
                                <img src="https://svgshare.com/i/An7.svg" alt="water icon" />
                                <h1>Climate <span class="mask">Change</span></h1>
                            </div>
                            <div class="byline">Rising Sea Levels</div>
                        </div>
                        <div class="image3"></div>
                    </div>
                    <div class="neo-video-player">
                        <iframe
                            src="https://www.youtube.com/embed/WadD54Ywvz4?si=KlehYEUFva4pCycT">
                        </iframe>
                    </div>
                    <div class="article-text">
                        <h1>
                            <span class="material-symbols-outlined">
                                grade
                            </span>
                            reader3
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