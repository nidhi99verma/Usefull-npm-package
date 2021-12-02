import React, { useState } from 'react'
import {
    ChromePicker,
    CirclePicker,
    AlphaPicker,
    BlockPicker,
    CompactPicker,
    GithubPicker,
    HuePicker,
    PhotoshopPicker,
    SketchPicker,
    SliderPicker,
    SwatchesPicker,
    MaterialPicker,
    TwitterPicker,
} from 'react-color'

export default function ReactColor() {

    const [color, setColor] = useState('#fff')
    const [showColorPicker, setShowColorPicker] = useState(false)

    return (
        <div>
            <button onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>
                {showColorPicker ? 'Close color picker' : 'Pick a color'}
            </button>
            {showColorPicker && (
                <ChromePicker
                    color={color}
                    onChange={updatedColor => setColor(updatedColor.hex)}
                />
            )}
            <h2>You picked {color}</h2>
            <br/>
            <CirclePicker />
            <br/>
            <AlphaPicker />
            <br/>
            <BlockPicker />
            <br/>
            <CompactPicker />
            <br/>
            <GithubPicker />
            <br/>
            <HuePicker/>
            <br/>
            <PhotoshopPicker/>
            <br/>
            <SketchPicker/>
            <br/>
            <SliderPicker/>
            <br/>
            <SwatchesPicker/>
            <br/>
            <MaterialPicker/>
            <br/>
            <TwitterPicker/>
            <br/>
        </div>
    )
}
