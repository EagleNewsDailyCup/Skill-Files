exports.handler = (event, context) => {
    if(event.session.new) {
        console.log("New Session")
    }

    switch(event.request.type) {
        case "LaunchRequest":
            console.log("LR")

            break
        case "IntentRequest":
            console.log("IR")

            break
        case "SessionEndedRequest":
            console.log("SER")

            break
        default:
            context.fail("INVAL: ${event.request.type}")
    }
}