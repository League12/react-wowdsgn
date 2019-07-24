let state = {
    isShowFooterBar: true
};

function isShowFooterBar(previousState = state, action) {

    let {type, payload} = action;

    switch (type) {
        case 'hideFooterBar':
            return payload;
        case 'showFooterBar':
            return payload;
        default:
    }

    return previousState;

}

export default isShowFooterBar;
