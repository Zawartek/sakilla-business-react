const customerFormHelper = {
    
    verifyAllFields: (props) => (
        ((props.firstName !== "") && (props.lastName !== "") && (props.email !== "") && (props.address !== "") && (props.city !== "") && (props.country !== "")) ? true : false
    )
}

export {customerFormHelper};