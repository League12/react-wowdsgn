
function showFooterBar() {

    return {type: 'showFooterBar', payload: true};

}

function hideFooterBar() {

    return {type: 'hideFooterBar', payload: false};

}

export {showFooterBar, hideFooterBar};
