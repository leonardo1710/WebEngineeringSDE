import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Profile");
    }

    async getHtml() {
        return `
            <h1>Profile Page</h1>
            <p>my profile</p>
        `;
    }
}