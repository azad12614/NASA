import React from 'react'
import './Plan.css'

const Plan = () => {
    return (
        <div class="text-main">
            <div class="hit-the-floor">404</div>
            <div class="Flicker">
                <h1 class="text" data-flicker="i" contenteditable>
                    Flicker
                </h1>
                <span class="text" aria-hidden="true">i</span>
            </div>
            <div class="Frozen">
                <h1 data-heading="Frozen" contenteditable>
                    Frozen
                    <span class="animation" aria-hidden="true">Frozen</span>
                </h1>
            </div>
            <div class="AWESOME">
                <div class="text" contentEditable="true">
                    AWESOME
                </div>
            </div>
            <div class="Element">
                <div class="fire">FIRE</div>
                <div class="water">WATER</div>
                <div class="bubbles">BUBBLES</div>
                <div class="stars">STARS</div>
                <div class="snow">SNOW</div>
                <div class="AZAD">AZAD</div>
                <div class="AZAD2">AZAD</div>
            </div>
            <div class="kaboom">
                <h1>
                    KABOOM
                </h1>
            </div>
        </div>
    )
}

export default Plan