import Locator = CodeceptJS.Locator;
import * as CodeceptJS from "codeceptjs";
const {I} = inject()

export default class Page {

    private readonly url: string | null;

    constructor(url) {
        this.url = url;
    }

    open() : void {
        I.amOnPage(this.url);
    }

    waitForOpened() : void {
        I.seeInCurrentUrl(this.url);
    }

}

