function hideFooterBar() {
    return {type: "hideFooterBar", payload: false}
}

function showFooterBar() {
    return {type: "showFooterBar", payload: true}
}

export {hideFooterBar, showFooterBar}
