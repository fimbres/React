import Raven from "raven-js";

const init = () => {
    Raven.config("https://5c6e7c9cb5044201bcfeeeef5e41be52@o1317991.ingest.sentry.io/6571682", {
        release: "1-0-0",
        environment: "development-test"
    }).install();
}

const log = error => {
    Raven.captureException(error);
}

export default {
    init,
    log
}