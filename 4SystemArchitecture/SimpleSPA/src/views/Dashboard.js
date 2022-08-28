import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Welcome to SPA App!</h1>
            <div>
            <input type="range" id="volume" name="volume"
                    min="0" max="11">
            <label for="volume">Volume</label>
            </div>
            <p>Some Text. Balbals</p>
        `;
    }
}