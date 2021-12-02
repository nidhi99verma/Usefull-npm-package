import React from 'react';
import { css } from '@emotion/core'
import {
    BounceLoader,
    BarLoader,
    BeatLoader,
    CircleLoader,
    ClimbingBoxLoader,
    ClipLoader,
    ClockLoader,
    DotLoader,
    FadeLoader,
    GridLoader,
    HashLoader,
    MoonLoader,
    PacmanLoader,
    PropagateLoader,
    PuffLoader,
    PulseLoader,
    RingLoader,
    RiseLoader,
    RotateLoader,
    ScaleLoader,
    SkewLoader,
    SquareLoader,
    SyncLoader,
} from 'react-spinners';

const loaderCSS = css`
  margin-top: 25px;
  margin-bottom: 25px;
`

export default function ReactSpinners() {

    return (
        <div>

            <BounceLoader css={loaderCSS} size={48} color='orange' loading />
            <br />
            <BarLoader css={loaderCSS} size={48} color='red' loading />
            <br />
            <BeatLoader css={loaderCSS} size={48} color='blue' loading />
            <br />
            <CircleLoader css={loaderCSS} size={48} color='green' loading />
            <br />
            <ClimbingBoxLoader css={loaderCSS} size={48} color='yellow' loading />
            <br />
            <ClipLoader css={loaderCSS} size={48} color='pink' loading />
            <br />
            <ClockLoader css={loaderCSS} size={48} color='black' loading />
            <br />
            <DotLoader css={loaderCSS} size={48} color='crimsom' loading />
            <br />
            <FadeLoader css={loaderCSS} size={48} color='gray' loading />
            <br />
            <GridLoader css={loaderCSS} size={48} color='skyblue' loading />
            <br />
            <HashLoader css={loaderCSS} size={48} color='orange' loading />
            <br />
            <MoonLoader css={loaderCSS} size={48} color='blue' loading />
            <br />
            <PacmanLoader css={loaderCSS} size={48} color='orange' loading />
            <br />
            <PropagateLoader css={loaderCSS} size={48} color='crimsom' loading />
            <br />
            {/* <PuffLoader css={loaderCSS} size={48} color='orange' loading /> */}
            <br />
            <PulseLoader css={loaderCSS} size={48} color='skyblue' loading />
            <br />
            <RingLoader css={loaderCSS} size={48} color='green' loading />
            <br />
            <RiseLoader css={loaderCSS} size={48} color='orange' loading />
            <br />
            <RotateLoader css={loaderCSS} size={48} color='black' loading />
            <br />
            <ScaleLoader css={loaderCSS} size={48} color='orange' loading />
            <br />
            <SkewLoader css={loaderCSS} size={48} color='pink' loading />
            <br />
            <SquareLoader css={loaderCSS} size={48} color='orange' loading />
            <br />
            <SyncLoader css={loaderCSS} size={48} color='yellow' loading />
            <br />
        </div>
    )
}
