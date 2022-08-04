class AboutYouPage {
    constructor() {
        this.videoModalId = '#videoModal'
        this.videoId = '#example-video_html5_api'
    }

    verifyVideoIsPaused(){
        cy.get(this.videoModalId)
            .should('be.visible')
            .find(this.videoId)
            .then(([videoEl]) => {
                expect(videoEl.paused).to.equal(true);
              })
    }
   
}

export const aboutYouPage = new AboutYouPage()